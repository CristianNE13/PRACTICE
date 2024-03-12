function PositiveValues(arr){
    let positivos=0;
    for(numbers of arr){
        positivos = numbers > 0 ? positivos+1 : positivos
    }
    return positivos
}
function NegativeValues(arr){
    let negativos=0;
    for(numbers of arr){
        negativos = numbers < 0 ? negativos+1 : negativos
    }
    return negativos
}