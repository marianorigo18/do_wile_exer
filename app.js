let valorIngresado;

do{
    valorIngresado = prompt('ingrese un numero')
    if(!isNaN(valorIngresado) == false){
        alert('Debe ingresar solo numeros')
    }
}while(!isNaN(valorIngresado) == false)
alert(`El numero ingresado es ${valorIngresado}`)


