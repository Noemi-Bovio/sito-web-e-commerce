 // Funzione per aprire il popup
 function apriPopup() {
  document.getElementById("popup").style.display = "block";
}

// Funzione per chiudere il popup
function chiudiPopup() {
  document.getElementById("popup").style.display = "none";
}

// Aggiungi gestori di eventi ai pulsanti
document.getElementById("apriPopup").addEventListener("click", apriPopup);
document.getElementById("chiudiPopup").addEventListener("click", chiudiPopup);
</script>

Ora, quando un utente fa clic sul pulsante "Apri Popup", il popup verrà visualizzato, e quando fa clic sul pulsante di chiusura (l'icona "X"), il popup verrà chiuso.

Questo è un esempio di un popup di base. Puoi personalizzare ulteriormente il contenuto e lo stile del popup secondo le tue esigenze.


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
