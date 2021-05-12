const input = document.getElementById("input");
const d4 = document.getElementById("buttond4");
const d6 = document.getElementById("buttond6");
const d8 = document.getElementById("buttond8");
const d10 = document.getElementById("buttond10");
const d12 = document.getElementById("buttond12");
const d20 = document.getElementById("buttond20");
let log = [];
const showLog = document.getElementById("showLog");

const getRandomNumber = (diceSelector) =>
  Math.floor(Math.random() * diceSelector + 1);

const writeToLog = (result) => log.push(result);

d4.addEventListener("click", () => {
  input.value = "d4" + " " + getRandomNumber(4);
  writeToLog(input.value);
});
d6.addEventListener("click", () => {
  input.value = "d6" + " " + getRandomNumber(6);
  writeToLog(input.value);
});
d8.addEventListener("click", () => {
  input.value = "d8" + " " + getRandomNumber(8);
  writeToLog(input.value);
});
d10.addEventListener("click", () => {
  input.value = "d10" + " " + getRandomNumber(10);
  writeToLog(input.value);
});
d12.addEventListener("click", () => {
  input.value = "d12" + " " + getRandomNumber(12);
  writeToLog(input.value);
});
d20.addEventListener("click", () => {
  input.value = "d20" + " " + getRandomNumber(20);
  writeToLog(input.value);
});

showLog.addEventListener("click", () => alert(log));
