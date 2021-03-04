var mailUtente = prompt('inserisci la tua e-mail');
var arr = ['prova1@libero.it', 'prova2@gmail.com', 'prova3@yahoo.it'];

console.log(mailUtente, arr, mailUtente);

for (var i = 0; i < arr.length; i++){

console.log(i, arr[i]);

if (arr[i] == mailUtente){
console.log('accesso consentito')

} else{
    console.log('indirizzo non corretto! Riprova.')
  }
}

console.log(i);
