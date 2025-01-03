$(document).ready(function() {
    // Inizializzazione del menu mobile
    $('.toast-menu-button').on('click', function() {
        $('.toast-menu').toggleClass('active'); // Alterna l'attivazione del menu
    });

    // Funzione per chiudere il menu cliccando sul pulsante di chiusura
    $('.toast-menu-close').on('click', function() {
        $('.toast-menu').removeClass('active'); // Rimuove la classe 'active' per chiudere il menu
    });


 // Inizializzazione di Swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 2000, // Cambia slide ogni 2 secondi
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        // Disabilita i controlli di navigazione
        navigation: {
            nextEl: null,
            prevEl: null,
        },
    });
	
	

     var calendarEl = document.getElementById('calendar');
     var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth', // Visualizzazione del mese
    editable: true, // Permette la modifica degli eventi
    selectable: true, // Permette la selezione delle date
    events: generateRandomEvents(), // Genera eventi randomici
    locale: 'it',
    headerToolbar: {
        left: '', // Rimuove il pulsante "today"
        center: 'title',
        right: '' // Mantiene il titolo al centro e nessun altro pulsante
    },
    dragScroll: true, // Abilita lo scrolling tramite trascinamento
    eventColor: '#dda0dd' // Colore predefinito per eventi
});
calendar.render();

// Aggiunge un listener per il selettore di date
$('#date-selector').on('change', function() {
    var selectedDate = $(this).val();
    if (selectedDate) {
        calendar.gotoDate(selectedDate); // Porta il calendario alla data selezionata
    }
});

// Funzione per generare eventi randomici
function generateRandomEvents() {
    const events = [];
    const startDate = new Date();
    startDate.setDate(1); // Inizia dal primo giorno del mese
    const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0); // Ultimo giorno del mese

    // Aggiungi eventi occupati a date randomiche
    for (let i = 0; i < 5; i++) {
        let randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
        events.push({
            title: 'occupata',
            start: randomDate.toISOString().split('T')[0], // Formato YYYY-MM-DD
            backgroundColor: '#dda0dd', // Colore per le date occupate
            borderColor: 'white'
        });
    }

    return events;
}


	
	
});



  // Optional: Add any custom JavaScript for further interaction or functionality here.
console.log("Social media links ready!");



  // Optional: Add any custom JavaScript for further interaction or functionality here.
console.log("Social media links ready!");
