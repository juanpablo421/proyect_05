// REFERENCIA EL MODULO FUNCIONES A TRAVES DE LA CONSTANTE FUNCIONES
const funciones = require('./modules/math.js')

//console.log(funciones);
Process.stdout.write("Ejercicio\n\n");
console.log(funciones.add(5,3));
console.log(funciones.sustract(2,9));
console.log(funciones.multiply(8,8));


let nombreAprendiz = 'nicolas';
let apellidoAprendiz= 'beLTRaN rivera'

let nombreCompletoAprendiz = nombreAprendiz[0].toUpperCase()+
nombreAprendiz.substring(1).toLowerCase() + " " +
apellidoAprendiz.substring(0).toUpperCase() + apellidoAprendiz.substring(1).toLocaleLowerCase();

console.log(nombreCompletoAprendiz);

let i =nombreCompletoAprendiz.length;
while(i > 0){
    console.log(nombreCompletoAprendiz.length - nombreCompletoAprendiz.substring(0,i)).length +1 + '  '
    i--;
}
 /*for (let index = 0; index < array.length; index++){
    const element = array[index];
 }*/