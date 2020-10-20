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
  console.log("User " + User.fez() + " Connected");
    socket.on('add user ', (username) => {
      socket.username = User.fez();
    });

    socket.on('chat message', (msg) => {
      io.emit('username',socket.username);
      io.emit('chat message', msg);
      console.log(socket.username + " send message: " + msg);
    });
  
    socket.on('disconnect',() => {
      
      console.log("a user disconected");
    });
});



http.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});

app.use(express.static('public'));