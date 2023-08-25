// REFERENCIA EL MODULO FUNCIONES A TRAVES DE LA CONSTANTE FUNCIONES

process.stdout.write("Ejercicio\n\n");

let nombreAprendiz = 'juan manuel';
let apellidoAprendiz= 'rodriguez '

let nombreCompletoAprendiz = nombreAprendiz[0].toUpperCase()+
nombreAprendiz.substring(1).toLowerCase() + " " +
apellidoAprendiz.substring(0).toUpperCase() + apellidoAprendiz.substring(1).toLocaleLowerCase();

console.log(nombreCompletoAprendiz);

let i =nombreCompletoAprendiz.length
let y =1;
while(i > 0){
    console.log(i +"  "+ nombreCompletoAprendiz.substring(0,i));
    i--;
    y++;
}
 /*for (let index = 0; index < array.length; index++){
    const element = array[index];
 }*/