# Link del  GitHub
https://github.com/Luismadridb/aplicacion-en-consola-web-

# Aplicación de Consola - Fundamentos de JavaScript


Una aplicación interactiva que demuestra los conceptos fundamentales de programación en JavaScript a través de módulos prácticos y didácticos.

## Descripción del Proyecto

Este proyecto es parte del **Módulo 3** del Bootcamp JavaScript y cubre los pilares esenciales del lenguaje:

- **Variables y operaciones básicas**
- **Estructuras condicionales** (if/else, switch)
- **Ciclos** (for, while)
- **Arreglos y funciones**
- **Objetos y métodos**
- **Validación de datos**

## Características Principales

### 1. **Calculadora Interactiva**
Realiza operaciones matemáticas básicas (suma, resta, multiplicación y división) con validación de errores.

### 2. **Análisis de Números**
Determina si un número es par o impar.

### 3. **Día de la Semana**
Convierte números (1-7) a sus correspondientes días de la semana.

### 4. **Clasificador de Edad**
Clasifica las personas según su edad:
- Niño (< 13 años)
- Adolescente (13-17 años)
- Adulto (18-64 años)
- Adulto Mayor (65+ años)

### 5. **Gestión de Arreglos**
Ingresa múltiples números y obtén:
- Promedio
- Número mayor y menor
- Filtrado según valor mínimo

### 6. **Registro de Estudiantes**
Crea un registro de estudiantes con:
- Nombre y edad
- Calificaciones (escala 1-7)
- Estado de aprobación
- Filtrado por nota mínima

## Estructura del Proyecto

```
proyecto_modulo_3/
├── index.html              # Página principal
├── readme.md               # Este archivo
└── assets/
    ├── css/
    │   └── style.css       # Estilos (glassmorphism)
    └── js/
        └── app.js          # Lógica de la aplicación (493 líneas)
```

##  Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- JavaScript habilitado

## 🎮 Cómo Usar

1. **Abre el archivo `index.html`** en tu navegador
2. **Presiona F12** para abrir las herramientas de desarrollador
3. **Ve a la pestaña "Console"** para ver los logs detallados
4. **Haz clic en el botón "Iniciar"** en la página
5. **Sigue las instrucciones** en los prompts

## 💻 Ejemplos de Uso

### Calculadora
```
Ingresa primer número: 10
Ingresa segundo número: 5
Selecciona operación: 1 (suma)
Resultado: 10 + 5 = 15
```

### Gestión de Arreglos
```
¿Cuántos números deseas ingresar? 3
Ingresa número 1: 10
Ingresa número 2: 25
Ingresa número 3: 15

Promedio: 16.67
Mayor: 25
Menor: 10
```

### Registro de Estudiantes
```
¿Cuántos estudiantes? 2
Nombre: Juan
Edad: 20
Calificación: 6 (Aprobado)

Nombre: María
Edad: 19
Calificación: 4 (Aprobado)

Total: 2 | Aprobados: 2 | Reprobados: 0
```


## Conceptos Implementados

| Concepto | Ejemplo |
|----------|---------|
| **Funciones** | `sumar()`, `clasificarEdad()` |
| **Condicionales** | `if/else`, `switch` |
| **Ciclos** | `for`, `while` |
| **Arreglos** | `push()`, `length`, iteración |
| **Objetos** | Objeto estudiante con métodos |
| **Validación** | `validarNumero()`, `validarEnteroPositivo()` |
| **Métodos de String** | `trim()` |
| **Métodos de Array** | `push()`, `filter()` |

## Funciones Principales

### Operaciones Matemáticas
- `sumar(a, b)` - Suma dos números
- `restar(a, b)` - Resta dos números
- `multiplicar(a, b)` - Multiplica dos números
- `dividir(a, b)` - Divide con validación

### Análisis de Datos
- `esParOImpar(numero)` - Clasifica números
- `encontrarMayor(arreglo)` - Encuentra el máximo
- `encontrarMenor(arreglo)` - Encuentra el mínimo
- `calcularPromedio(numeros)` - Calcula la media

### Gestión de Objetos
- `crearEstudiante(nombre, edad, calificacion)` - Crea objeto estudiante
- `filtrarAprobados(estudiantes, notaMinima)` - Filtra estudiantes

## Tecnologías Usadas

- **HTML5** - Estructura
- **CSS3** - Estilos (Flexbox, Grid, Animaciones)
- **JavaScript ES5/ES6** - Lógica de la aplicación

## Notas de Desarrollador

- El archivo `app.js` contiene **493 líneas** de código comentado
- Cada módulo es **independiente** y puede usarse por separado
- Incluye **validación de entrada** en todas las funciones
- Los logs se muestran en la **consola del navegador (F12)**

## Objetivos de Aprendizaje

 Comprender variables y tipos de datos  
 Dominar estructuras de control (if, switch, for, while)  
 Crear y utilizar funciones  
 Trabajar con arreglos y objetos  
 Aplicar validación de datos  
 Usar prompts y alerts para interacción con el usuario  
 Escribir código limpio y comentado  

## Licencia

Proyecto de aprendizaje - Bootcamp JavaScript Módulo 3

---

**Fecha de creación:** 2 de febrero de 2026  
**Versión:** 1.0