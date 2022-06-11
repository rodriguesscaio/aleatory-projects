const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const routes = require('./routes');

app.use(express.json());
app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(routes);

let messages = [];

io.on('connection', (socket) => {
  console.log(`Socket conectado ${socket.id}`);

  socket.emit('previousMessages', messages);
  
  socket.on('sendMessage', data => {
    messages.push(data);
    socket.broadcast.emit('receivedMessage', data);
  });
});

server.listen(8000);
