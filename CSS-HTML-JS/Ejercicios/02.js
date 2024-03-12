    /**
     * Nombre: ancho x alto
     * 4K 3840 x 2160
     * WQHD 2560 x 1440 
     * FHD 1920 x 1080
     * HD 1280 x 720
     */
 var resoluciones={
    "3840x2160": "4K",
    "2560x1440": "WQHD",
    "1920x1080":"FHD",
    "1280x720":"HD"
}
function Resolucion(ancho, alto){
    var Res=parseInt((ancho*alto)/(10**5));
    switch(Res){
        case 82:
            console.log(`Tu Pantalla tiene resolucion de ${resoluciones["3840x2160"]}`)
            break;
        case 36:
            console.log(`Tu Pantalla tiene resolucion de ${resoluciones["2560x1440"]}`)
            break;
        case 20:
            console.log(`Tu Pantalla tiene resolucion de ${resoluciones["1920x1080"]}`)
            break;
        case 9:
            console.log(`Tu Pantalla tiene resolucion de ${resoluciones["1280x720"]}`)
            break;
        default:
            console.log("No reconosco tu resolucion.")
            break;
    } 
}