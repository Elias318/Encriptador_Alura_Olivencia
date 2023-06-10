 const textArea = document.querySelector(".contenedorTexto");
 const mensaje = document.querySelector(".mostradorTexto");

 function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
 }

function encriptar(stringEncriptada){
    let matrizcodigo = [ ["e", "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"] ];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i< matrizcodigo.length ; i++){
        if(stringEncriptada.includes(matrizcodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0] , matrizcodigo[i][1])

        }
    }
    return stringEncriptada 
}
 
//PARA VISTA DESKTOP


const textAreaDesktop = document.querySelector(".contenedorTextoDesktop");
 const mensajeDesktop = document.querySelector(".mostradorTextoDesktop");

 function btnEncriptarDesktop(){
    const textoEncriptadoDesktop = encriptar(textAreaDesktop.value)
    mensajeDesktop.value = textoEncriptadoDesktop
    textAreaDesktop.value = "";
    mensajeDesktop.style.backgroundImage = "none";
 }

function encriptarDesktop(stringEncriptada){
    let matrizcodigo = [ ["e", "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"] ];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i< matrizcodigo.length ; i++){
        if(stringEncriptada.includes(matrizcodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0] , matrizcodigo[i][1])

        }
    }
    return stringEncriptada 
}

//FUNCION DESENCRIPTAR
function btnDesencriptarDesktop(){
    const textoEncriptadoDesktop = desencriptarDesktop(textAreaDesktop.value)
    mensajeDesktop.value = textoEncriptadoDesktop
    textAreaDesktop.value = "";
    mensajeDesktop.style.backgroundImage = "none";
 }


function desencriptarDesktop(stringDesencriptada){
    let matrizcodigo = [ ["e", "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"] ];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i< matrizcodigo.length ; i++){
        if(stringDesencriptada.includes(matrizcodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizcodigo[i][1] , matrizcodigo[i][0])

        }
    }
    return stringDesencriptada
}

//BOTON COPIAR


function copiarAlPortapapelesDesktop() {
    var textarea = document.querySelector('.mostradorTextoDesktop');
    textarea.select();
    document.execCommand('copy');
  }

  //PARA VISTA QUE NO SEA DESKTOP
  function copiarAlPortapapeles() {
    var textarea = document.querySelector('.mostradorTexto');
    textarea.select();
    document.execCommand('copy');
  }


