const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll = () => {
    const annchoFondo = (window.pageYOffset / altura) *350;
    if(annchoFondo <= 100){
        fondo.style.width = annchoFondo + '%';
    }
 

}

const btnSwitch2 = document.querySelector('#op-uno');

btnSwitch2.addEventListener('click', (event) => {
    event.preventDefault();
	document.body.classList.toggle('dark');//toggle agrega una clase si no tiene y la elimina si ya la tiene
	btnSwitch.classList.toggle('active');
});
const cambio= document.querySelector('#op-dos');

cambio.addEventListener('click', (event) => {
    event.preventDefault();
	document.body.classList.toggle('dark');//toggle agrega una clase si no tiene y la elimina si ya la tiene
	btnSwitch.classList.toggle('active');
});