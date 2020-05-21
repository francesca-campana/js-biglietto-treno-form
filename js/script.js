//Elementi Form
var buttonGenera = document.getElementById('form-genera');
var buttonAnnulla = document.getElementById('form-annulla');
var formNome = document.getElementById('form-nome');
var formKm = document.getElementById('form-km');
var formEta = document.getElementById('form-eta');

//Elementi ticket
var ticketNome = document.getElementById('ticket-nome');
var ticketOfferta = document.getElementById('ticket-offerta');
var ticketCosto = document.getElementById('ticket-costo');

//Altre variabili
var formKmValue;
var formEtaValue;



//Evento quando si clicca su 'Genera'
buttonGenera.addEventListener('click',
  function() {
    formKmValue = formKm.value;
    formEtaValue = formEta.value;

    // Calcolo Prezzo
    var prezzo = formKmValue * 0.21;
    var sconto = 'Nessuno sconto';

    if (formEtaValue == 'minorenne') {
      prezzo = prezzo - (prezzo * 20 / 100);
      sconto = 'Sconto Young';

    } else if (formEtaValue == 'over') {
      prezzo = prezzo - (prezzo * 40 / 100);
      sconto = 'Sconto Senior';
    }
    //Compilazione Ticket
    var formNomeValue = formNome.value;
    ticketNome.innerHTML = formNome.value;
    ticketCosto.innerHTML = prezzo + ' Euro';
    ticketOfferta.innerHTML = sconto;

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
