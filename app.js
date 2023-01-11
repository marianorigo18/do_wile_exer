let valorHp;
let monoOrTri = false;


do{
    valorHp = prompt('ingrese los hp de su motor')
    if(!isNaN(valorHp) == false){
        alert('Debe ingresar solo numeros')
    }
}while(!isNaN(valorHp) == false)


do{
    monoOrTri = prompt('si su motor es monofasico ingrese 1, si su motor es trifasico ingrese 2')
    if(!isNaN(monoOrTri) == false){
        alert('Debe ingresar solo numeros')
    }
    if(monoOrTri > 2){
        monoOrTri == true
        alert('El valor no deve ser mayor a 2')
    }else{
        calc(valorHp, Number(monoOrTri))
    }
}while(!isNaN(monoOrTri) == false)


function calc(hp, mt){
    if(mt == 1){
        alert(`El consumo de su motor monofasico es de ${hp * 6} Amperes`)
    }
    if(mt == 2){
        alert(`El consumo de su motor trifasico es de ${hp * 1.5} Amperes`)
    }
}
