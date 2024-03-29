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


//freccina top
function scrollToTop() {
  window.scrollTo(0, 0);
}

//cookie
function showCookie() {
let cookie = document.querySelector('#cookie');
cookie.style = "display:block;";
}
function hideCookie() {
let cookie = document.querySelector('#cookie');
cookie.style = "display:none;";
}


/*jQuery ready compatto*/
$(function
  ()
  {
  $("h1").click(function
  ()
  {
  $("#prodotto1").slideDown();
  $("#prodotto2").slideDown("slow");
  $("#prodotto3").slideDown(3000);
  });
  });


// prodotti
var quantity1Input = document.getElementById("quantity1");
var quantity2Input = document.getElementById("quantity2");
var quantity3Input = document.getElementById("quantity3");
var totalCost1Output = document.getElementById("totalCost1");
var totalCost2Output = document.getElementById("totalCost2");
var totalCost3Output = document.getElementById("totalCost3");
var subTotalOutput = document.getElementById("subTotal");
var shippingCostOutput = document.getElementById("shippingCost");
var grandTotalOutput = document.getElementById("grandTotal");

quantity1Input.addEventListener("input", updateCosts);
quantity2Input.addEventListener("input", updateCosts);
quantity3Input.addEventListener("input", updateCosts);

function updateCosts() {
var quantity1 = parseInt(quantity1Input.value);
var quantity2 = parseInt(quantity2Input.value);
var quantity3 = parseInt(quantity3Input.value);

var cost1 = 500;
var cost2 = 1.200;
var cost3 = 800;

var totalCost1 = quantity1 * cost1;
var totalCost2 = quantity2 * cost2;
var totalCost3 = quantity3 * cost3;

totalCost1Output.textContent = "€" + totalCost1;
totalCost2Output.textContent = "€" + totalCost2;
totalCost3Output.textContent = "€" + totalCost3;

var subTotal = totalCost1 + totalCost2 + totalCost3;
var shippingCost = 8;
var grandTotal = subTotal + shippingCost;

subTotalOutput.textContent = "€" + subTotal;
shippingCostOutput.textContent = "€" + shippingCost;
grandTotalOutput.textContent = "€" + grandTotal;
}