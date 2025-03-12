document.addEventListener("DOMContentLoaded", () => {
    // Fake Dynamic Data
    document.getElementById("projectsCount").textContent = 5;
    document.getElementById("studentsCount").textContent = 20;
    document.getElementById("tasksCount").textContent = 10;
    document.getElementById("finishedProjectsCount").textContent = 2;

    // Update Date & Time
    function updateTime() {
        const now = new Date();
        document.getElementById("datetime").textContent = now.toLocaleString();
    }
    updateTime();
    setInterval(updateTime, 1000);

    // Chart Data
    const ctx = document.getElementById("dashboardChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Projects", "Students", "Tasks", "Finished Projects"],
            datasets: [{
                label: "Count",
                data: [5, 20, 10, 2],
                backgroundColor: ["blue", "red", "green", "yellow"]
            }]
        }
    });
});
