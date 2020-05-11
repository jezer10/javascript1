var x1 = prompt("N1: ");
var x2 = prompt("N2: ");
var o = prompt("Opcion: ");
var a;
var b;

/*
operacion:
1. Suma
2. Resta
3. Multiplicacion
4. Division
5. Raiz cubica
6. Factorial
7. Potencia
*/
if(x1>x2){
    console.log("Mayor es :",x1);
    a=x1;
    b=x2;
} else{
    console.log("Mayor es: ",x2);
    a=x2;
    b=x1;
}

function suma(){
    return a+b;
}
function resta(){
    return a-b;
}
function multiplicacion(){
    return a*b;
}
function division() {
    return a/b;
}
function raiz(){
    return Math.pow(a,1/3);
}
function factorial() {
    var total =1;
    for (i=1; i<=a; i++) {
        total = total*i;
    }
    a = total;
    return a;

}
function potencia(){
    return Math.pow(a,2);
}
function error(){
    document.write("La Opcion no es valida");
}
switch (parseInt(o)) {
case 1:document.write("La Suma es: ",suma());
break;
case 2:document.write("La resta es: ",resta());
break;
case 3:document.write("La multiplcacion es: ",multiplicacion());
break;on();
case 4:document.write("la division es: ",division());
break;
case 5:document.write("la raiz es: ",raiz());
break;
case 6: document.write("el factorial es: ",factorial());
break;
case 7: document.write("La potencia es: ",potencia());
break; 
default: error();
break;
}