let contatore = 0;
let valoreImpostato = 1;

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



document.addEventListener("DOMContentLoaded", function() {
    // Il tuo codice qui
  
//Creo l'header contenitore
const header = document.createElement("header");
header.setAttribute('class', 'header');


//creo il figlio h1 di header
const h1 = document.createElement("h1");
h1.textContent = "Counter di Alessandra"
header.append(h1);
document.body.appendChild(header);


//creo il main contenitore
 const main = document.createElement("main")
 main.setAttribute('class', 'contenitore');
 document.body.appendChild(main);

 //creo il div che contiene il Reset
 const resetDiv = document.createElement("div");
 resetDiv.setAttribute('class', 'contenitore-reset');
 main.appendChild(resetDiv);

 //creo il button per il reset
 const resetButton = document.createElement("button");
 resetButton.textContent = "Reset";
 resetButton.setAttribute('class', 'button-reset')
 resetDiv.appendChild(resetButton);
 resetButton.addEventListener('click', reset);

    // creo l'icona di reset usando Font Awesome
    const resetIcon = document.createElement('i');
    resetIcon.classList.add('fas', 'fa-undo');
    resetButton.prepend(resetIcon);

 //creo lo span del contatore 
 const spanCounter =  document.createElement("span");
 spanCounter.textContent = '0';
 spanCounter.setAttribute('class', 'count');
 main.appendChild(spanCounter);

 //creo il contenitore per il pulsante meno
const lessDiv = document.createElement('div');
lessDiv.setAttribute('class', 'contenitore-meno');
main.appendChild(lessDiv);

//creo il button diminuisci
const buttonLess = document.createElement('button');
buttonLess.setAttribute('class', 'button-less');
lessDiv.appendChild(buttonLess);
buttonLess.addEventListener('click', diminuisci);

// creo lo span del segno -
const spanMeno = document.createElement('span');
spanMeno.setAttribute('class', 'sign');
spanMeno.textContent = '-';
buttonLess.appendChild(spanMeno);

//creo l'immagine della bara 
const imgBara = document.createElement('img');
imgBara.setAttribute('class', 'bara');
imgBara.src = 'assets/Icone/coffin.png';
imgBara.alt = 'immagine di una bara';
buttonLess.appendChild(imgBara);


 //creo div contenitore +
 const plusDiv = document.createElement('div');
 plusDiv.setAttribute('class', 'contenitore-più');
 main.appendChild(plusDiv);

 //creo il button del +
const buttonPlus = document.createElement('button');
buttonPlus.setAttribute('class', 'button-plus');
plusDiv.appendChild(buttonPlus);
buttonPlus.addEventListener('click', aggiungi);

// creo lo span del segno -
const span = document.createElement('span');
span.setAttribute('class', 'sign');
span.textContent = '+',
buttonPlus.appendChild(span);

 //creo l'immagine della bara 
 const img = document.createElement('img');
 img.setAttribute('class', 'bara');
 img.src = 'assets/Icone/coffin.png';
 img.alt = 'immagine di una bara';
 buttonPlus.appendChild(img);

//creo il div del contenitore incremento
const divIncremento = document.createElement('div');
divIncremento.setAttribute('class', 'incremento');
main.appendChild(divIncremento);

//creo l'input per inserire il valore
const input = document.createElement('input');
input.setAttribute('id', 'incrementoInput');
input.setAttribute('type', 'number');
input.value = '1';
divIncremento.appendChild(input);

//creo il label dell'input
const label = document.createElement('label');
label.setAttribute('for', 'incrementoInput');
label.textContent = 'Imposta valore:'
divIncremento.appendChild(label);

const buttonImposta = document.createElement('button');
buttonImposta.setAttribute('class', 'impostaValoreIncremento');
buttonImposta.textContent = 'Imposta';
buttonImposta.addEventListener('click', impostaValore);
// Aggiungi il pulsante "Imposta" al contenitore "divIncremento"
divIncremento.appendChild(buttonImposta);
});






  
  
  
  

