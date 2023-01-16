let valorHp;
let valorPotencia;
let valorTension;

let option = prompt('Elige una opcion: \n1- Corriente nominal. \n2- Potencia. \n3- Amperaje. \nPresione X para finalizar.');


while(option != 'X' && option != 'x'){

    switch(option){
        case '1':
            do{
                valorHp = prompt('HP de su motor')
                if(!isNaN(valorHp) == false){
                    alert('solo numeros porfavor')
                }
            }while(!isNaN(valorHp) == false)
            
            
            do{
                tipoDeMotor = prompt('Elegí una opción: \n1- monofasico. \n2 - trifasico.')
                if(!isNaN(tipoDeMotor) == false){
                    alert('solo numeros porfavor')
                }
                if(tipoDeMotor > 2){
                    alert('No mayor a 2')
                }else{
                    calc(valorHp, Number(tipoDeMotor))
                }
            }while(Number(tipoDeMotor) > 2 || !isNaN(tipoDeMotor) == false)
            
            
            function calc(hp, mt){
                if(mt == 1){
                    alert(`El consumo de su motor monofasico es de ${hp * 6} Amperes`)
                }
                if(mt == 2){
                    alert(`El consumo de su motor trifasico es de ${hp * 1.5} Amperes`)
                }
            }
            break;
        case '2':
            do{
                valorPotencia = prompt('ingrese la potencia')
                if(!isNaN(valorPotencia) == false){
                    alert('solo numeros porfavor')
                }
            }while(!isNaN(valorPotencia) == false)

            do{
                valorTension = prompt('Elegí la Tension: \n1 - 12v. \n2 - 24v. \n3 - 110v. \n4 - 220v. \n5 - 380v.')
                if(!isNaN(valorTension) == false){
                    alert('solo numeros porfavor')
                }
                if(valorTension > 5){
                    alert('No mayor a 5')
                }else{
                    calculadoraPotencia(Number(valorPotencia), Number(valorTension))
                }
            }while(Number(valorTension) > 5 || !isNaN(valorTension) == false)
     
            function calculadoraPotencia(potencia, tension){
                if(tension == 1){
                    alert(`el resultado de ${potencia}w dividido 12v es igual a = ${potencia / 12}A`)
                }
                if(tension == 2){
                    alert(`el resultado de ${potencia}w dividido 24v es igual a = ${potencia / 24}A`)
                }
                if(tension == 3){
                    alert(`el resultado de ${potencia}w dividido 110v es igual a = ${potencia / 110}A`)
                }
                if(tension == 4){
                    alert(`el resultado de ${potencia}w dividido 220v es igual a = ${potencia / 220}A`)
                }
                if(tension == 5){
                    alert(`el resultado de ${potencia}w dividido 380v es igual a = ${potencia / 380}A`)
                }
            }

            break;
        case '3':
            alert('case 3')
        default:
            alert('Elegiste una opcion invalida');
            break;
        }
        option = prompt('Elige una opcion: \n1- Corriente nominal. \n2- Potencia. \n3- Amperaje. \nPresione X para finalizar.');
}

