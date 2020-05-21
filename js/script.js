//Elementi Form
var buttonGenera = document.getElementById('form-genera');
var buttonAnnulla = document.getElementById('form-annulla');
var formNome = document.getElementById('form-nome');
var formKm = document.getElementById('form-km');
var formEta = document.getElementById('form-eta');

//Elementi ticket
var ticketNome = document.getElementById('ticket-nome');

//Altre variabili
var formKmValue;
var formEtaValue;


//Evento quando si clicca su 'Genera'
buttonGenera.addEventListener('click',
  function() {
    formKmValue = formKm.value;
    formEtaValue = formEta.value;
    //Calcolo Prezzo
    var prezzo = 



    var formNomeValue = formNome.value;
    ticketNome.innerHTML = formNome.value;

  }
);


//Evento quando si clicca su 'Annulla'
buttonAnnulla.addEventListener('click',
  function() {
    //Gestione annulamento nome
    formNome.value = '';
    ticketNome.innerHTML = '';

    //Gestione annulamento km
    formKm.value = '';

    //Gestione annulamento eta
    formEta.value = 'minorenne';




  }
);
