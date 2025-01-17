$(document).ready(function () {
    // Nascondi il menu al caricamento della pagina
    $('.toast-menu').removeClass('active');

    // Mostra il menu quando si clicca sul pulsante
    $('.toast-menu-button').on('click', function () {
        $('.toast-menu').addClass('active');
    });

    // Chiudi il menu quando si clicca sul pulsante di chiusura
    $('.toast-menu-close').on('click', function () {
        $('.toast-menu').removeClass('active');
    });

    // Chiudi il menu cliccando su un link
    $('.toast-menu a').on('click', function () {
        $('.toast-menu').removeClass('active');
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
        navigation: {
            nextEl: null,
            prevEl: null,
        },
    });

    // Inizializzazione del calendario FullCalendar
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        editable: true,
        selectable: true,
        events: generateRandomEvents(),
        locale: 'it',
        headerToolbar: {
            left: '',
            center: 'title',
            right: ''
        },
        dragScroll: true,
        eventColor: '#dda0dd',
    });
    calendar.render();

    // Listener per il selettore di date
    $('#date-selector').on('change', function () {
        var selectedDate = $(this).val();
        if (selectedDate) {
            calendar.gotoDate(selectedDate);
        }
    });

    // Funzione per generare eventi randomici
    function generateRandomEvents() {
        const events = [];
        const startDate = new Date();
        startDate.setDate(1);
        const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);

        for (let i = 0; i < 5; i++) {
            let randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
            events.push({
                title: 'occupata',
                start: randomDate.toISOString().split('T')[0],
                backgroundColor: '#dda0dd',
                borderColor: 'white',
            });
        }

        return events;
    }
});




  // Optional: Add any custom JavaScript for further interaction or functionality here.
console.log("Social media links ready!");

