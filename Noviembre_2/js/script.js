console.log("Soy un mensaje de consola del archivo script.js");

var x = 5; //X es un valor númerico entero

console.log("El valor de la variable X es:", x);

let y = 2;

let c;

console.log(c);

c = x + y;

console.log(c);

let hello = "Hola soy una variable"; //Variable de tipo String

console.log("La variable hello tiene un total de caracteres", hello.length);

const name = "Nataly Martínez";

// name= "GOIT";
console.log(hello);

hello = "Hola cambie de valor";

console.log(hello);


let userName = "Nataly Martínez";

const yesarOfBirth = 1997;
console.log(yesarOfBirth);

// Tipos Primitivos

const color = 5; //Enteros
const points = 15.8; //Coma Flotante
//String - Es una secuencia de ceros o más caracteres. La cadena comienza y termina con una sola ', o con comillas ".

let description = 'JavaScript para principiantes';
let otherDescription = "JavaScript para principiantes";

/*
Boolean - Es un tipo de datos lógicos, banderas de estado. Sólo hay dos valores: true y false. Por ejemplo, a la pregunta de si la luz de una habitación está encendida o apagada se puede responder con un sí (true) o con un no (false).

true — sí, es cierto, verdadero, 1
false — no, no es cierto, falso, 0

Observe los nombres de las variables que contienen el booleano. Hacen una pregunta y la respuesta es sí o no.
*/

const isLoggedIn = true; // El usuario esta logueado
const canMerge = false; // No puede fucionarser
const hadChildren = true; // Si tiene un hijo

const zero = 0;
const zeroVoid = null; // Diferente de cero, indica que no es nada 
let zeroUndefined;
let Prueba = "Prueba";

/*
null - Es un valor especial, que esencialmente significa nada. Se utiliza en situaciones en las que es necesario especificar explícitamente 
un vacío. Por ejemplo, si el usuario aún no ha seleccionado nada, entonces podemos decir que el valor null.
*/
/*
undefined - Es otro valor especial. Por defecto, cuando se declara una variable pero no se inicializa, su valor es indefinido, 
se le asigna undefined
*/
console.log(typeof zero);
console.log(typeof zeroVoid);
console.log(typeof zeroUndefined);
console.log(typeof Prueba);


/*
Operador typeof
Se usa para obtener el tipo de un valor variable. Devuelve en el lugar de su llamada el tipo del valor de la variable especificada tras ella, 
es una cadena en la que se especifica el tipo
*/

console.log("El tipo de dato de userName es:",typeof userName);
console.log("El tipo de dato de points es:",typeof points);

/*
Hay dos métodos para dar salida a los datos: console.log() y alert(). Entre los paréntesis, especifique el nombre de la variable en donde 
valor debe imprimirse.
*/

alert("El valor de userName es: " + userName);

alert("La suma de X + Y es igual a: " + c);


/*
Hay prompt() y confirm() para obtener datos del usuario. También son métodos de la interfaz window. Devuelven la entrada del usuario como 
resultado de su ejecución, por lo que podemos escribir el resultado de su trabajo en una variable para su posterior uso.
confirm() - Muestra una ventana modal con un mensaje y dos botones, Ok y Cancel. Si hace clic en Ok, el resultado será true, 
si hace clic en Cancel - Regresará false.
*/

const isAdult = confirm("Tienes más de 18 años");
console.log(isAdult);
alert(isAdult);


const guesName = prompt("Escriba el nombre del huesped");
console.log(guesName);
alert(guesName);


//Operadores matemáticos
const a = 10;
const b = 5;

// Suma
console.log(a + b); // 15

// Resta
console.log(a - b); // 5

// Multiplicación
console.log(a * b); // 50

// División
console.log(a / b); // 2

// Residuo de la división
console.log(a % b); // 0


let value = 5;
// Suma de sustituciones (también disponible para todos los demás operadores)
//value = value + 10;
value += 10;
console.log(value);



//Calcular el area de un cuadrado 

let lengthSquare = prompt("Cúal es la altura del cuadrado");


//Number.parseInt()
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt

let areaSquare = Number.parseInt(lengthSquare) * Number.parseInt(lengthSquare);

alert("El área del cuadrado es: " + areaSquare);


// Tarea

//Calcular el área de un triangulo 
//Calcular el área de un Circulo
//Calcular el área de un Hexagono

