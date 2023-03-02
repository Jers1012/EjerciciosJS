// crar el sistema de calendario para verificar si el dia actual junto a la hora es considerada dia y horario laboral estandar (9am a 6pm es horario laboral) ,(usar new Date().getDay , esto resulta en el dia de la seman del 0-6)

//funcion bussinesHours
//parametros: hour--hora actual
//return true/false si la hora actual es horario laboral

function bussinesHours(hora) {
    if(hora >=9 && hora <=18) {
        return true;
    
    } else {
        return false;
        
    }
}
console.log(bussinesHours(9));

//funcion bussinesDay
//parametros: day
//return: t/f si el dia es laboral

function bussinesDay(año,mes,dia) {
    const diaSemana=new Date(año,mes,dia).getDay();

    if (diaSemana >=1 && diaSemana <=5){
        return true;
    }else{
        return false;
    }
}
console.log(bussinesDay(2023,01,17));
//verificacion de la resolucion de ambas funciones debe mostrar un mensaje

function verificacion(){
    
    if (bussinesHours == true && bussinesDay == true){
        console.log('Es dia y hora laboral');
    }else{
        console.log('descansito')
    }
}
console.log(verificacion(9,2023,01,17));

// Escribir una funcion que regrese la cantidad de valores true que hay en un array
/* 
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
 */
// Regresar 0 si el array es vacio
// usar recursion

const myArray = [false, false, false, false];
console.log(myArray);

function countTrueValues(array) {
  // Filtramos los valores true en el array
  const trueValues = array.filter((value) => value === true);

  // Retornamos la cantidad de valores true encontrados
  return trueValues.length;
}

console.log(countTrueValues(myArray)); 


// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion

function calcularMCD(a, b) {
    
    if (b === 0) {
      return a;
    }
  
    return calcularMCD(b, a % b);
  }

console.log(calcularMCD(10, 5)); 


// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion

function fibonacci(n) {
    if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      let fib = fibonacci(n - 1);
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
      return fib;
    }
  }
  
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos

function tetrahedron(n) {
    return (n * (n + 1) * (n + 2)) / 6;
  }
  
console.log(tetrahedron(7));


// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%

function proporciónDeÁrea(país, área) {
    const areaTierra = 148940000; // Área total de la tierra en km²
    const proporción = (área / areaTierra) * 100;
    return `La proporción del área de ${país} en relación al área total de la tierra en el planeta es del ${proporción.toFixed(2)}%`;
  }
  
 console.log(proporciónDeÁrea("Russia", 17098242));

// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit
function invertirBinario(n) {
    const resultadoXOR = n ^ 1;
    return resultadoXOR;
  }

console.log(invertirBinario(0));
console.log(invertirBinario(1));
  
// Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante
// secretName(["Felipe", "Fer", "Zabdiel"]) -> FFZ 
// secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']) -> CJMPRR 
// secretName(['Harry', 'Ron', 'Hermione']) -> HHR
// Primero ordenar los nombres, A->Z, sacar la primera letra de cada elemento

function secretName(names) {
    // Ordenamos los nombres alfabéticamente
    const sortedNames = names.sort();
    
    // Creamos un arreglo vacío para almacenar las iniciales de cada nombre
    const initials = [];
    
    // Recorremos el arreglo de nombres y agregamos la primera letra de cada nombre a nuestro arreglo de iniciales
    for (let i = 0; i < sortedNames.length; i++) {
      initials.push(sortedNames[i][0]);
    }
    
    // Unimos las iniciales 
    const secret = initials.join('');
    
    return secret;
  }
  
console.log(secretName(["Felipe", "Fer", "Zabdiel"]));
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
console.log(secretName(['Harry', 'Ron', 'Hermione']));


// Messenger bzzz // (0 ) n // Si no hay nadie -> "No hay nadie en linea" 
// Si hay 1 persona -> "user1 esta en linea" 
// Si hay 2 personas -> "user1 y user2 estan en linea" 
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"
// onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']) -> 'mockIng99, J0eyPunch and one 1 more online'

function onlineStatus(arr) {
    const n = arr.length;
    if (n === 0) {
      return "No hay nadie en linea";
    } else if (n === 1) {
      return `${arr[0]} esta en linea`;
    } else if (n === 2) {
      return `${arr[0]} y ${arr[1]} estan en linea`;
    } else {
      let msg = `${arr[0]} y ${arr[1]}`;
      let count = 0;
      for (let i = 2; i < n; i++) {
        count++;
      }
      return `${msg} and ${count} more online`;
    }
  }

console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));

// Crear una función que tome 2 parámetros, (numero, longitud) y regresa un array de longitud cantidad de numeros multiplos del numero por parámetro 
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] 
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102] 

function arrayMultiplos(numero, longitud) {
    const result = [];
    for (let i = 0; i < longitud; i++) {
      result.push(numero * (i + 1));
    }
    return result;
  }

console.log(arrayMultiplos(2, 10)); 
console.log(arrayMultiplos(17, 6));
    

// Escribir una función que descubra si el array es dominante positivo 
// Un array es positivo dominante cuando la mayoría de sus elementos son positivos -> [1, -2, 55, 10] 
// positiveDom([-1, -3, -5, 4, 6767]) -> false 

function positiveDom(array) {
    let positiveCount = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        positiveCount++;
      }
    }
    return positiveCount >= array.length / 2;
  }
  
console.log(positiveDom([1, -2, 55, 10]));
console.log(positiveDom([-1, -3, -5, 4, 6767])); 
  

// Promedio antipode 
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos: 
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales 
// - Sumar cada numero de la primera parte con los números inversos de la segunda parte 
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8] 
// - Dividir cada numero del array final entre 2 -> [3.5, 12, 4]

function antipodeAverage(arr) {
    // Verificar si el array tiene una longitud par
    if (arr.length % 2 !== 0) {
      arr.splice(Math.floor(arr.length / 2), 1);
    }
    
    // Dividir el array en dos partes iguales
    const mid = arr.length / 2;
    const arr1 = arr.slice(0, mid);
    const arr2 = arr.slice(mid);
  
    // Invertir la segunda parte del array
    const arr2Reverse = arr2.reverse();
    
    // Crear un nuevo array resultado y agregar la suma de cada elemento
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
      result.push(arr1[i] + arr2Reverse[i]);
    }
  
    // Dividir cada elemento del nuevo array resultado entre 2
    return result.map(num => num / 2);
  }
  

console.log(antipodeAverage([1,2,3,5,22,6]));
  