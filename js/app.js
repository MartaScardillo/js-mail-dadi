const arrayEmails = [
  "Harry.Potter1@gmail.com", // i=0 arrayEmails[i] => arrayEmails[0]
  "DracoMalfoy_@gmail.com", // i=1 arrayEmails[i] => arrayEmails[1]
  "a", // i=2 arrayEmails[i] => arrayEmails[2]
];

const lenghtArray = arrayEmails.length;

let isEmailFound = false;

let userEmail = prompt("Email");

for (let i = 0; i < lenghtArray; i++) {
  let mail = arrayEmails[i];
  console.log(mail);

  if (userEmail === mail) {
    isEmailFound = true;
  }
}

if (isEmailFound === true) {
  console.log("accesso consentito");

  for (let i = 0; i < 1; i++) {
    let userRandomNumber = Math.floor(Math.random() * 6) + 1
    console.log(userEmail + ' ha tirato il dado, ed è uscito... ' + userRandomNumber + '!');
    let botRandomNumber = Math.floor(Math.random() * 6) + 1
    console.log('Il tuo computer ha tirato il dado, ed è uscito... ' + botRandomNumber + '!');

    if (userRandomNumber > botRandomNumber) {
        console.log('hai vinto il round ' + i '!');
    } else if (userRandomNumber < botRandomNumber){
        console.log('Hai perso il round ' + i '!');
    }
  }


} else {
  console.log("accesso negato");
}

