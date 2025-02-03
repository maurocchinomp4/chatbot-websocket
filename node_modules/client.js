const socket = new WebSocket('ws://localhost:8080');
const chatBox = document.getElementById('chat-box');
const input = document.getElementById('input');
const sendButton = document.getElementById('send');


socket.onmessage = (event) => {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('server-message');

 
    const image = document.createElement('img');
    image.src = '../../img/beatrice.png';  


   
    const messageText = document.createElement('span');
    messageText.textContent = event.data;

    messageDiv.appendChild(image);
    messageDiv.appendChild(messageText);
    
  
    setTimeout(() => {
        chatBox.appendChild(messageDiv);
    }, 1000);
};






sendButton.addEventListener('click', () => {
    const message = input.value; 

 
    if (message !== '') {
        
        socket.send(message);

       
        const messageElement = document.createElement('p');
        messageElement.textContent = ` Tu: ${message}`;
        messageElement.style.marginLeft = '20px';
        chatBox.appendChild(messageElement);

        input.value = '';
    } 
});