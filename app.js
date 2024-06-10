
let pron = ['mi', 'tu', 'su'];
let adj = ['gran', 'pequeño', 'rojo', 'azul'];
let sust = ['empresa', 'sitio', 'web', 'negocio'];


function generateDomains() {
    for (let i = 0; i < pron.length; i++) {
        for (let j = 0; j < adj.length; j++) {
            for (let k = 0; k < sust.length; k++) {
                let domain = pron[i] + adj[j] + sust[k] + ".com";
                console.log(domain);
            }
        }
    }
}

// Llamar a la función para generar y mostrar las combinaciones
generateDomains();
console.log("Cualquier string");