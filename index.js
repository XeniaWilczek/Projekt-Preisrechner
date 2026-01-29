// Variable für Zähler mit Initialwert 0
let count = 0;
// Parameter price für aktuell dazugezählten Preis (in HTML eintragen)
function addPrice(name, price) {
  //Nun Gesamtpreis berechnen und anzeigen
  count = count + price;
  console.log(price, count, name);
  console.log("Gesamtpreis: " + count + " €");
  showOrder(name, price);
  displayTotalPrice();
}

function displayTotalPrice() {
  const display = document.getElementById("total-price");
  display.innerHTML = count;
  console.log(count);
}

function showOrder(name, price) {
  const show = document.getElementById("order-list");
  show.innerHTML += `<p> ${name}, ${price} €</p>`;
  console.log(name, price);
}

function reset() {
  //Zurücksetzen-Button ansprechen über id
  const refreshDisplay = document.getElementById("upper-button");
  //Wenn  Gesamtpreis = 0, kommt Hinweis: Produkte auswählen!
  if (count === 0) {
    alert("Bitte zuerst Artikel auswählen!");
    //Wenn Gesamtpreis >0...
  } else {
    //...dann werden Produkte aus Anzeige entfernt.
    const show = document.getElementById("order-list");
    show.innerHTML = " ";
    //...danach Wird Gesamtpreis auf 0 gesetzt...
    count = 0;
    //...danach wird Gesamtpreis = 0€ angezeigt.
    displayTotalPrice();
  }
}

function payOnSite() {
  //Wenn  Gesamtpreis = 0, kommt Hinweis: Zuerst Produkte auswählen!

  if (count === 0) {
    alert("Bitte zuerst Artikel auswählen!");
    //ansonsten: Wenn Produkte ausgewählt wurden...
  } else {
    //Gesamtpreis wird auf 0 gesetzt und Produkte werden aus der Ansicht enfternt, genauso wie bei reset()
    alert("Bestellung abgeschlossen! Gesamtbetrag: " + count + " €");
    reset();
  }
}
function payDelivery() {
  //Wenn  Gesamtpreis = 0, kommt Hinweis: Zuerst Produkte auswählen!
  if (count === 0) {
    alert("Bitte zuerst Artikel auswählen!");
    //ansonsten: Wenn Produkte ausgewählt wurden...
    //..und der Betrag <20€, dann Hinweis auf Mindestbetrag
  } else if (count < 20) {
    displayTotalPrice();
    reset();
    alert("Mindestbetrag für Lieferung: 20€!");
    //Wenn Betrag>=20€, dann 2,50€ hinzuzählen als Liefergebühr
  } else {
    count = count + 2.5;
    displayTotalPrice();
    alert("Gesamtpreis inkl. 2.50€ Liefergebühr: " + count);
    reset();
  }
}
