let valorIngresado;

do{
    valorIngresado = prompt('ingrese un numero')
    if(!isNaN(valorIngresado) == false){
        console.log('Debe ingresar solo numeros')
    }
}while(!isNaN(valorIngresado) == false)
console.log(`El numero ingresado es ${valorIngresado}`)


