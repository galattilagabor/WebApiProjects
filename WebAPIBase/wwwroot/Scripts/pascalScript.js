//window.onload = function () {
//    //mi történik ha betöltődött az oldal
//    drawPascal(10);
    
//}

//var drawPascal = function (sorSzam) {
//    //itt történik a pascal háromszög DOM elemeinek létrehozása és elhelyezése
    
//}

////új DOM elem
//var newElement = document.createElement('div');
//newElement.classList.add('newClass');
//newElement.id = 'newID';
//newElement.innerText = '0';
//newElement.innerHTML = '<div>Hello!<div>';

//var parentElement = document.getElementById('parent'); //szülő elem meghatűrozása
//parentElement.appendChild(mewElement);

window.onload = function () {
    console.log("Oldal betöltve...");
    generatePascalTriangle();
};

function faktorialis(n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}

function generatePascalTriangle() {
    const pascalDiv = document.getElementById("pascal");
    const triangleSize = document.getElementById("triangleSize").value;

    pascalDiv.innerHTML = '';

    for (let sor = 0; sor < triangleSize; sor++) {
        const sorDiv = document.createElement("div");
        sorDiv.className = "sor";

        for (let oszlop = 0; oszlop <= sor; oszlop++) {
            const elemDiv = document.createElement("div");
            elemDiv.className = "elem";

            const egyutthatok = faktorialis(sor) / (faktorialis(oszlop) * faktorialis(sor - oszlop));

            elemDiv.innerHTML = egyutthatok;

            sorDiv.appendChild(elemDiv);
        }

        pascalDiv.appendChild(sorDiv);
    }
}