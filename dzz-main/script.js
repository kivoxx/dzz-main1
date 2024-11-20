
function zadanie1(){

    document.getElementById("xd2").innerHTML = '';

    var iloscLiczb = Number(prompt("Подай текст"));

    document.getElementById("obraz").style.opacity = 1;
    var text = "" + iloscLiczb + ":<br>";

    for (var i = 1; i <= iloscLiczb; i++) {
        text += i + " ";
    }

    document.getElementById("xd").innerHTML = text;
}

function zadanie2(){

    document.getElementById("xd").innerHTML = '';

    var iloscLiczb = Number(prompt("Подай текст"));

    document.getElementById("obraz").style.opacity = 1;
    var text = "" + iloscLiczb;

    document.getElementById("xd").innerHTML = text;

    const xdElement = document.getElementById('xd2');
    let result = '';

    for (let i = iloscLiczb; i >= 1; i--) {
        result += i + ' ';
    }

    xdElement.textContent = result.trim();
}

function zadanie3(){

    document.getElementById("xd").innerHTML = '';

        let suma = 0;
    
        for (let i = 1; i <= 10; i++) {
            suma += i;
        }

        document.getElementById("xd").innerHTML = "Suma kolejnych 10 liczb całkowitych począwszy od 1 to: ";
        const xdElement = document.getElementById('xd2').innerHTML = + suma;
    }
    


function zadanie4(){
    document.getElementById('xd').innerHTML = ''
        document.getElementById('xd2').innerHTML = ''

    var liczbePar = Number(prompt("Podaj liczbe 2,4,6,8"));
    document.getElementById("obraz").style.opacity = 1;
    var text = "" + liczbePar
    document.getElementById("xd").innerHTML = text;

    let tekst = "";

    for (let i = 2; i <= liczbePar * 2; i += 2)  {
        tekst += i + " ";
    }

    document.getElementById("xd").innerHTML = "liczb całkowitych: " + tekst;
}


function zadanie5() {

    document.getElementById("xd").innerHTML = '';
    document.getElementById("xd2").innerHTML = '';
    document.getElementById("obraz").style.opacity = 1;

    const months = parseInt(prompt("Podaj liczbę miesięcy (X):"));
    if (isNaN(months) || months <= 0) {
        document.getElementById("xd").innerHTML = "Nieprawidłowa wartość liczby miesięcy!";
        return;
    }

    const monthlyAmount = parseFloat(prompt("Podaj kwotę miesięcznego wkładu (Y):"));
    if (isNaN(monthlyAmount) || monthlyAmount <= 0) {
        document.getElementById("xd").innerHTML = "Nieprawidłowa wartość kwoty wkładu!";
        return;
    }

    const interestRate = 0.08;


    let total = 0;
    let text = `Miesiące (${months}), miesięczny wkład (${monthlyAmount}):<br>`;
    for (let i = 1; i <= months; i++) {
        total += monthlyAmount; 
        total += total * (interestRate / 12);
        text += `Miesiąc ${i}: ${total.toFixed(2)} zł<br>`; 
    }

    document.getElementById("xd").innerHTML = "Wynik obliczeń:";
    document.getElementById("xd2").innerHTML = `Całkowita kwota oszczędności: ${total.toFixed(2)} zł<br>` + text;
}

function zadanie6() {
    document.getElementById("xd").innerHTML = '';
    document.getElementById("xd2").innerHTML = '';
    document.getElementById("obraz").style.opacity = 1;

    const pierwszyElement = parseFloat(prompt("Podaj pierwszy element ciągu (a):"));
    if (isNaN(pierwszyElement)) {
        document.getElementById("xd").innerHTML = "Nieprawidłowa wartość dla pierwszego elementu!";
        return;
    }

    const roznica = parseFloat(prompt("Podaj różnicę między elementami ciągu (d):"));
    if (isNaN(roznica)) {
        document.getElementById("xd").innerHTML = "Nieprawidłowa wartość dla różnicy!";
        return;
    }

    const liczbaElementow = parseInt(prompt("Podaj liczbę elementów ciągu (n):"));
    if (isNaN(liczbaElementow) || liczbaElementow <= 0) {
        document.getElementById("xd").innerHTML = "Nieprawidłowa liczba elementów!";
        return;
    }

    const suma = (liczbaElementow / 2) * (2 * pierwszyElement + (liczbaElementow - 1) * roznica);

    let tekstCiagu = "Elementy ciągu arytmetycznego:<br>";
    for (let i = 0; i < liczbaElementow; i++) {
        tekstCiagu += (pierwszyElement + i * roznica) + " ";
        if ((i + 1) % 10 === 0) tekstCiagu += "<br>";
    }

    document.getElementById("xd").innerHTML = "Wynik obliczeń:";
    document.getElementById("xd2").innerHTML = `Suma elementów ciągu: ${suma.toFixed(2)}<br>` + tekstCiagu;
}

function zadanie7() {
    document.getElementById("xd").innerHTML = '';
    document.getElementById("xd2").innerHTML = '';
    document.getElementById("obraz").style.opacity = 1;

    const podstawa = parseInt(prompt("Podaj długość podstawy piramidy (np. 10):"));
    if (isNaN(podstawa) || podstawa <= 0) {
        document.getElementById("xd").innerHTML = "Nieprawidłowa wartość dla podstawy!";
        return;
    }

    let sumaCegiel = 0;
    for (let i = podstawa; i > 0; i--) {
        sumaCegiel += i * i;
    }

    document.getElementById("xd").innerHTML = "Wynik obliczeń:";
    document.getElementById("xd2").innerHTML = `Całkowita liczba cegieł w piramidzie o podstawie ${podstawa} x ${podstawa}: ${sumaCegiel}`;
}


function zadanie8() {
    document.getElementById("xd").innerHTML = '';
    document.getElementById("xd2").innerHTML = '';
    document.getElementById("obraz").style.opacity = 1;

    const podstawa = parseInt(prompt("Podaj długość podstawy (X):"));
    const wysokosc = parseInt(prompt("Podaj wysokość ściany (Y):"));
    if (isNaN(podstawa) || isNaN(wysokosc) || podstawa <= 0 || wysokosc <= 0) {
        document.getElementById("xd").innerHTML = "Nieprawidłowe dane wejściowe!";
        return;
    }

    let liczbaCegiel = 0;
    for (let i = 0; i < wysokosc; i++) {
        liczbaCegiel += podstawa - i;
    }

    document.getElementById("xd").innerHTML = "Wynik obliczeń:";
    document.getElementById("xd2").innerHTML = `Całkowita liczba cegieł w ścianie: ${liczbaCegiel}`;
}


function zadanie9() {
    document.getElementById("xd").innerHTML = '';
    document.getElementById("xd2").innerHTML = '';
    document.getElementById("obraz").style.opacity = 1;

    const liczbaCegiel = parseInt(prompt("Podaj liczbę cegieł (Z):"));
    const wagaCegly = parseFloat(prompt("Podaj wagę jednej cegły (kg):"));
    if (isNaN(liczbaCegiel) || isNaN(wagaCegly) || liczbaCegiel <= 0 || wagaCegly <= 0) {
        document.getElementById("xd").innerHTML = "Nieprawidłowe dane wejściowe!";
        return;
    }

    const calkowitaWaga = liczbaCegiel * wagaCegly;

    document.getElementById("xd").innerHTML = "Wynik obliczeń:";
    document.getElementById("xd2").innerHTML = `Całkowita waga cegieł: ${calkowitaWaga.toFixed(2)} kg`;
}


function zadanie10() {
    document.getElementById("xd").innerHTML = '';
    document.getElementById("xd2").innerHTML = '';
    document.getElementById("obraz").style.opacity = 1;

    const pierwszyElement = parseFloat(prompt("Podaj pierwszy element ciągu (a):"));
    const roznica = parseFloat(prompt("Podaj różnicę między elementami ciągu (d):"));
    const liczbaElementow = parseInt(prompt("Podaj liczbę elementów ciągu (n):"));
    if (isNaN(pierwszyElement) || isNaN(roznica) || isNaN(liczbaElementow) || liczbaElementow <= 0) {
        document.getElementById("xd").innerHTML = "Nieprawidłowe dane wejściowe!";
        return;
    }

    const suma = (liczbaElementow / 2) * (2 * pierwszyElement + (liczbaElementow - 1) * roznica);

    document.getElementById("xd").innerHTML = "Wynik obliczeń:";
    document.getElementById("xd2").innerHTML = `Suma elementów ciągu: ${suma.toFixed(2)}`;
}


function zadanie11() {
    document.getElementById("xd").innerHTML = '';
    document.getElementById("xd2").innerHTML = '';
    document.getElementById("obraz").style.opacity = 1;

    const liczba = parseInt(prompt("Podaj liczbę do obliczenia silni:"));
    if (isNaN(liczba) || liczba < 0) {
        document.getElementById("xd").innerHTML = "Nieprawidłowa wartość!";
        return;
    }

    let silnia = 1;
    for (let i = 1; i <= liczba; i++) {
        silnia *= i;
    }

    document.getElementById("xd").innerHTML = "Wynik obliczeń:";
    document.getElementById("xd2").innerHTML = `Silnia liczby ${liczba}: ${silnia}`;
}


function zadanie12() {
    document.getElementById("xd").innerHTML = '';
    document.getElementById("xd2").innerHTML = '';
    document.getElementById("obraz").style.opacity = 1;

    const liczba = parseInt(prompt("Podaj liczbę elementów ciągu:"));
    if (isNaN(liczba) || liczba <= 0) {
        document.getElementById("xd").innerHTML = "Nieprawidłowa wartość!";
        return;
    }

    let tekst = "Ciąg kwadratów:<br>";
    for (let i = 1; i <= liczba; i++) {
        tekst += `${i * i} `;
    }

    document.getElementById("xd").innerHTML = "Wynik obliczeń:";
    document.getElementById("xd2").innerHTML = tekst;
}
