function Mayor (a,b){
    if(a>b){
        console.log(`El primer valor ${a} es mayor al segundo valor ${b}`);
    }
    else if(a<b){
        console.log(`El primer valor ${a} es menor al segundo valor ${b}`);
    }
    else{
    console.log(`El primer valor ${a} es igual al segundo valor ${b}`);
    }
}
/*

function Mayor (a,b){
    return (a>b) ? a :b; 
}
La sintaxis (condición) ? valorSiVerdadero : valorSiFalso 
es un operador ternario en JavaScript. 
Significa que si la condición es verdadera, 
se devuelve "valorSiVerdadero"; 
de lo contrario, se devuelve "valorSiFalso".

*/