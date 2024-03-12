let arreglo=[{
    id:1,
    name: `Nicolas`,
},{
    id:2,
    name:`Felipe`,
},{
    id:3,
    name:`Santiago`,
}];

let pairs=[
    [1,{name:"Nicolas"}],
    [2,{name:"Felipe"}],
    [3,{name:"Santiago"}],
];

function Pares(arreglo){
    ParesArray=[];
    for(idx in arreglo){
        let elemento = arreglo[idx]
        ParesArray[idx] = [elemento.id, elemento]
    }
    return ParesArray
}

function ToColecction(pares){
    let collections = [];
    for(idx in pares){
        let elemento = pares[idx];
        collections[idx] = elemento[1];
        collections[idx].id = elemento[0];
    }
    return collections;
}