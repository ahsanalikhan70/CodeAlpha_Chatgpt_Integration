const ws = new WebSocket('ws://localhost:3000');

const messagesDiv = document.getElementById('messages');
const input = document.getElementById('input');
const sendButton = document.getElementById('send');

ws.onmessage = (event) => {
  const message = document.createElement('div');
  message.textContent = `Bot: ${event.data}`;
  messagesDiv.appendChild(message);
};

sendButton.onclick = () => {
  const userMessage = input.value;
  const message = document.createElement('div');
  message.textContent = `You: ${userMessage}`;
  messagesDiv.appendChild(message);

  ws.send(userMessage);
  input.value = '';
};
