let valorHp;
let valorPotencia;

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
            alert(valorPotencia);
     


            break;
        case '3':
            alert('case 3')
        default:
            alert('Elegiste una opcion invalida');
            break;
        }
        option = prompt('Elige una opcion: \n1- Corriente nominal. \n2- Potencia. \n3- Amperaje. \nPresione X para finalizar.');
}

