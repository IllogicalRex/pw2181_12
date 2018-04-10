javascript

var a,b = 6;
undefined
b
6
a
undefined
a=5
5
a
5
b
6
var c = a + b;
undefined
c
11
alert('JavaScript es bueno');
undefined
var respuesta = prompt("Dame un numero",0);
undefined
respuesta
"565464654686354665454345"
function suma(a,b){return a + b}
undefined
suma
ƒ suma(a,b){return a + b}
suma(5,6);
11
suma(5,1000);
1005
var sumaNumeros=function(a,b){return a + b}
undefined
suman
VM2285:1 Uncaught ReferenceError: suman is not defined
    at <anonymous>:1:1
(anonymous) @ VM2285:1
sumaNumeros
ƒ (a,b){return a + b}
suma(10,15);
25
sumaNumeros(10,15)
25
document.write("Hola");
undefined
document.write("<article id='demo'></article>");
undefined
document.get
undefined
document.getElementById('demo').innerHTML="Mi article"
"Mi article"
document.write("<input type='text' id='txt'>")
undefined
document.getElementById('txt').value=81;
81
console.log("escribimos en la consola del navegador");
VM2348:1 escribimos en la consola del navegador
undefined
document.write("<button>Da clic</button>");
undefined
document.write("<button onclick=alerta('clic')>Da clic</button>");
undefined
(index):1 Uncaught ReferenceError: alerta is not defined
    at HTMLButtonElement.onclick ((index):1)
onclick @ (index):1
document.write("<button onclick=alert('clic')>Da clic</button>");
undefined