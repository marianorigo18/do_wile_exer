let valorHp;
let valorPotencia;
let valorTension;
let valorCorriente;
let frigorias;

let option = prompt('Elige una opcion: \n1- Corriente nominal. \n2- Potencia. \n3- Amperaje. \n4- Frigorias a Corriente \nPresione X para finalizar.');


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
                    alert(`El consumo de su motor monofasico es de ${Math.floor(hp * 6)} Amperes`)
                }
                if(mt == 2){
                    alert(`El consumo de su motor trifasico es de ${Math.floor(hp * 1.5)} Amperes`)
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
                    alert(`el resultado de ${potencia}w dividido 12v es igual a = ${Math.floor(potencia / 12)}A`)
                }
                if(tension == 2){
                    alert(`el resultado de ${potencia}w dividido 24v es igual a = ${Math.floor(potencia / 24)}A`)
                }
                if(tension == 3){
                    alert(`el resultado de ${potencia}w dividido 110v es igual a = ${Math.floor(potencia / 110)}A`)
                }
                if(tension == 4){
                    alert(`el resultado de ${potencia}w dividido 220v es igual a = ${Math.floor(potencia / 220)}A`)
                }
                if(tension == 5){
                    alert(`el resultado de ${potencia}w dividido 380v es igual a = ${Math.floor(potencia / 380)}A`)
                }
            }

            break;
        case '3':
            do{
                valorCorriente = prompt('ingrese la corriente')
                if(!isNaN(valorCorriente) == false){
                    alert('solo numeros porfavor')
                }
            }while(!isNaN(valorCorriente) == false)
            
            do{
                valorTension = prompt('Elegí la Tension: \n1 - 12v. \n2 - 24v. \n3 - 110v. \n4 - 220v. \n5 - 380v.')
                if(!isNaN(valorTension) == false){
                    alert('solo numeros porfavor')
                }
                if(valorTension > 5){
                    alert('No mayor a 5')
                }else{
                    calculadoraAmperaje(Number(valorCorriente), Number(valorTension))
                }
            }while(Number(valorTension) > 5 || !isNaN(valorTension) == false)

            function calculadoraAmperaje(corriente, tension){
                if(tension == 1){
                    alert(`el resultado de ${corriente}A multiplicado 12v es igual a = ${Math.floor(corriente * 12)}W`)
                }
                if(tension == 2){
                    alert(`el resultado de ${corriente}A multiplicado 24v es igual a = ${Math.floor(corriente * 24)}W`)
                }
                if(tension == 3){
                    alert(`el resultado de ${corriente}A multiplicado 110v es igual a = ${Math.floor(corriente * 110)}W`)
                }
                if(tension == 4){
                    alert(`el resultado de ${corriente}A multiplicado 220v es igual a = ${Math.floor(corriente * 220)}W`)
                }
                if(tension == 5){
                    alert(`el resultado de ${corriente}A multiplicado 380v es igual a = ${Math.floor(corriente * 380)}W`)
                }
            }
            break;
            case '4':
                do{
                    frigorias = prompt('ingrese las frigorias')
                    if(!isNaN(frigorias) == false){
                        alert('solo numeros porfavor')
                    }
                }while(!isNaN(frigorias) == false)

                do{
                    valorTension = prompt('Elegí la Tension: \n1 - 12v. \n2 - 24v. \n3 - 110v. \n4 - 220v. \n5 - 380v.')
                    if(!isNaN(valorTension) == false){
                        alert('solo numeros porfavor')
                    }
                    if(valorTension > 5){
                        alert('No mayor a 5')
                    }else{
                        calculadoraFrigorias(Number(frigorias), Number(valorTension))
                    }
                }while(Number(valorTension) > 5 || !isNaN(valorTension) == false)

                function calculadoraFrigorias(frigorias, tension){
                    /*if(tension == 1){
                        alert(`el resultado de ${frigorias}A multiplicado 12v es igual a = ${Math.floor(frigorias * 12)}W`)
                    }
                    if(tension == 2){
                        alert(`el resultado de ${frigorias}A multiplicado 24v es igual a = ${Math.floor(frigorias * 24)}W`)
                    }
                    if(tension == 3){
                        alert(`el resultado de ${frigorias}A multiplicado 110v es igual a = ${Math.floor(frigorias * 110)}W`)
                    }*/
                    if(tension == 4){
                        alert(`el resultado de ${frigorias} frigorias dividido 860 dividido 220 dividido 2 es igual a = ${Math.floor(frigorias / 0.86 / 220 / 2)}A`)
                    }
                  /*  if(tension == 5){
                        alert(`el resultado de ${frigorias}A multiplicado 380v es igual a = ${Math.floor(frigorias * 380)}W`)
                    }*/
                }
                break;
        default:
            alert('Elegiste una opcion invalida');
            break;
        }
        option = prompt('Elige una opcion: \n1- Corriente nominal. \n2- Potencia. \n3- Amperaje. \n4- Frigorias a Corriente \nPresione X para finalizar.');
}

