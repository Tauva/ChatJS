const { Socket } = require('dgram');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const User = require('./public/username');

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/public/index.html');
});



io.on('connection',socket => {
  socket.username = User.fez();
  console.log("Username: " + socket.username);

  socket.on('chat message', msg  => {
  socket.broadcast.emit('chat message', socket.username + ": " + msg);
  console.log(socket.username + " send message: " + msg);
  });

  socket.on('disconnect',() => {
  console.log(socket.username + " disconected");
  });
});



http.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});

app.use(express.static('public'));