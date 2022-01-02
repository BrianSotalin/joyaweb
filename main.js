const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll = () => {
    const annchoFondo = (window.pageYOffset / altura) *350;
    if(annchoFondo <= 100){
        fondo.style.width = annchoFondo + '%';
    }
 

}