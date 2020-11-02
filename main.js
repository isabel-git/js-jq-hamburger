// mostrare / nascondere il menu principale

var aperto = false;

$('.header-right > a').click(function() {
  if(aperto === false){
    // $('.hamburger-menu').show(); // mostra il menu hamburger al click del ham
    $('.hamburger-menu').addClass( "active" ); // aggiunge la classe active al menu ham
    aperto = true;
    console.log(aperto);
  }
});


$('.close').click(function() {
  if(aperto === true){
    // $('.hamburger-menu').hide(); // nasconde il menu hamburger al click di .close
    $('.hamburger-menu').removeClass( "active" ); // toglie la classe active
    aperto = false;
    console.log(aperto);
  }
});
