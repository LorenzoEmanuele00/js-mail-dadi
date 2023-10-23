document.getElementById("play").addEventListener("click", function() {

    let userNumber = Math.round(Math.random () * 5 + 1);
    console.log (userNumber);

    let compNumber = Math.round(Math.random () * 5 + 1);
    console.log (compNumber);

    if (compNumber > userNumber) {
        document.querySelector ("h2").innerHTML = `Hai perso con un punteggio di ${compNumber} per il PC e di ${userNumber} per te`;
    } else if (compNumber < userNumber) {
        document.querySelector ("h2").innerHTML = `Hai vinto con un punteggio di ${compNumber} per il PC e di ${userNumber} per te`;
    } else {
        document.querySelector ("h2").innerHTML = `PAREGGIO con un punteggio di ${userNumber}`;
    }

});