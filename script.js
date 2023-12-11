//let peso = document.getElementById('peso')
/*let variable = document.getElementById('calculadora')
console.log(variable)*/
let boton = document.getElementById('calcular')
let CALCULAR = document.getElementById('calcular');
let ERROR = document.getElementById('mensajeerror1');
let DIA = document.getElementById('dia');
let FLU = document.getElementById('flu');
let MAN = document.getElementById('man');
let SC1500 = document.getElementById('sc*1500');
let SC2000 = document.getElementById('sc*2000');
let input = document.getElementById('peso')

let METODO = document.getElementById('metodo');
let TITULOMETODO = document.getElementById('titulometodo');
let SEGAR = document.getElementById('segar');
let SUPERF = document.getElementById('superficie');


boton.addEventListener('click', calcular)
input.addEventListener('keyup', calcular)

function calcular(){
    let peso = document.getElementById('peso').valueAsNumber
    console.log('dato ingresado: ', peso)

    if(peso>0){
        ERROR.style.display = "none"
        if(peso<=30){
            segar(peso)
        }else{
            superficie(peso)
        }
    }else{
        ERROR.style.display = "block"
        DIA.style.display = "none"
        FLU.style.display = "none"
        MAN.style.display = "none"
        SC1500.style.display = "none"
        SC2000.style.display = "none"
        SEGAR.style.display = "none"
        SUPERF.style.display = "none"
        METODO.style.display = "block"
        TITULOMETODO.innerHTML = "¿Cómo se calcula?"
    }
    
    
    function segar(valor){
        let vd
        if (valor > 20){
            vd = ((1500)+((valor-20)*20))
            console.log(vd)
            DIA.innerHTML = "Diario: " + vd.toFixed(0) + " cc"
            
        }else if(valor > 10){
            vd = ((1000)+((valor-10)*50))
            console.log(vd)
            DIA.innerHTML = "Diario: " + vd.toFixed(0) + " cc"
        }else{
            vd = (valor*100)
            console.log(vd)
            DIA.innerHTML = "Diario: " + vd.toFixed(0) + " cc"
        }
        FLU.innerHTML = "Flujo: " + (vd/24).toFixed(0) + " cc/hr"
        MAN.innerHTML = "m+m/2: " + ((vd/24)*1.5).toFixed(0) + " cc/hr"
        console.log("Flujo: ", (vd/24), " cc/hr")
        console.log("m+m/2: ", ((vd/24)*1.5), " cc/hr")
        DIA.style.display = "block"
        FLU.style.display = "block"
        MAN.style.display = "block"
        SC1500.style.display = "none"
        SC2000.style.display = "none"
        console.log("segar", valor)

        TITULOMETODO.innerHTML = "Método Holliday-Segar"
        SEGAR.style.display = "block"
        SUPERF.style.display = "none"
        METODO.style.display = "none"

    }
    function superficie(valor){
        let resultado
    
        resultado = ((valor*4)+7)/( valor+90)
        console.log("El resultado es: ", resultado)
        console.log("SC * 1500: ",resultado*1500)
        console.log("SC * 2000: ",resultado*2000)
        DIA.innerHTML = "Resultado: " + resultado.toFixed(2)
        SC1500.innerHTML = "SC * 1500: " + (resultado*1500).toFixed(0)
        SC2000.innerHTML = "SC * 2000: " + (resultado*2000).toFixed(0)
        DIA.style.display = "none"
        FLU.style.display = "none"
        MAN.style.display = "none"
        SC1500.style.display = "block"
        SC2000.style.display = "block"
        console.log("superficie", valor)

        TITULOMETODO.innerHTML = "Método de superficie corporal"
        SUPERF.style.display = "block"
        SEGAR.style.display = "none"
        METODO.style.display = "none"

    }
    
}


