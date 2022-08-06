let modal = document.querySelector('.modal_vacio');
let codificar = document.querySelector('.btn_codificar');
let decodificar = document.querySelector('.btn_decodificar')
let entrada=document.querySelector('.entrada');
let salida=document.querySelector('.salida');
let btnCopiar = document.querySelector('.btn_copiar');
let aviso = document.querySelector('.seccion_respuesta p');



// eventos
document.addEventListener('DOMContentLoaded',()=>{

    
codificar.addEventListener('click',()=>{
    verificarTexto();
    codificarTexto();

})

decodificar.addEventListener('click',decodificarTexto);

btnCopiar.addEventListener('click',copia)

    
});
   




//funciones

function verificarTexto(){
if(entrada.value == ""){
    modal.style.display='block';
    setTimeout(()=>{
        modal.style.display='none';
    },3000)
}
}


function copia(){
   
    if(salida.value === ""){
        
    }else {
    salida.select();
    document.execCommand('copy');
    aviso.style.opacity='1';
    aviso.classList.add('animate__animated','animate__backInRight');
    setTimeout(()=>{
        
        aviso.style.opacity='0';
        aviso.classList.remove('animate__animated','animate__backInRight');
    },2000)
}
}


function codificarTexto(){

    entrada.value = entrada.value.toLowerCase();
    let texto = entrada.value;
    salida.value = texto.replaceAll('e','enter').replaceAll('i','imes').replaceAll('a','ai').replaceAll('o','ober').replaceAll('u','ufat');
    
    
    
    

   
}

function decodificarTexto(){
    entrada.value = entrada.value.toLowerCase();
    let text = entrada.value;
    salida.value = text.replaceAll('ai','a').replaceAll('enter','e').replaceAll('imes','i').replaceAll('ober','o').replaceAll('ufat','u')
}

