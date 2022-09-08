/**
 * Implementar una función que dado un array de numbers, te devuelve un number que es la suma de todos los valores
 * 
 * Nuevo requisito! Queremos ahora que nuestra función sea capaz de procesar un array que contenga "otrs cosas" que no sean números, pero que siga sumando aquellos elementos que SÍ números (solo sumar los tipo number) "55" NO lo vamos a considerar un número
 * 
 * Ejemplo [1, 2, 3] --> 6
 * Ejemplo: [1, 2, "patata"] --> 3
 * 
 * 
 * No uséis métodos de array. (no usar el reduce)
 * 
 * 
 */


 function add(elements) {
    // corregir a 15:42 sin presión
    let sum = 0;

    for (const e of elements) {
        sum += e;
    }

    return sum;

}

function removeNumbers(numbers, toBeRemoved) {

    toBeRemoved.forEach(r => {

        // filtro, y elimino cada número presente en toBeRemoved
        numbers = numbers.filter(x => x != r);
    })

    return numbers;

}

module.exports = {
    add,
    removeNumbers
}