// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var pedro = array;
  var array = [`pedro`,`juan`,`matias`,`maria`];
  return pedro[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  numero = array;
  array = [1, 2, 3, 4];
  return numero[numero.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  numero = array;
  array = [1, 2, 3, 4];
  return numero.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  return array.map(value=> value + 1);
  
  // numero = array;
  // array = [1, 2, 3, 4];
  // nuevoArray = [];
  // for(i=0; i<numero.length; i++){
  //   suma = numero[i] + 1;
  //   nuevoArray.push(suma);
  // }
  // return nuevoArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  nombre = array;
  array = ["pedro", "juan", "maria"], elemento;
  hola = nombre.push(elemento);
  return nombre;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  nombre = array;
  array = ["pedro", "juan", "maria"], elemento;
  hola = nombre.unshift(elemento)
  return nombre;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  nombre = palabras;
  palabras = ["hola", "cómo", "andas", "?"];
  frase = nombre.join(" ");
  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  nombre = array;
  array = ["pedro", "juan", "maria"], elemento;
  ahre = nombre.includes(elemento);
  return ahre;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  
  return numeros.reduce((a, b)=> a + b, 0);
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = resultadosTest.reduce((a, b)=> a + b, 0);
  var promedio = suma / resultadosTest.length;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  return Math.max.apply(null, numeros);
  // var mayor = numeros[0];
  // for(i=0; i<numeros.length; i++){
  //   if(numeros[i] > mayor){
  //     mayor = numeros[i]
  //   }
  // }
  // return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var m=1;
  if(arguments.length === 0){
    return 0;
  } 
  if (arguments.length === 1){
    return arguments[0];
  } 

  for(i=0; i<arguments.length; i++){
    m= m*arguments[i];
  }
  return m;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  arreglo = arreglo.filter(value=> value > 18);
  return arreglo.length;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
  if(numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana"
  } else {
    return "Es dia Laboral"
  }
}



function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var a = n.toString();
  if(a[0]==="9"){
    return true;
  }
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  x = false;
  for(i=0; i<=arreglo.length - 1; i++){
    if(arreglo[i] === arreglo[i+1]){
      x = true;
    } 
  }
  return x;
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var mesesArray=[];
  for(i=0; i < array.length; i++){
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      mesesArray.push(array[i])
    }
  } 
  if(mesesArray.includes("Enero") && mesesArray.includes("Marzo") && mesesArray.includes("Noviembre")){
    return mesesArray;
  } else {
    return "No se encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray = [];
  for(i = 0; i < array.length; i++){
    if (array[i] > 100){
      nuevoArray.push(array[i])
      
    }
  }
  return nuevoArray;

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var newNumero=numero;
  for(i = 0; i < 10; i++){
    var newNumero = newNumero + 2;
    if (newNumero === i) break;
    array.push(newNumero);
  }
  if(i < 10){
    return "Se interrumpió la ejecución"
  }
  return array;
}
  


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  newNumero = numero;
  for(i = 0; i < 10; i++){
    if(i===5) continue
    var newNumero = newNumero + 2;
    array.push(newNumero);
  } 
  return array;
}
  


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
