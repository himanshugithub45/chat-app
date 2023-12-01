function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;
  
  if (message.trim() !== '') {
    const chatBox = document.getElementById('chat-box');
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);
    
    messageInput.value = '';
  }
}
