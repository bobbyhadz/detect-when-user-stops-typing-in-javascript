console.log('bobbyhadz.com');

let timer;

const waitTime = 1000;

const messageInput = document.getElementById('message');

messageInput.addEventListener('keyup', event => {
  clearTimeout(timer);

  timer = setTimeout(() => {
    doneTyping(event.target.value);
  }, waitTime);
});

function doneTyping(value) {
  console.log(`The user is done typing: ${value}`);
}
