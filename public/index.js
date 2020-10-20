
(() => {
  const socket = io();

  // Détecte les évènements d'envoie de messages:
  // - appuie sur le bouton "envoyer"
  // - appuie sur la touche entrée du clavier
  // Envoie le message
  // Vide le contenu de l'input 'm'

  $('form').submit(function(e) {
    e.preventDefault();
    let msg = {
      text : $('#m').val()
    };
    let elem = document.createElement('li');
    let span = document.createElement('span');

    span.setAttribute("class","username");
    span.append("moi");
    elem.innerHTML = msg.text;
    span.setAttribute("class", "sent");

    span.append(elem);
    $('#messages').append(span);

//    $('#messages').append($('<li>').html('<span class="username">' + 'Moi' + '</span> ' + msg.text));
    socket.emit('chat message', msg.text);
    $('#m').val('');
  });

  // Créer un nouvel élément 'li'
  // Met le contenu du message 'msg' dans le nouvel élément
  // Ajoute le nouvel élément à la liste de messages

  socket.on('chat message', function(msg) {

    $('#messages').append($('<li>').html('<span class="username">' + msg.username + '</span> ' + msg.text));
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