//ASSIGNMENT 1 PART 2 SUBIDO A GITHUB
/* Aqui lo primero que hizo fue establecer una funcion para realizar esta operacion y 
llamarlas para ambos equipos */

const calcAverage = (a, b, c) => (a+b+c)/3;
console.log (calcAverage(3,4,5));
// Aqui es cuando llama a la funcion para aplicarlo con los Dolphins
//Test Dolphins
const scoreDolphins = calcAverage (100, 100, 100)
console.log (scoreDolphins);
const scoreKoalas = calcAverage (65, 54, 49);
console.log (scoreKoalas);
// tambien pueden ser juntos en uno mismo
console.log (scoreDolphins, scoreKoalas);

    if (scoreDolphins > scoreKoalas){
        console.log ( `Dolphins win ${scoreDolphins} vs ${scoreKoalas}`);
    } 
    else {
        console.log ( `Koalas win ${scoreKoalas} vs ${scoreDolphins}` );
    }


/* En las funciones es un poquito distinto porque no es necesario declarar los valores hasta el mero incio
La realidad de esto es que en la linea 163 se declaran tal cual y las operaciones se llevan a cabo en dichas funciones. */

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael' , 'Steven', 'Peter'];
console.log (friends);

const years = new Array (1991, 1984, 2000, 2020);
console.log (friends[0]);
console.log (friends[2]);

console.log (friends.length);
console.log (friends[friends.length - 1]);
