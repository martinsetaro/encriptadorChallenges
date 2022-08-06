let modal = document.querySelector('.modal_vacio');
let codificar = document.querySelector('.btn_codificar');
let entrada=document.querySelector('.entrada');
let salida=document.querySelector('.salida');
let btnCopiar = document.querySelector('.btn_copiar');
let aviso = document.querySelector('.seccion_respuesta p');







codificar.addEventListener('click',()=>{
    verificarTexto();
})



function verificarTexto(){
if(entrada.value == ""){
    modal.style.display='block';
    setTimeout(()=>{
        modal.style.display='none';
    },3000)
}




}


btnCopiar.addEventListener('click',copia)


function copia(){
    salida.select();
    document.execCommand('copy');
    aviso.style.opacity='1';

    setTimeout(()=>{
        aviso.style.opacity='0';
    },2000)

    


}