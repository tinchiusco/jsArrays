
class Persona {
    constructor(nombre,apellido,dni){
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = parseInt(dni);
    }
}

class Propiedad {
    constructor(zona, m2Frente, m2Fondo){
        this.zona = parseInt(zona);
        this.m2Frente = parseFloat(m2Frente);
        this.m2Fondo = parseFloat(m2Fondo);
    }
}

const clientes = [];

clientes.push(new Persona ("Martin", "Rivas Anaya", 32575427));
clientes.push(new Persona ("Ana Paula", "Cortes", 40587665));
clientes.push(new Persona("Tomas", "Caniza", 36874556));


const terreno = [];

terreno.push(new Propiedad(1, 25, 50));
terreno.push(new Propiedad(2, 100, 250));
terreno.push(new Propiedad(3, 68, 100));

const datosCompletos = [];

datosCompletos.push(clientes, terreno);

for (let datos of datosCompletos) {
    console.log(datos);
}

clientes.pop();
terreno.shift();

for (let datos of datosCompletos) {
    console.log(datos);
}





