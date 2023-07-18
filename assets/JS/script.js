let contatore = 0;
let valoreImpostato = 0;

function impostaValore() {
    const incrementoInput = document.getElementById("incrementoInput");
    valoreImpostato = parseInt(incrementoInput.value);

    if (isNaN(valoreImpostato)) {
        return; // Esci dalla funzione se l'input non è un numero valido
    }
}

function aggiungi() {
    contatore += valoreImpostato;
    document.getElementsByClassName("count")[0].innerHTML = contatore;

    if (contatore >= 0) {
        document.getElementsByClassName("count")[0].style.color = ""; // Reimposta il colore predefinito
    }
}

function diminuisci() {
    contatore -= valoreImpostato;
    document.getElementsByClassName("count")[0].innerHTML = contatore;

    if (contatore < 0) {
        document.getElementsByClassName("count")[0].style.color = "red";
    }
}


function reset() {
    if (contatore !== 0) {
        contatore = 0;
    }

    document.getElementsByClassName("count")[0].innerHTML = contatore;
    document.getElementsByClassName("count")[0].style.color = ""; // Reimposta il colore predefinito
}







  
  
  
  

