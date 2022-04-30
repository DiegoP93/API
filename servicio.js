//PASOS PARA CONSUMIR UN API CON JS PURO

//1 Para donde voy
const URI ="https://api.spotify.com/v1/artists/1cUpGtXcSQsovNYEZOQgOG/top-tracks?market=US"

//2 Que vas a hacer por alla?
//Parametros de la peticion
//Metodo
//Cabeceras
//El body o cuerpo (si es necesario)

const TOKEN = "Bearer BQBwcSRKr78Z5BdcyH8huZ8uF-NzBABtI3W8hJiHjTFmvQQR47TZ0KwNV7sg4cUY0W7DB3FwpPgMEBbPsboLM_LJhLQ-aoy5SFPgjrB2k8pj0p0nC1DbsC72hNzVfZDhSEdkfS-Jb8uImD42Aa6Y6WbXTnvp1jw"

let ParametrosPeticion={
    method:"GET",
    headers:{Authorization:TOKEN}
}
//3 Pda el taxi
//Consumir el API
//Ir al sevidor a pedir la respuesta
fetch(URI,ParametrosPeticion)
.then(function(respuesta){
    return(respuesta.json())//verifico que la respuesta este en json
})
.then(function(respuesta){//Hago lo que quiera con la respueta
    respuesta.tracks.forEach(function(cancion){
        //console.log(cancion.preview_url)
        //console.log(cancion.album.images[0].url)
        //console.log(cancion.album.name)
    });
})
.catch(function(){
    console.log(respuesta)
})