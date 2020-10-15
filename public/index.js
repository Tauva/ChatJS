function ClearInput() {
  document.getElementById("send").value = null;
}
(() => {
  const socket = io();
  $('#send').click(() => {
    let msg = $('#m').val();
    socket.emit('chat message', msg);
    $('m').value = null;
  });

  socket.on('chat message', function(msg) {
    let elem = document.createElement('li');
    elem.innerHTML = msg;
    $('#messages').append(elem);
  });
  socket.on('connect', () => {
    console.log(socket.connected);
  });
  socket.on('disconnect', () => {
    console.log(socket.connected);
  });

})();