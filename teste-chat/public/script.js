const socket = io.connect('http://localhost:8000');

let messages = document.querySelector('.messages');

function renderMessage(message) {
  messages.append(`<div class="message"><strong>${message.author}</strong>: ${message.message}</div>`);
}

socket.on('previousMessages', (messages) => {
  for (let message of messages) {
    renderMessage(message);
  }
});

socket.on('receivedMessage', (message) => {
  renderMessage(message);
});

const chat = document.querySelector('#chat');

var elementAuthor = document.querySelector('.username');
var elementMessage = document.querySelector('.message');

chat.addEventListener('submit', (event) => {
  event.preventDefault();

  var author = elementAuthor.value;
  var message = elementMessage.value;  

  if (author.length && message.length) {
    var messageObject = {
      author,
      message,
    };

    renderMessage(messageObject);

    socket.emit('sendMessage', messageObject);
  }
});