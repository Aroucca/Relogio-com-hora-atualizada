

let dataCompleta
let segundo
let hora
let minuto
let ultimoEstadoBtn = 0


codigo = setInterval(atualizaRelogio ,500 )

function atualizaRelogio(){

    //cria obj com data completa
    dataCompleta = new Date()
    
    
    

    hora = dataCompleta.getHours() //captura a hora
    minuto = dataCompleta.getMinutes() //captura o minuto
    segundo = dataCompleta.getSeconds() //caotura o segundo

    //altera value do input de id entada
    entrada.value = + hora + ":" + minuto + ":" + segundo
 
   
}


function paraRelogio(){
    clearInterval(codigo)
    if(ultimoEstadoBtn==0){
        (ultimoEstadoBtn==0)
            btn2.value = "Continuar Relogio"
            ultimoEstadoBtn=1
    } else{
        btn2.value = "Parar o relogio"
        ultimoEstadoBtn = 0
        codigo = setInterval(atualizaRelogio ,500 )
    }
   
    
}

function capturaVolta(){
                         
    voltas.innerHTML += "<tr>" +
                        "<td>" + hora + "</td>" +
                        "<td>" + minuto + "</td>" +
                       "<td>" + segundo + "</td>" +
                       "</tr>"
                    }
    