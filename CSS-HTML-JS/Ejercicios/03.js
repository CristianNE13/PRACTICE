/**\
 * Indice validar que no sea menor a cero 
 * y que el elemento exista en el array
 */
ejercicio=[
    "Cristian",
    "Navarrro",
    "Escalante",
    "Angel",
    "Alexis"
]

function getValueArreglo(array,indice){
    if(indice>=array.length)
    return `El arreglo no tienen ningun valor en el indice mencionado, el maximo es ${array.length-1}`;
    else if(indice<0)
        return `No hay valores tan pequeños el minimo es: 0`;
    else
        return `El valor en el indice ${indice} es: ${array[indice]}`;
}

/*
 function getValueArreglo(array,indice){
    if(indice>array.length || indice<0)
        return `No hay existen valores de tu indice, maximo:${array.length}, minimo: 0`;
    else
        return `El valor en el indice ${indice} es: ${array[indice]}`;
}*/

