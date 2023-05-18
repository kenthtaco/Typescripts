// Funciones

type Sizes = 'S'|'M'|'L'|'XL'|'XXL';
type Genero = 'Hombre'|'Mujer';

function crearProducto(
    nombre : string,
    costo : number,
    genero : Genero,
    talla : Sizes,
    stock : number|null,
    createdAt: Date 
){
    return{
        nombre,
        costo,
        genero, 
        talla, 
        stock, 
        createdAt
    }
}

const producto1 = crearProducto(
    "Zapato deportivo",
    70,
    "Hombre",
    "XL",
    null,
    new Date("02/02/93")
)

console.log(producto1);
console.log(producto1.createdAt);


// Variables opcionales

function crearProducto1(
    nombre : string,
    costo : number,
    genero : Genero,
    createdAt: Date, 

    
){
    return{
        nombre,
        costo,
        genero, 
        createdAt
    }
}

const producto2 = crearProducto1(
    "Zapato deportivo",
    70,
    "Hombre",
    new Date("02/02/93"),
  
)

console.log(producto2);
console.log(producto2.createdAt);

//RETORNO EN LAS FUNCIONES 

//FUNCIONES TIPO VOID

function imprimirNombre(
    yourName : string
  ): void {
    console.log(`Bienvenido ${yourName} a TS`);
  }
  imprimirNombre("Kenth");


  // FUNCIONES CON RETORNO

  let resultado = 0

  function operacion1(
    a : number,
    b : number):number {
    return a + b;
    
    }

    let ejemploFuncion = console.log(operacion1(45, 50));

    
    // FUNCIONES CON VARIOS RETORNOS

    function clasificador(
        a: number,
        b: number,
        c: number,): number|string
        {
        if(a>b && a>c) {
            return a;

        }
        if(b>a && b>c) {
             return b;
            }
        if(c>a && c>b) {
            return c;
            
        } else {
            return `Los numeros son iguales`;
        }
    }

    let clasificador1 = console.log(clasificador(6, 6, 6));
    


  




