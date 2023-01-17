const messageInput = document.getElementById('messageInput');
const messageButton = document.getElementById('messageButton');
const roomInput = document.getElementById('roomInput');
const roomButton = document.getElementById('roomButton');
const form = document.getElementById('form');
const messageContainer = document.getElementById("messageContainer");

// User Defined Functions
function displayMessage(message){
    // const li = document.createElement("li");
    // li.classList.add("chat");
    // li.classList.add("chat-start");

    // const div = document.createElement("div");
    // div.classList.add("chat-bubble");
    // div.textContent = message;
    
    // li.appendChild(div);
    // messageContainer.append(li);

    messageContainer.innerHTML = `<li class="chat chat-start text-left p-2">
    <div class="chat-bubble">${message}!</div>
</li>`

    // console.log(message)
    // const div = document.createElement("div");
    // div.textContent = message;
    // messageContainer.append(div);

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

    displayMessage(message);
    messageInput.value = "";
});