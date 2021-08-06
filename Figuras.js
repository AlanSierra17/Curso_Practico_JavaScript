//Código del cuadrado
console.group("Cuadrados");

// const LadoCuardado = 5;
// console.log(`Los lados del cuadrado miden: ${LadoCuardado} cm`);

function PerimetroCuadrado(Lado){
    return  Lado * 4;
}

// console.log(`El perímetro del cuadrado es: ${PerimetroCuadrado} cm`);

function AreaCuadrado(Lado){
    return Lado * Lado;
}

// console.log(`El área del cuadrado miden: ${AreaCuadrado} cm²`);

console.groupEnd();

//Código del triangulo
console.group("Triangulos");

// const LadoTriangulo1 = 6;
// const LadoTriangulo2 = 6;
// const BaseTriangulo = 4;
// const AlturaTriangulo = 5.5;


// console.log(`Los lados del triángulo miden: ${LadoTriangulo1} cm, ${LadoTriangulo2} cm y base ${BaseTriangulo} cm`);
// console.log(`La altura del triángulo mide: ${AlturaTriangulo} cm`)

function PerimetroTriangulo(Lado1, Lado2, Base){
    return Lado1 + Lado2 + Base;
}

// console.log(`El perímetro del triángulo es: ${PerimetroTriangulo} cm`);

function AreaTriangulo(Base, Altura){
    return (Base * Altura) / 2;
}

// console.log(`El área del triángulo es: ${AreaTriangulo} cm²`);

console.groupEnd();

//Código del círculo
console.group("Círculos");

// console.log(`El radio del círculo es: ${RadioCirculo} cm`);

function DiametroCirculo(Radio){
    return Radio * 2;
} 

// console.log(`El diámetro del círculo es: ${DiametroCirculo} cm`);

const PI = Math.PI;
// console.log(`Pi es: ${PI}`);

function Circunferencia(Radio){
    const Diametro = DiametroCirculo(Radio)
    return Diametro * PI;
}

// console.log(`La circunferencia del círculo es: ${Circunferencia} cm`);

function AreaCirculo(Radio){
    return (Radio * Radio) * PI;
} 
// console.log(`El área del círculo es: ${AreaCirculo} cm²`);

console.groupEnd();

//Interactuando con HTML

function CalcularPerimetroCuadrado(){
    const Input = document.getElementById("InputLadoCuadrado").value;
    const Perimetro = PerimetroCuadrado(Input)
    alert(Perimetro);
}

function CalcularAreaCuadrado(){
    const Input = document.getElementById("InputLadoCuadrado").value;
    const Area = AreaCuadrado(Input)
    alert(Area);
}