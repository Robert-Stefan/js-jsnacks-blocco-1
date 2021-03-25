/* Snack 1

    Il software deve chiedere per 5 volte all’utente di inserire un numero.
    Il programma stampa la somma di tutti i numeri inseriti.
    Esegui questo programma in due versioni, con il for e con il while

*/

/*var max = 6;
var tentativi = 1;
var somma = 0;*/

/*while (tentativi < max) {
    var utente = parseInt(prompt('Inserisci un numero: '));
    console.log(utente);
    somma += utente;
    tentativi++;
}

console.log(somma);*/

/*for (var tentativi = 1; tentativi < max; tentativi++) {
    var utente = parseInt(prompt('Inserisci un numero: '));
    console.log(utente);
    somma += utente;
}
console.log(somma);*/


/* Snack 2

Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

*/

/*var utente = parseInt(prompt('Inserisci un numero: '));
somma = 1;

if (utente % 2 != 0) {
    console.log(utente);
} else {
    totale = somma + utente;
    console.log(totale);
}*/


/* Snack 3
 
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.    

*/

/*var nomi = ['Luca', 'Antonio', 'Paolo', 'Sempronio'];
console.log(nomi);
var cognomi = ['Stefano', 'Petrucci', 'Pincopallino', 'Corrido'];
console.log(cognomi);

lista3 = [];
counter = 1;
max = 4;

while ( counter < max ) {
    var lista = nomi[Math.floor(Math.random() * nomi.length)];
    
    var lista2 = cognomi[Math.floor(Math.random() * cognomi.length)];
    
    var newlista3 = lista + ' ' + lista2;

    lista3.push(newlista3);

    counter++;
}
console.log(lista3);*/


/** Snack 4

Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

*/

/*var numeri = [2, 7, 1, 13, 150, 13, 8];

var totale = 0;

for (var i = 0; i < numeri.length; i++) {
    console.log( numeri[i] );
    console.log( 'Posizione: ', i );

    if ( i % 2 !== 0 ) {
        totale += numeri[i];
    } 
}

console.log('Tot: ', totale);*/


/**
 
 

 */