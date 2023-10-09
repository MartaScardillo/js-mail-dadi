const arrayEmails = [
  'FrodoBaggins1@gmail.com', // i=0 arrayEmails[i] => arrayEmails[0]
  'Gandalf_@gmail.com', // i=1 arrayEmails[i] => arrayEmails[1]
  'Gollum@gmail.com', // i=2 arrayEmails[i] => arrayEmails[2]
];

const lenghtArray = arrayEmails.length;

let isEmailFound = false;

let userEmail = prompt('Inserisci la tua email');
console.log('Benvenuto ' + userEmail + '!');

for (let i = 0; i < lenghtArray; i++) {
  let mail = arrayEmails[i];

  if (userEmail === mail) {
    isEmailFound = true;
  }
}

if (isEmailFound === true) {
  console.log('Buon Game!\n');
  let round = 1;
  let userPoints = 0,
    botPoints = 0,
    userWin;

  for (userPoints = 0, botPoints = 0; userPoints < 2 && botPoints < 2; ) {
    let userRandomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(
      '\n\nROUND: ' +
        round +
        '\n' +
        'Hai tirato il dado, ed è uscito... ' +
        userRandomNumber +
        '!'
    );

    let botRandomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(
      'Il tuo computer ha tirato il dado, ed è uscito... ' +
        botRandomNumber +
        '!'
    );

    if (userRandomNumber > botRandomNumber) {
      console.log('Hai vinto il round ' + round + '!');
      userPoints++;
      userWin = true;
    } else if (userRandomNumber < botRandomNumber) {
      console.log('Hai perso il round ' + round + '!');
      botPoints++;
      userWin = false;
    } else {
      console.log('Pareggio!');
    }

    console.log(
      '\nIl tuo punteggio è: ' +
        userPoints +
        '\nIl punteggio del tuo computer è: ' +
        botPoints
    );
    round++;
  }

  if (userWin) {
    console.log('HAI VINTO!');
  } else {
    console.log('HAI PERSO!');
  }
} else {
  console.log('TUUU NON PUOIIII PASSAREEEEEEEEEE!');
}
