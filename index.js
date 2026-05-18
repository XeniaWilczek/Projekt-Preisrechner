//Funktion für Addition des Preises mit Variable count
let count = 0;
// Parameter price für aktuell dazugezählten Preis, auch Parametername für Produktnamen
function addPrice(name, price) {
  //Nun Gesamtpreis berechnen und anzeigen
  count = count + price;
  showOrder(name, price);
  displayTotalPrice();
}
//Funktion zur Anzeige des Gesamtpreises
function displayTotalPrice() {
  const display = document.getElementById("total-price");
  display.innerHTML = count;
}
//Funktion zur Anzeige der bestellten Produkte (rechts aufgelistet)
function showOrder(name, price) {
  const show = document.getElementById("order-list");
  show.innerHTML += `<p> ${name}, ${price} €</p>`;
}

//Funktion zum Zurücksetzen des Gesamtpreises und der Liste aufgezählter Produkte
function reset() {
  //Zurücksetzen-Button ansprechen über id
  //Wenn  Gesamtpreis = 0, kommt Hinweis: Produkte auswählen!
  if (count === 0) {
    alert("Bitte zuerst Artikel auswählen!");
    //Wenn Gesamtpreis >0...
  } else {
    //...dann werden Produkte aus Anzeige entfernt.
    const show = document.getElementById("order-list");
    show.innerHTML = "";
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
  if (count === 0) {
    alert("Bitte zuerst Artikel auswählen!");
  } else if (count < 20) {
    displayTotalPrice();
    alert("Mindestbetrag für Lieferung: 20€!");
  } else {
    count = count + 2.5;
    displayTotalPrice();

    // abwarten, damit der Gesamtpreis angezeigt wird, bevor das Feld geleert wird (alert stört sonst)
    setTimeout(function () {
      alert("Gesamtpreis inkl. 2.50€ Liefergebühr: " + count + " €");
      reset();
    }, 10);
  }
}
