document.addEventListener("DOMContentLoaded", function () {
    const addProjectBtn = document.getElementById("add-project-btn");

    addProjectBtn.addEventListener("click", function () {
        const projectTitle = document.getElementById("project-title").value;
        const projectDescription = document.getElementById("project-description").value;
        const students = Array.from(document.querySelectorAll('input[name="students"]:checked')).map(el => el.value);
        const projectCategory = document.getElementById("project-category").value;
        const startDate = document.getElementById("start-date").value;
        const endDate = document.getElementById("end-date").value;
        const projectStatus = document.getElementById("project-status").value;

        if (!projectTitle || !projectDescription || students.length === 0 || !projectCategory || !startDate || !endDate || !projectStatus) {
            alert("Please fill out all fields.");
            return;
        }

        const project = {
            title: projectTitle,
            description: projectDescription,
            students: students,
            category: projectCategory,
            startDate: startDate,
            endDate: endDate,
            status: projectStatus,
            progress: 0,
            tasks: []
        };

        saveProject(project);

        window.location.href = "../Projects/Projects.html";
    });

    function saveProject(project) {
        const projects = JSON.parse(localStorage.getItem("projects")) || [];
        projects.push(project);
        localStorage.setItem("projects", JSON.stringify(projects));
    }
});
