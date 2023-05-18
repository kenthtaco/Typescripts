// Union de tipos de datos
let userId : number|string;

userId = "Kenth";
console.log(userId);

userId = 500;
console.log(userId);

(()=>{
function hello(id: number|string){
     if (typeof id === "number") {
     console.log(`Su usuario es: ${id}`);

    } else {
    console.log(`Su numero de ID es: ${id}`);
}
};
hello("Alexander");
hello(300);
})();
