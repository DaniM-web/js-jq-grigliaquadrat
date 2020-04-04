// Creare in HTML una griglia formata da 8x8 rettangolini tutti bianchi.
// 15 di questi rettangolini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi



$(document).ready(function(){

var square;
var contenitore = $('.container');
var nmrRandom;
var assigned = [];
var nebo = false;
var indiceSquare;
//creo 64 quadrati nel mio html


for (var i = 0; i < 64; i++) {

  contenitore.append('<div class="square"></div>')
  square = $('.square');
}

// creo un array al cui interno assegno 15 numeri random da 1 a 64
  for (var i = assigned.length; assigned.length < 15; i++) {
    nmrRandom = Math.floor(Math.random() * 64 )+ 1;
    numeroGenerato = assigned.indexOf(nmrRandom);
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
    indiceSquare = assigned[i]-1;
    $('.square').eq(indiceSquare).addClass('red');
  }

  if($(this).hasClass('red')){
    $(this).addClass('active');
    square.addClass('active green')+
    $('.restart').fadeIn('slow');

  }else {
    $(this).addClass('green');
  }

}
//funzione per resettare il gioco
function submit() {
  $('.restart').fadeOut('slow');
  location.reload(true);
}

});
