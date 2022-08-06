let modal = document.querySelector('.modal_vacio');
let codificar = document.querySelector('.btn_codificar');
let entrada=document.querySelector('.entrada');
let salida=document.querySelector('.salida');







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