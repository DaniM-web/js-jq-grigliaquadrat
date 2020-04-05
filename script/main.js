// Creare in HTML una griglia formata da 8x8 rettangolini tutti bianchi.
// 15 di questi rettangolini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi



$(document).ready(function(){

var square;
var contenitore = $('.container');
var nmrRandom;
var assigned = [];
var contatore = 0;

//creo 64 quadrati nel mio html
for (var i = 0; i < 64; i++) {

  contenitore.append('<div class="square"></div>');
  square = $('.square');

}

// creo un array al cui interno assegno 15 numeri random da 1 a 64
  for (var i = assigned.length; assigned.length < 15; i++) {
    nmrRandom = Math.floor(Math.random() * 64 )+ 1;
    var numeroGenerato = assigned.indexOf(nmrRandom);
 //condizione per non far ripetere i numeri uguali
    console.log("l'indice del numero random è " + numeroGenerato );
    if (numeroGenerato === -1) {
      assigned.push(nmrRandom);
  }
}
console.log(assigned);


square.click(
    squareClicked
  );

$('.restart').click(
  submit
);

  //faccio la funzione che assegna i colori al click del quadrato

function squareClicked() {
  //ciclo che assegna lo stile red a 15 div random, corrispondenti ai 15 numeri dell'array
  for (var i = 0; i < assigned.length; i++) {
    var indiceSquare = assigned[i]-1;
    $('.square').eq(indiceSquare).addClass('red');
  }
  // se il quadrato ha la classe rossa, allora
  if($(this).hasClass('red')){
    $(this).addClass('active');
    $('.red').addClass('bomba active');
    square.not('.red').addClass('green fiore');

    $('.losepage').fadeIn(5000);
    $('button.restart').slideDown(6000);
    //se non ha la classe rossa
  }else {
    $(this).addClass('green fiore');
  }

}
//funzione per resettare il gioco
function submit() {
  location.reload(true);
}

});
