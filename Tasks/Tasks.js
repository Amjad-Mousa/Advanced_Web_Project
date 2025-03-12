document.addEventListener("DOMContentLoaded", function () {
    // Get tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const tasksGrid = document.getElementById("tasks-grid");
    const sortBy = document.getElementById("sort-by");
    const filterStatus = document.getElementById("filter-status");
    const createTaskBtn = document.getElementById("create-task-btn");

    // Redirect to Create a New Task page
    createTaskBtn.addEventListener("click", function () {
        window.location.href = "../AddTask/AddTask.html"; 
    });

    // Render tasks
    function renderTasks(tasks) {
        tasksGrid.innerHTML = ""; // Clear existing content

        tasks.forEach((task) => {
            const taskCard = document.createElement("div");
            taskCard.classList.add("task-card");

            let statusClass = "";
            if (task.status === "In Progress") statusClass = "in-progress";
            else if (task.status === "Completed") statusClass = "completed";
            else if (task.status === "Pending") statusClass = "pending";

            taskCard.innerHTML = `
                <h3>${task.taskName}</h3>
                <p><strong>Project:</strong> ${task.projectTitle}</p>
                <p><strong>Assigned Student:</strong> ${task.assignedStudent}</p>
                <p><strong>Status:</strong> <span class="status ${statusClass}">${task.status}</span></p>
                <p><strong>Due Date:</strong> ${task.dueDate}</p>
            `;
            tasksGrid.appendChild(taskCard);
        });
    }

    // Initial render
    renderTasks(tasks);

    // Sort and filter functionality
    sortBy.addEventListener("change", function () {
        const sortedTasks = [...tasks].sort((a, b) => {
            if (sortBy.value === "Task ID") return a.taskId - b.taskId;
            if (sortBy.value === "Due Date") return new Date(a.dueDate) - new Date(b.dueDate);
            if (sortBy.value === "Status") return a.status.localeCompare(b.status);
        });
        renderTasks(sortedTasks);
    });

    filterStatus.addEventListener("change", function () {
        const filteredTasks = tasks.filter(task =>
            filterStatus.value === "All" || task.status === filterStatus.value
        );
        renderTasks(filteredTasks);
    });
});
