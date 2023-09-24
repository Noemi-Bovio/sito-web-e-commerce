
// Funzione per mostrare il popup di benvenuto
function mostraPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

// Funzione per chiudere il popup
function chiudiPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

// Funzione per impostare un cookie
function impostaCookie(nome, valore, giorni) {
  var scadenza = new Date();
  scadenza.setTime(scadenza.getTime() + (giorni * 24 * 60 * 60 * 1000));
  var scadenzaString = "expires=" + scadenza.toUTCString();
  document.cookie = nome + "=" + valore + ";" + scadenzaString + ";path=/";
}

// Funzione per ottenere il valore di un cookie
function ottieniCookie(nome) {
  var nomeCookie = nome + "=";
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1);
      }
      if (cookie.indexOf(nomeCookie) === 0) {
          return cookie.substring(nomeCookie.length, cookie.length);
      }
  }
  return "";
}

// Mostra il popup solo se il cookie di benvenuto non è stato impostato
window.onload = function () {
  var cookieBenvenuto = ottieniCookie("benvenuto");
  if (cookieBenvenuto === "") {
      mostraPopup();
      impostaCookie("benvenuto", "visualizzato", 30); // Imposta il cookie per 30 giorni
  }
};

// Chiudi il popup quando il pulsante "Chiudi" viene cliccato
document.getElementById("chiudiPopup").addEventListener("click", chiudiPopup);

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


