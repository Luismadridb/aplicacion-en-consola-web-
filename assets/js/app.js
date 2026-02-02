// #1: VARIABLES Y OPERACIONES BÁSICAS

// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Función para restar dos números
function restar(a, b) {
    return a - b;
}

// Función para multiplicar dos números
function multiplicar(a, b) {
    return a * b;
}

// Función para dividir dos números con validación
function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir por cero";
    }
    return a / b;
}


// #2: ESTRUCTURAS CONDICIONALES

// Función para determinar si un número es par o impar
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

// Función para determinar el día de la semana usando switch
function obtenerDiaSemana(numero) {
    switch(numero) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Número inválido. Ingrese un número del 1 al 7";
    }
}

// Función para clasificar edad
function clasificarEdad(edad) {
    if (edad < 0) {
        return "Edad inválida";
    } else if (edad < 13) {
        return "Niño";
    } else if (edad < 18) {
        return "Adolescente";
    } else if (edad < 65) {
        return "Adulto";
    } else {
        return "Adulto Mayor";
    }
}

// ARREGLOS Y CICLOS

// Función para recorrer arreglo con for
function mostrarArreglo(arreglo, nombre) {
    console.log(`\n=== ${nombre} ===`);
    for (let i = 0; i < arreglo.length; i++) {
        console.log(`${i + 1}. ${arreglo[i]}`);
    }
}

// Función para calcular promedio con while
function calcularPromedio(numeros) {
    if (numeros.length === 0) return 0;
    
    let suma = 0;
    let i = 0;
    
    while (i < numeros.length) {
        suma += numeros[i];
        i++;
    }
    
    return suma / numeros.length;
}

// Función que filtra elementos según una condición
function filtrarMayoresQue(arreglo, valorMinimo) {
    let resultado = [];
    
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] >= valorMinimo) {
            resultado.push(arreglo[i]);
        }
    }
    
    return resultado;
}

// Función para encontrar el número mayor en un arreglo
function encontrarMayor(arreglo) {
    if (arreglo.length === 0) return null;
    
    let mayor = arreglo[0];
    
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    
    return mayor;
}

// Función para encontrar el número menor
function encontrarMenor(arreglo) {
    if (arreglo.length === 0) return null;
    
    let menor = arreglo[0];
    
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] < menor) {
            menor = arreglo[i];
        }
    }
    
    return menor;
}


// FUNCIONES Y MODULARIZACIÓN


// Función calculadora que recibe parámetros y retorna resultados
function calculadora(num1, num2, operacion) {
    // Validación de entradas
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Error: Los valores deben ser números";
    }
    
    switch(operacion) {
        case '1':
        case '+':
        case 'suma':
            return sumar(num1, num2);
        case '2':
        case '-':
        case 'resta':
            return restar(num1, num2);
        case '3':
        case '*':
        case 'multiplicacion':
            return multiplicar(num1, num2);
        case '4':
        case '/':
        case 'division':
            return dividir(num1, num2);
        default:
            return "Operación no válida";
    }
}


// #5: OBJETOS

// Función que crea un objeto estudiante
function crearEstudiante(nombre, edad, calificacion) {
    return {
        nombre: nombre,
        edad: edad,
        calificacion: calificacion,
        aprobado: calificacion >= 70,
        
        mostrarInfo: function() {
            return `${this.nombre}, ${this.edad} años - Calificación: ${this.calificacion} (${this.aprobado ? 'Aprobado' : 'Reprobado'})`;
        }
    };
}

// Función para filtrar estudiantes aprobados
function filtrarAprobados(estudiantes, notaMinima) {
    let aprobados = [];
    
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].calificacion >= notaMinima) {
            aprobados.push(estudiantes[i]);
        }
    }
    
    return aprobados;
}


// FUNCIONES DE VALIDACIÓN


// Validar que la entrada sea un número
function validarNumero(valor) {
    let numero = parseFloat(valor);
    if (isNaN(numero)) {
        return null;
    }
    return numero;
}

// Validar que la entrada sea un número entero positivo
function validarEnteroPositivo(valor) {
    let numero = parseInt(valor);
    if (isNaN(numero) || numero < 0) {
        return null;
    }
    return numero;
}


// MENÚS INTERACTIVOS


// Menú principal
function mostrarMenuPrincipal() {
    let menu = `Selecciona una opción:
1.  Calculadora
2.  Análisis de números (par/impar)
3.  Día de la semana
4.  Clasificador de edad
5.  Gestión de arreglos
6.  Registro de estudiantes
7.  Salir
Ingresa el número de tu opción:`;
    
    return prompt(menu);
}

// Módulo 1: Calculadora interactiva
function moduloCalculadora() {
    console.log("\n=== CALCULADORA ===");
    
    let num1 = prompt("Ingresa el primer número:");
    num1 = validarNumero(num1);
    
    if (num1 === null) {
        alert(" Error: Debes ingresar un número válido");
        return;
    }
    
    let num2 = prompt("Ingresa el segundo número:");
    num2 = validarNumero(num2);
    
    if (num2 === null) {
        alert(" Error: Debes ingresar un número válido");
        return;
    }
    
    let operacion = prompt("Selecciona la operación:\n1. Suma (+)\n2. Resta (-)\n3. Multiplicación (*)\n4. División (/)");
    
    let resultado = calculadora(num1, num2, operacion);
    
    let simbolo = {
        '1': '+',
        '2': '-',
        '3': '*',
        '4': '/'
    }[operacion] || operacion;
    
    console.log(`\nResultado: ${num1} ${simbolo} ${num2} = ${resultado}`);
    alert(`Resultado: ${num1} ${simbolo} ${num2} = ${resultado}`);
}

// Módulo 2: Análisis par o impar
function moduloParImpar() {
    console.log("\n=== ANÁLISIS DE NÚMEROS ===");
    
    let numero = prompt("Ingresa un número para verificar si es par o impar:");
    numero = validarNumero(numero);
    
    if (numero === null) {
        alert("Error: Debes ingresar un número válido");
        return;
    }
    
    let resultado = esParOImpar(numero);
    console.log(`\n El número ${numero} es ${resultado}`);
    alert(` El número ${numero} es ${resultado}`);
}

// Módulo 3: Día de la semana
function moduloDiaSemana() {
    console.log("\n=== DÍA DE LA SEMANA ===");
    
    let numero = prompt("Ingresa un número del 1 al 7:");
    numero = validarEnteroPositivo(numero);
    
    if (numero === null) {
        alert(" Error: Debes ingresar un número válido");
        return;
    }
    
    let dia = obtenerDiaSemana(numero);
    console.log(`\n El día ${numero} corresponde a: ${dia}`);
    alert(`El día ${numero} corresponde a: ${dia}`);
}

// Módulo 4: Clasificador de edad
function moduloClasificadorEdad() {
    console.log("\n=== CLASIFICADOR DE EDAD ===");
    
    let edad = prompt("Ingresa una edad:");
    edad = validarEnteroPositivo(edad);
    
    if (edad === null) {
        alert(" Error: Debes ingresar una edad válida");
        return;
    }
    
    let clasificacion = clasificarEdad(edad);
    console.log(`\n Edad ${edad} años: ${clasificacion}`);
    alert(` Edad ${edad} años: ${clasificacion}`);
}

// Módulo 5: Gestión de arreglos
function moduloArreglos() {
    console.log("\n=== GESTIÓN DE ARREGLOS ===");
    
    let cantidad = prompt("¿Cuántos números deseas ingresar?");
    cantidad = validarEnteroPositivo(cantidad);
    
    if (cantidad === null || cantidad === 0) {
        alert("Error: Debes ingresar una cantidad válida");
        return;
    }
    
    let numeros = [];
    
    // Ingreso de números con for
    for (let i = 0; i < cantidad; i++) {
        let num = prompt(`Ingresa el número ${i + 1} de ${cantidad}:`);
        num = validarNumero(num);
        
        if (num === null) {
            alert("Error: Número inválido. Se omitirá.");
            i--;
            continue;
        }
        
        numeros.push(num);
    }
    
    console.log("\n Números ingresados:", numeros);
    console.log(` Promedio: ${calcularPromedio(numeros).toFixed(2)}`);
    console.log(`Mayor: ${encontrarMayor(numeros)}`);
    console.log(`Menor: ${encontrarMenor(numeros)}`);
    
    let filtro = prompt("¿Filtrar números mayores o iguales a cuál valor?");
    filtro = validarNumero(filtro);
    
    if (filtro !== null) {
        let filtrados = filtrarMayoresQue(numeros, filtro);
        console.log(`Números >= ${filtro}:`, filtrados);
    }
    
    alert(`Análisis completo!\n\n Números: ${numeros.join(', ')}\n Promedio: ${calcularPromedio(numeros).toFixed(2)}\n⬆️ Mayor: ${encontrarMayor(numeros)}\n⬇️ Menor: ${encontrarMenor(numeros)}`);
}

// Módulo 6: Registro de estudiantes
function moduloEstudiantes() {
    console.log("\n=== REGISTRO DE ESTUDIANTES ===");
    
    let cantidad = prompt("¿Cuántos estudiantes deseas registrar?");
    cantidad = validarEnteroPositivo(cantidad);
    
    if (cantidad === null || cantidad === 0) {
        alert("Error: Debes ingresar una cantidad válida");
        return;
    }
    
    let estudiantes = [];
    
    // Registro de estudiantes con while
    let i = 0;
    while (i < cantidad) {
        let nombre = prompt(`Nombre del estudiante ${i + 1}:`);
        
        if (!nombre || nombre.trim() === "") {
            alert("El nombre no puede estar vacío");
            continue;
        }
        
        let edad = prompt(`Edad de ${nombre}:`);
        edad = validarEnteroPositivo(edad);
        
        if (edad === null) {
            alert("Error: Edad inválida");
            continue;
        }
        
        let calificacion = prompt(`Calificación de ${nombre} (1-7):`);
        calificacion = validarNumero(calificacion);
        
        if (calificacion === null || calificacion < 1 || calificacion > 7) {
            alert("Error: Calificación inválida (debe estar entre 1 y 7)");
            continue;
        }
        
        let estudiante = crearEstudiante(nombre, edad, calificacion);
        estudiantes.push(estudiante);
        i++;
    }
    
    console.log("\nLISTA DE ESTUDIANTES:");
    for (let j = 0; j < estudiantes.length; j++) {
        console.log(`${j + 1}. ${estudiantes[j].mostrarInfo()}`);
    }
    
    let notaMinima = prompt("¿Cuál es la nota mínima para aprobar? (por defecto 4):");

    notaMinima = validarNumero(notaMinima) || 4;
    
    let aprobados = filtrarAprobados(estudiantes, notaMinima);
    
    console.log(`\nEstudiantes aprobados (>= ${notaMinima}): ${aprobados.length}/${estudiantes.length}`);
    
    let resumen = ` RESUMEN:\n\nTotal de estudiantes: ${estudiantes.length}\nAprobados: ${aprobados.length}\nReprobados: ${estudiantes.length - aprobados.length}\n\n`;
    
    for (let j = 0; j < estudiantes.length; j++) {
        resumen += `${j + 1}. ${estudiantes[j].mostrarInfo()}\n`;
    }
    
    alert(resumen);
}

    console.log(info);
alert(info);

// PROGRAMA PRINCIPAL

function iniciarAplicacion() {
   
    
    alert("¡Bienvenido a la Aplicación de Consola!\n\nEsta aplicación demuestra los fundamentos de JavaScript mediante módulos interactivos.\n\n Presiona OK para continuar");
    
    let continuar = true;
    
    while (continuar) {
        let opcion = mostrarMenuPrincipal();
        
        switch(opcion) {
            case '1':
                moduloCalculadora();
                break;
            case '2':
                moduloParImpar();
                break;
            case '3':
                moduloDiaSemana();
                break;
            case '4':
                moduloClasificadorEdad();
                break;
            case '5':
                moduloArreglos();
                break;
            case '6':
                moduloEstudiantes();
                break;
            case '7':
                moduloInformacion();
                break;
            case '8':
                console.log("Gracias por usar la aplicación!");
                alert("¡Gracias por usar la aplicación!\n\nRecuerda revisar la consola (F12) para ver todos los detalles.");
                continuar = false;
                break;
            default:
                alert("Opción inválida. Por favor selecciona una opción del 1 al 7.");
        }
    }
}

// Si quieres que inicie automáticamente, descomenta la siguiente línea:
// iniciarAplicacion()