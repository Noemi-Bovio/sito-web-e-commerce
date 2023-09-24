// Funzione per mostrare il pop-up
function showPopup() {
  document.getElementById("popup").style.display = "block";
}

// Funzione per chiudere il pop-up
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Mostra il pop-up quando il documento è pronto
document.addEventListener("DOMContentLoaded", function() {
  showPopup();
});

// Chiudi il pop-up quando l'utente clicca sul pulsante di chiusura
document.getElementById("close-popup").addEventListener("click", function() {
  closePopup();
})

var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    })
 function aggiungiAlCarrello() {
  var carrello = document.getElementById("carrello");
  var numero = parseInt(carrello.innerHTML);
  numero++;
  carrello.innerHTML = numero;
}
function rimuoviDalCarrello() {
  var carrello = document.getElementById("carrello");
  var numero = parseInt(carrello.innerHTML);
  numero--;
  carrello.innerHTML = numero;
}
function svuotaCarrello() {
  var carrello = document.getElementById("carrello");
  carrello.innerHTML = 0;
}
