/* This program when run randomly selects a message from three stored messages and prints it */


const message1 = 'i love you right now';
const message2 = 'i hate you right now';
const message3 = 'i am blown right now';

const messages = [message1, message2, message3];

function openMessage() {
    var randomnumber = Math.floor(Math.random() * 3);
    return messages[randomnumber];
}

console.log(openMessage());