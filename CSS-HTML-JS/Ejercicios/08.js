function CrearArreglo(int){
    if(int<=0){
        return [];
    }
    let arreglo=[];
    for(i=0;i<int;i++){
        arreglo[i]= i+1;
    }
    return arreglo;
}