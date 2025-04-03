/**
 * @function promesa_tipo_declaracion
 * @returns se 'dato' é maior que 20 'resolve' se non 'reject'
 */
function promesa_tipo_declaracion():Promise<Object>{
    return new Promise((resolve,reject)=>{
        let dato = 10;
        (dato > 20) ? resolve({ dato:"isto é un texto" }) : reject({dato: "non recibido"})
    })
}

async function promesa_Async_Await():Promise<Object>{

    return await {dato: "dende unha funcion Async"}
}

let datos = promesa_tipo_declaracion();
let datosDos = promesa_Async_Await();
datos.then((dato) => {console.log("datos ? ",dato)}).catch(mensaxe => console.log(mensaxe));
datosDos.then(dato => console.log("dende funcion Async/Await ", dato)).catch(error => console.error(error))