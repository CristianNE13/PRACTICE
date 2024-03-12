let ArrayValues=[2,5,7,15,-5,-100,55]

function ObtenerMayorMenor(array){
    menor=array[0]
    mayor=array[0]
    var arreglo=[];
    for(i=0;i<array.length;i++){
        if(menor>array[i]){
            menor=array[i]
            arreglo[0]=menor
        }
        if(mayor<array[i]){
            mayor=array[i]
            arreglo[1]=mayor
        }
    }
    return console.log(arreglo);
}


function getMenorMayor(arr){
    let menor=arr[0];
    let mayor=arr[0];

    for(numero of arr){
        menor = menor < numero ? menor : numero
        mayor = mayor > numero ? mayor : numero
    }
    return [menor, mayor]
}
