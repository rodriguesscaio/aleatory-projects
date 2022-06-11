const app = require('express')();

const http = require('http').createServer(app);
const io = require('socket.io')(http);


app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});



http.listen(3000, () => {
  console.log('chat-real time, up!')
});