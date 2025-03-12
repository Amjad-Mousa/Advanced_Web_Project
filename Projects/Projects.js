document.addEventListener("DOMContentLoaded", function () {
    const projectContainer = document.getElementById("projects-container");
    const filterSelect = document.getElementById("filter-select");
    const searchBar = document.getElementById("search-bar");
    const detailsPanel = document.getElementById("details-panel");
    const closeDetails = document.getElementById("close-details");
    const addProjectBtn = document.querySelector(".add-project");

    // Redirect to Add New Project page
    addProjectBtn.addEventListener("click", function () {
        window.location.href = "../AddProject/AddProject.html"; // Change this to the correct URL
    });

    function renderProjects(filter = "All", searchQuery = "") {
        const projects = JSON.parse(localStorage.getItem("projects")) || []; // Load projects from localStorage
        projectContainer.innerHTML = "";
        projects.forEach((project) => {
            if (filter !== "All" && project.category !== filter) return;
            if (searchQuery && !project.title.toLowerCase().includes(searchQuery.toLowerCase())) return;

            const projectElement = document.createElement("div");
            projectElement.classList.add("project-card");
            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p><strong>Students:</strong> ${project.students.join(", ")}</p>
                <p><strong>Category:</strong> ${project.category}</p>
                <div class="progress-bar">
                    <div class="progress" style="width: ${project.progress}%">${project.progress}%</div>
                </div>
            `;
            projectElement.addEventListener("click", () => showDetails(project));
            projectContainer.appendChild(projectElement);
        });
    }

    function showDetails(project) {
        document.getElementById("project-title").textContent = project.title;
        document.getElementById("project-description").textContent = project.description;
        document.getElementById("project-students").textContent = project.students.join(", ");
        document.getElementById("project-category").textContent = project.category;
        document.getElementById("project-progress").textContent = `${project.progress}%`;

        const tasksList = document.getElementById("project-tasks");
        tasksList.innerHTML = "";
        project.tasks.forEach((task) => {
            const taskItem = document.createElement("li");
            taskItem.textContent = `${task.name} (Assigned to: ${task.assignedTo}, Status: ${task.status})`;
            tasksList.appendChild(taskItem);
        });

        detailsPanel.style.display = "flex";
    }

    closeDetails.addEventListener("click", () => {
        detailsPanel.style.display = "none";
    });

    filterSelect.addEventListener("change", () => {
        renderProjects(filterSelect.value, searchBar.value);
    });

    searchBar.addEventListener("input", () => {
        renderProjects(filterSelect.value, searchBar.value);
    });

    renderProjects(); // Call to initially render projects
});
