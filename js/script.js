$('.page-scroll').on('click', function(poor) {

    // Ambil isi href
    var youtube = $(this).attr('href');
    // tangkap element ybs
    var elemenYoutube = $(youtube).offset().top;

    // PINDAHKAN SCROLL
    $('body, html').animate({
        scrollTop: elemenYoutube
    }, 1250, 'swing');

    poor.preventDefault();

});