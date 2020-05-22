//Elementi Form
var buttonGenera = document.getElementById('form-genera');
var buttonAnnulla = document.getElementById('form-annulla');
var formNome = document.getElementById('form-nome');
var formKm = document.getElementById('form-km');
var formEta = document.getElementById('form-eta');
var formErrore = document.getElementById('errore');

//Elementi ticket
var ticketNome = document.getElementById('ticket-nome');
var ticketOfferta = document.getElementById('ticket-offerta');
var ticketCosto = document.getElementById('ticket-costo');
var ticketCarrozza = document.getElementById('ticket-carrozza');
var ticketCp = document.getElementById('ticket-cp');
var ticketMostra = document.getElementById('ticket');

//Altre variabili
var formKmValue;
var formEtaValue;
var formNomeValue;


//Evento quando si clicca su 'Genera'
buttonGenera.addEventListener('click',
  function() {

      formKmValue = parseInt(formKm.value);
      formEtaValue = formEta.value;
      formNomeValue = formNome.value;

      //Gestione Errore dati
      if ( isNaN(formKmValue) || formNomeValue.length == 0 ) {
        formErrore.className = 'visible';

      }else {
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


      ticketNome.innerHTML = formNome.value;
      ticketCosto.innerHTML = prezzo.toFixed(2) + ' Euro';
      ticketOfferta.innerHTML = sconto;
      ticketCarrozza.innerHTML = Math.floor((Math.random() * 10) + 1);
      ticketCp.innerHTML = Math.floor((Math.random() * 10000) + 1);


      //Mostra Ticket
      ticketMostra.className = 'visible';

    }
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

    //Gestione annullamento offerta
    ticketOfferta.innerHTML = '';

    //Gestione annullamento Costo
    ticketCosto.innerHTML = '';

    //Gestione annullamento Codice Cp
    ticketCp.innerHTML = '';

    //Gestione annullamento Carrozza
    ticketCarrozza.innerHTML = '';

    //Gestione annullamento ticket
    ticketMostra.className = 'hidden';

    //Gestione annullamento msf di errore
    formErrore.className = 'hidden';






  }
);
