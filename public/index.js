
(() => {
  const socket = io();

  // Détecte les évènements d'envoie de messages:
  // - appuie sur le bouton "envoyer"
  // - appuie sur la touche entrée du clavier
  // Envoie le message
  // Vide le contenu de l'input 'm'

  $('form').submit(function(e) {
    e.preventDefault();
    let elem = document.createElement('li');
    elem.innerHTML = $('#m').val();
    elem.setAttribute("id","Sent");
    $('#messages').append(elem);

    socket.emit('chat message', $('#m').val());
    $('#m').val('');
  });

  // Créer un nouvel élément 'li'
  // Met le contenu du message 'msg' dans le nouvel élément
  // Ajoute le nouvel élément à la liste de messages

  socket.on('chat message', function(msg) {
    let elem = document.createElement('li');
    elem.setAttribute("id","Reply");
    elem.innerHTML = msg;
    $('#messages').append(elem);
  });


  // Envoie une notification de connection sur le log

  socket.on('connect', () => {
    console.log(socket.connected);
  });


  // Envoie une notification de déconnection sur le log

  socket.on('disconnect', () => {
    console.log(socket.connected);
  });

})();