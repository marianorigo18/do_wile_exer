let valorHp;
let monoOrTri = false;


do{
    valorHp = prompt('ingrese los HP de su motor')
    if(!isNaN(valorHp) == false){
        alert('solo numeros porfavor')
    }
}while(!isNaN(valorHp) == false)


do{
    monoOrTri = prompt('si es monofasico ingrese 1, si es trifasico 2')
    if(!isNaN(monoOrTri) == false){
        alert('solo numeros porfavor')
    }
    if(monoOrTri > 2){
        alert('No mayor a 2')
    }else{
        calc(valorHp, Number(monoOrTri))
    }
}while(Number(monoOrTri) > 2 || !isNaN(monoOrTri) == false)


function calc(hp, mt){
    if(mt == 1){
        alert(`El consumo de su motor monofasico es de ${hp * 6} Amperes`)
    }
    if(mt == 2){
        alert(`El consumo de su motor trifasico es de ${hp * 1.5} Amperes`)
    }
}
