let auta = ["BMW", "Audi", "Opel", "Skoda", "Mercedes"];

function pokaz(tekst) 
{
    document.getElementById("wynik").innerHTML = tekst;
}

function pokazTablice() {
    pokaz("Aktualna tablica: " + auta.join(", "));
}

function dodajPush() {
    let noweAuto = prompt("Podaj markę auta:");
    if (noweAuto) {
        auta.push(noweAuto);
        pokazTablice();
    }
}

function usunPop() {
    auta.pop();
    pokazTablice();
}

function dodajUnshift() {
    let noweAuto = prompt("Podaj markę auta na początek:");
    if (noweAuto) {
        auta.unshift(noweAuto);
        pokazTablice();
    }
}

function usunShift() {
    auta.shift();
    pokazTablice();
}

function sprawdz() {
    let komunikat = auta.includes("Skoda") ? "Tak, Skoda jest w tablicy." : "Nie, Skody brak.";
    pokaz(komunikat);
}

function sortuj() {
    auta.sort();
    pokazTablice();
}

function pierwszaPozycja() {
     if (auta.length > 0) {
        pokaz("Pierwsze auto: " + auta[0]);
    } else {
        pokaz("Tablica jest pusta.");
    }
}

function liczbaEl() {
    pokaz("Liczba aut w tablicy: " + auta.length);
}

function pierwszaIdruga() 
{
    if (auta.length >= 2) 
        {
        pokaz("1: " + auta[0] + ", 2: " + auta[1]);
        } 
    else 
        {
        pokaz("Zbyt mało elementów w tablicy.");
        }
}

function linie() {
    pokaz(auta.join("<br>"));
}