
const message1 = 'i love you right now';
const message2 = 'i hate you right now';
const message3 = 'i am blown right now';

const messages = [message1, message2, message3];

function openMessage() {
    var randomnumber = Math.floor(Math.random() * 9);
    return messages[randomnumber];
}

console.log(openMessage());