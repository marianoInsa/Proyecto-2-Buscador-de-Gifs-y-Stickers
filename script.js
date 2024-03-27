// Formar la URL
const URLgif = "https://api.giphy.com/v1/gifs/search";
const URLstickers = "https://api.giphy.com/v1/stickers/search";
let URL;

// Mi API KEY personal y unico es: 07jWwk8sa0dN5SwOhDyNR7L1T8n8oiGc
const apiKey = "&api_key=07jWwk8sa0dN5SwOhDyNR7L1T8n8oiGc";

let busqueda = "?q=";

const limiteDeImagenes = "&limit=";

let q = "";

let urlCompleta = "";

// La URL completa debe ser: URL + busqueda + q + apiKey + limiteDeImagenes
// let urlCompleta = URL + busqueda + q + apiKey + limiteDeImagenes;

// Evento al presionar el boton de busqueda
const botonBusqueda = document.getElementById("botonBusqueda");

botonBusqueda.onclick = () => {
    // Limpio el cuerpo de la pagina primero
    document.getElementById("cuerpo").innerHTML = "";
    // Variable que controla el tipo de elemento
    const tipo = document.getElementById('seleccion').value;

    q = document.getElementById("buscador").value; // Agarro el valor que tenga el campo de entrada
    if (tipo == 'gifs') {
        URL = URLgif;
    } else {
        URL = URLstickers;
    }
    urlCompleta = URL + busqueda + q + apiKey + limiteDeImagenes + cantidad;
    obtenerDatos();
}

// Obtener los datos del json
const obtenerDatos = async () => {
    await fetch(urlCompleta).then((response) => {
        return response.json();
    }).then((giphy) => {
        console.log(giphy);
        // Variable que controlan la cantidad a mostrar
        const cantidad = document.getElementById('cantidad').value;

        // Bucle para recorres las img del json e imprimirlas en el cuerpo de la pagina
        for (let i = 0; i < cantidad; i++){
            const gif = document.createElement('img');  // por cada img creo un elemento img
            gif.src = giphy.data[i].images.original.url;
            gif.className = "nb-3"; // le doy formato con bootstrap
            document.getElementById("cuerpo").appendChild(gif); // lo añado como hijo del div que lo contiene
        }
    })
}

// obtenerDatos();

// Posicion dentro del json en la que esta el gif: data[0].images.original.url