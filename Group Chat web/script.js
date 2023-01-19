let socket = io("http://localhost:8000/");

const messageInput = document.getElementById('messageInput');
const messageButton = document.getElementById('messageButton');
const roomInput = document.getElementById('roomInput');
const roomButton = document.getElementById('roomButton');
const form = document.getElementById('form');
const messageContainer = document.getElementById("messageContainer");

let name = prompt("Enter your name");
socket.emit('new-user-joined', name);

// User Defined Functions
function displayMessage(message, info){
    if (info == "info") {
        messageContainer.innerHTML += `<div class="alert shadow-lg"><span>${message}</span></div>`;        
        return;
    }
    let side = info;
    messageContainer.innerHTML += `<li class="chat chat-${side} p-2"><div class="chat-bubble">${message}</div></li>`;
    socket.emit('message', message);
}

roomButton.onclick = () => {
    const room = roomInput.value;
    console.log(room);
};


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = messageInput.value;
    const room = roomInput.value;

    if(message === "") return;

    displayMessage(message, "end");
    socket.emit("message", message)
    messageInput.value = "";
    return;
});

// socket.io Events
socket.on('user-joined', name =>{
    console.log(displayMessage((name + " joined the chat"), "info"),);
});

socket.on('receive', (message) => {
    displayMessage(`${message}`, "start");
});

// socket.on('receive', (message) => {
//     displayMessage(message, "start", false);
// });