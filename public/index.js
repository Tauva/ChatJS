(() => {
  const socket = io();
  $('#send').click(() => {
    let msg = $('#m').val();
    let elem = document.createElement('li');
    elem.innerHTML = msg;
    socket.emit('chat message', msg);
    $('#messages').append(elem);
    $('m').value = null;
  });


  socket.on('connect', () => {
    console.log(socket.connected);
  });
  socket.on('disconnect', () => {
    console.log(socket.connected);
  });

})();