document.getElementById('taskForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const projectTitle = document.getElementById('projectTitle').value;
    const taskName = document.getElementById('taskName').value;
    const assignedStudent = document.getElementById('assignedStudent').value;
    const status = document.getElementById('status').value;
    const dueDate = document.getElementById('dueDate').value;
    const messageElement = document.getElementById('message');

    if (!projectTitle || !taskName || !assignedStudent || !status || !dueDate) {
        messageElement.textContent = 'Please fill out all fields';
        return;
    }

    const task = {
        projectTitle,
        taskName,
        assignedStudent,
        status,
        dueDate
    };

    // Get existing tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Add the new task to the tasks array
    tasks.push(task);

    // Save updated tasks back to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    console.log('Task Added:', task);
    messageElement.textContent = 'Task added successfully!';
    messageElement.style.color = '#28a745'; // Green color for success message
    document.getElementById('taskForm').reset();

    // Clear the message after 3 seconds
    setTimeout(() => {
        messageElement.textContent = '';
    }, 3000);

    // Redirect to the Tasks page after 3 seconds
    setTimeout(() => {
        window.location.href = "../Tasks/Tasks.html";  // Change this to the correct relative URL
    }, 3000);
});
