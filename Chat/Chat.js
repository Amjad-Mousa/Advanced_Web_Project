const users = [
    { id: 1, name: "Yaseen" },
    { id: 2, name: "Brea Aeesh" },
    { id: 3, name: "Ibn Al-Jawzee" },
    { id: 4, name: "Ibn Malik" },
    { id: 5, name: "Ayman Outom" },
    { id: 6, name: "Salah Salah" },
    { id: 7, name: "Yahya Leader" },
    { id: 8, name: "Salam Kareem" },
    { id: 9, name: "Isaac Nasir" },
    { id: 10, name: "Saeed Salam" }
];

const messages = {
    1: [{ text: "Salam Alykourn", sender: "received" }],
    // Add more messages for other users if needed
};

let currentUser = null;

const userList = document.getElementById('userList');
const chatHeader = document.getElementById('chatHeader');
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

function renderUsers() {
    userList.innerHTML = users.map(user => `
        <li data-id="${user.id}">${user.name}</li>
    `).join('');
}

function renderMessages(userId) {
    chatMessages.innerHTML = (messages[userId] || []).map(msg => `
        <div class="message ${msg.sender}">${msg.text}</div>
    `).join('');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function selectUser(userId) {
    currentUser = userId;
    chatHeader.textContent = `Chatting with ${users.find(user => user.id === userId).name}`;
    renderMessages(userId);
}

userList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const userId = parseInt(e.target.getAttribute('data-id'));
        selectUser(userId);
    }
});

sendButton.addEventListener('click', () => {
    const text = messageInput.value.trim();
    if (text && currentUser) {
        if (!messages[currentUser]) {
            messages[currentUser] = [];
        }
        messages[currentUser].push({ text, sender: "sent" });
        renderMessages(currentUser);
        messageInput.value = '';
    }
});

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});

renderUsers();