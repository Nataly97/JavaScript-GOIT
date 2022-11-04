//Calcular el área de un triangulo 
//área = base * altura /2
let baseTriangulo = prompt("Ingrese la Base del Triángulo");
let alturaTriangulo = prompt("Ingrese la Altura del Triangulo");

let areaTriangulo = (Number.parseFloat(baseTriangulo) * Number.parseFloat(alturaTriangulo))/2;

alert("El área del Triangulo es: "+ areaTriangulo);



//Calcular el área de un Circulo
//área = Pi * radio^2

let radioCirculo = prompt("Ingrese el radio del círculo");

const p = 3.14;

let areaCirculo = p * (Number.parseFloat(radioCirculo) * Number.parseFloat(radioCirculo));

alert("El área del Círculo es: "+ areaCirculo);



//Calcular el área de un Hexagono
//Apotema --> Va desde el centro hasta la parte media de uno de los lados
//Perimetro -- > Lado * 6 
//área = Perimetro * apotema /2

let ladoHexagono = prompt("Ingrese la medida de uno de los Lados del Hexágono");
let apotemaHexagono = prompt("Ingrese la medida de Apotema del Hexágono");

let perimetroHexagono = Number.parseFloat(ladoHexagono) * 6;

let areaHexagono = (perimetroHexagono * Number.parseFloat(apotemaHexagono))/2;

alert("El área del Hexágono es: "+ areaHexagono);
