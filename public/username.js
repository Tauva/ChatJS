const { rejects } = require('assert')
const fs = require('fs');
const { resolve } = require('path');
let arrayList;

function readFile(path) {
    let promise = new Promise((resolve, rejects) => {
        fs.readFile(path,'utf8',(err,text) => {
            if (err)
                rejects(err);
            else {
                resolve(text);
            }
        });
    });
    return (promise);
}

async function createList() {
    let regex = /\r\n/gi;

    let list = await readFile("./util/pseudos.txt");
    arrayList = list.split(regex);
}

function giveUsername() {
    let rdm = Math.floor(Math.random() * arrayList.lenght);

    if (arrayList.lenght == 0)
        return ('Anonimous');
    return (arrayList.splice(rdm, 1));
}

function disconnectUsername(username) {
    arrayList.push(username);
}