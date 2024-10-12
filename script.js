
function addEventListenen() {

    let boton = document.getElementById("enviar");
    boton.addEventListener("click", () => { crearTabla() })

}



function crearTabla() {

    event.preventDefault()

    let container = document.getElementById('container');
    let inputFilas = document.getElementById('filas').value;
    let inputColumnas = document.getElementById('columnas').value;

    let contenedorError = document.createElement('div');
    contenedorError.setAttribute('class', 'error');

    let contenedorTabla = document.createElement('div');
    contenedorTabla.setAttribute('class', 'contenedorTabla');

    let tabla = document.createElement('table');
    tabla.setAttribute('class', 'tablita');


    let filasTabla = document.createElement('tr');
    filasTabla.setAttribute('class', 'fila');
    let elementoTabla = document.createElement('td')
    elementoTabla.setAttribute('class', 'elemento');


    for (let index = 0; index < inputFilas; index++) {
        const fila = document.createElement('tr');
        for (let index = 0; index < inputColumnas; index++) {
            const columna = document.createElement('td');
            fila.append(columna);
        }
        tabla.append(fila);
    }
    
    contenedorTabla.append(tabla);
    container.append(contenedorTabla);


}

addEventListenen();



