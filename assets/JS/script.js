let contatore = 0;

function aggiungi() {
    contatore++;
    document.getElementsByClassName("count")[0].innerHTML = contatore;
    if (contatore >= 0) {
        document.getElementsByClassName("count")[0].style.color = ""; // Reimposta il colore predefinito
    }
}

function diminuisci() {
    contatore--;
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







  
  
  
  

