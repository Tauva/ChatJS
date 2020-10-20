const { rejects } = require('assert')
const fs = require('fs');
const { resolve } = require('path');

module.exports = {

bar : async function createList() {

    return fs.readFileSync('./public/util/pseudos.txt',"utf8").split(' '); 
   
},

fez : function giveUsername() {
    let arrayList = this.bar();
    let rdm = Math.floor(Math.random() * arrayList.length);
    if (arrayList.length == 0)
        return ('Anonimous');
    console.log(arrayList);
    return (arrayList[rdm]);
},

fir :  function disconnectUsername(username) {
    arrayList.push(username);
}
};
