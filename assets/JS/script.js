

 // Creazione e aggiunta degli elementi con JavaScript

 const mainContainer = document.querySelector('main');
 mainContainer.setAttribute('class', 'contenitore');

 // Creazione del div per il reset
 const resetContainer = document.createElement('div');
 resetContainer.setAttribute('class','contenitore-reset');
 mainContainer.appendChild(resetContainer);

 // Creazione del bottone di reset
 const resetButton = document.createElement('button');
 resetButton.textContent = 'Reset';
 resetButton.setAttribute('class', 'button-reset');
 document.querySelector('.button-reset').addEventListener('click', reset);
 resetContainer.appendChild(resetButton);

 // Creazione del font awesome icon per il reset
 const resetIcon = document.createElement('i');
 resetIcon.setAttribute('class', 'fas', 'fa-undo');
 resetButton.prepend(resetIcon);

 // Creazione dello span per il conteggio
 const countSpan = document.createElement('span');
 countSpan.textContent = '0';
 countSpan.setAttribute('class', 'count');
 mainContainer.appendChild(countSpan);

 // Creazione del div per il decremento
 const lessContainer = document.createElement('div');
 lessContainer.setAttribute('class', 'contenitore-meno');
 mainContainer.appendChild(lessContainer);

 // Creazione del bottone di decremento
 const lessButton = document.createElement('button');
 lessButton.setAttribute('class', 'button-less');
 document.querySelector('.button-less').addEventListener('click', diminuisci);
 lessContainer.appendChild(lessButton);

 // Creazione dello span per il segno meno
 const lessSpan = document.createElement('span');
 lessSpan.textContent = '-';
 lessSpan.setAttribute('class', 'sign');
 lessButton.appendChild(lessSpan);

 // Creazione dell'immagine di una bara per il decremento
 const lessImage = document.createElement('img');
 lessImage.src = 'assets/Icone/coffin.png';
 lessImage.alt = 'immagine di una bara';
 lessImage.setAttribute('class', 'bara');
 lessButton.appendChild(lessImage);

 // Creazione del div per l'incremento
 const plusContainer = document.createElement('div');
 plusContainer.setAttribute('class', 'contenitore-più');
 mainContainer.appendChild(plusContainer);

 // Creazione del bottone di incremento
 const plusButton = document.createElement('button');
 plusButton.setAttribute('class', 'button-plus');
 document.querySelector('.button-plus').addEventListener('click', aggiungi);
 plusContainer.appendChild(plusButton);

 // Creazione dello span per il segno più
 const plusSpan = document.createElement('span');
 plusSpan.textContent = '+';
 plusSpan.setAttribute('class', 'sign');
 plusButton.appendChild(plusSpan);

 // Creazione dell'immagine di una bara per l'incremento
 const plusImage = document.createElement('img');
 plusImage.src = 'assets/Icone/coffin.png';
 plusImage.alt = 'immagine di una bara';
 plusImage.setAttribute('class', 'bara');
 plusButton.appendChild(plusImage);

 // Creazione del div per l'impostazione del valore
 const incrementoContainer = document.createElement('div');
 incrementoContainer.setAttribute('class', 'incremento');
 mainContainer.appendChild(incrementoContainer);

 // Creazione del label per l'input di impostazione del valore
 const incrementoLabel = document.createElement('label');
 incrementoLabel.textContent = 'Imposta valore:';
 incrementoLabel.setAttribute('for', 'incrementoInput');
 incrementoContainer.appendChild(incrementoLabel);

 // Creazione dell'input per l'impostazione del valore
 const incrementoInput = document.createElement('input');
 incrementoInput.type = 'number';
 incrementoInput.id = 'incrementoInput';
 incrementoInput.value = '1';
 incrementoContainer.appendChild(incrementoInput);

 // Creazione del bottone per l'impostazione del valore
 const impostazioneButton = document.createElement('button');
 impostazioneButton.textContent = 'Imposta';
 document.querySelector('button').addEventListener('click', impostaValore);
;
 incrementoContainer.appendChild(impostazioneButton);
 
let contatore = 0;


function impostaValore() {
    const incrementoInput = document.getElementById("incrementoInput");
    valoreImpostato = parseInt(incrementoInput.value);

    if (isNaN(valoreImpostato)) {
        return; // Esci dalla funzione se l'input non è un numero valido
    }
}

function aggiungi() {
    contatore += valoreImpostato;
    document.querySelector('.count').innerHTML = contatore;

    if (contatore >= 0) {
        document.querySelector('.count').style.color = ""; // Reimposta il colore predefinito
    }
}

function diminuisci() {
    contatore -= valoreImpostato;
    document.querySelector('.count').innerHTML = contatore;

    if (contatore < 0) {
        document.querySelector('.count').style.color = "red";
    }
}


function reset() {
    if (contatore !== 0) {
        contatore = 0;
    }

    document.getElementsByClassName("count")[0].innerHTML = contatore;
    document.getElementsByClassName("count")[0].style.color = ""; // Reimposta il colore predefinito
}






  
  
  
  

