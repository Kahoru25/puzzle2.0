let piezas = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let num_click=0;
let primerClick;
//console.log(piezas);
function desordenar(){
    piezas = piezas.sort(function(){
        return Math.random() - 0.5;
    })
    //console.log(piezas);
}

function desmarcarTodo(){
    for(let i=0; i <= 14; i++){
        document.getElementById("img_"+i).style.border = null;
    }
    
}

function seleccionar(casilla){
    num_click = num_click + 1; //contabiliza los clicks
    //console.log("numero click=" + num_click);
    


    if(num_click == 1){
        primerClick = casilla;
        desmarcarTodo();
        document.getElementById("img_"+casilla).style.border = "solid 2px blue";
        //console.log("memoriza el primer click" + primerClick);
        
    }
    

    if(num_click == 2){
        var segundoClick = casilla;
        //console.log("antes del intercambio" + piezas);
        //intercambiar posiciones
        let contenido = piezas[primerClick]; //guardar contenido
        piezas[primerClick] = piezas[segundoClick];
        //intercambio segundo y primero
        piezas[segundoClick] = contenido;
        //console.log("despues" + piezas);

        num_click = 0 //volver a 0

        desmarcarTodo();

        refrescarPuzzle();

        

    }
}

let btn = document.querySelector("#btnComprobar");

btn.addEventListener("click",(event)=>{
    comprobarPuzzle();
})
function comprobarPuzzle(){
    let correcto = true;
    for(let i=0; i<=14; i++){
        if(piezas[i] !=i){
            correcto = false;
            //console.log("?????????? po k")
        }
    }
    if(correcto==true){
        alert("Has completado el puzzle de Chika Fujiwara");
    }else{
        alert("Lo siento, esta incompleto, sigue intentando");
    }
}

function refrescarPuzzle(){
    for(let casilla=0; casilla <= 14; casilla++){
        let imagen = piezas[casilla];
        document.getElementById("img_"+casilla).src = "./img/img_"+imagen+".jpg";
    }

}

desordenar();
refrescarPuzzle();
