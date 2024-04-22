//EJERCICIO 1
//Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    obtDetalles() {
        console.log(`Nombre: ${this.nombre} 
        Edad: ${this.edad}
        Género: ${this.genero}`);
    };
}
let miPersona = new Persona("Gema", 39, "femenino");
miPersona.obtDetalles();


//Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.


class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar() {
        console.log(`Se ha registrado un alumno nuevo:
         Nombre: ${this.nombre} 
         Edad: ${this.edad}
         Género: ${this.genero}
         Curso: ${this.curso}
         Grupo: ${this.grupo}`);
    }
}

let miEstudiante = new Estudiante("Vanesa", 40, "femenino", "Fullstack", 3);
miEstudiante.registrar();



//Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero)
        this.asignar(asignatura,nivel)
    }
    asignar(asignatura,nivel) {
        this.asignatura = asignatura;
        this.nivel=nivel;
        console.log(`Se te ha asignado un profesor:
        Nombre:${this.nombre}
        Edad:${this.edad}
        Género:${this.genero}
        Asignatura: ${this.asignatura}
        Nivel: ${this.nivel}`);
    }
}

let newProfesor = new Profesor("Alejandro", 36, "masculino", "React", "10");
newProfesor.asignar("React", "10");

//Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía de clases.


let persona = new Persona("Juan", 25, "masculino");
persona.obtDetalles();


let estudiante = new Estudiante("María", 20, "femenino", "Ingeniería", 1);
estudiante.obtDetalles();
estudiante.registrar();


let profesor = new Profesor("Pedro", 35, "masculino", "Matemáticas", "Avanzado");
profesor.obtDetalles();
profesor.asignar();




