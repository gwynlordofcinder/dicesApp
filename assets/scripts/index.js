const output = document.getElementById('output');
const d4 = document.getElementById('buttond4');
const d6 = document.getElementById('buttond6');
const d8 = document.getElementById('buttond8');
const d10 = document.getElementById('buttond10');
const d12 = document.getElementById('buttond12');
const d20 = document.getElementById('buttond20');
const showLog = document.getElementById('showLog');
let log = [];

const getRandomNumber = diceSelector =>
  Math.floor(Math.random() * diceSelector + 1);

const writeToLog = result => log.push(result);

d4.addEventListener('click', () => {
  output.textContent = 'd4' + ' ' + getRandomNumber(4);
  writeToLog(output.textContent);
});
d6.addEventListener('click', () => {
  output.textContent = 'd6' + ' ' + getRandomNumber(6);
  writeToLog(output.textContent);
});
d8.addEventListener('click', () => {
  output.textContent = 'd8' + ' ' + getRandomNumber(8);
  writeToLog(output.textContent);
});
d10.addEventListener('click', () => {
  output.textContent = 'd10' + ' ' + getRandomNumber(10);
  writeToLog(output.textContent);
});
d12.addEventListener('click', () => {
  output.textContent = 'd12' + ' ' + getRandomNumber(12);
  writeToLog(output.textContent);
});
d20.addEventListener('click', () => {
  output.textContent = 'd20' + ' ' + getRandomNumber(20);
  writeToLog(output.textContent);
});

showLog.addEventListener('click', () =>
  log.length > 0
    ? alert(log)
    : alert("Maybe you should roll a dice first don't you?")
);

console.dir(output)