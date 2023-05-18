// OBJETOS COMO PARTE DE UNA FUNCION

function imprimirDatos(
    data: {
        userName : string,
        email: string
    }
) : void
{
    console.log(`Tu nombre de usuario es: ${data.userName}, y el email registrado es: ${data.email}`);
}
imprimirDatos({userName: "Kenth", email: "dkq.taco@yavirac.edu.ec"});

//OBJETOS COMO TIPOS

type userData = {
    nombre : string,
    edad : number,
    email : string,
    telefono : string
}

let userList : userData[] = [];

userList.push({
        nombre: "Douglas",
        edad: 21,
        email : "dkq.taco@yavirac.edu.ec",
        telefono : "0985598392"
    });
    console.log(userList[0]);

    