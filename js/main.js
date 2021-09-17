const menu = document.querySelector('.menu');
const list = document.querySelector('.list');
const donateBtn = document.querySelectorAll('.donate-btn');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector(".close");

menu.addEventListener('click', function(){
     list.classList.toggle('show');
})



function toggleModal() {
    popup.classList.toggle("show-popup");
}

function windowOnClick(event) {
    if (event.target === popup) {
        toggleModal();
    }
}

donateBtn.forEach(btn => {
     btn.addEventListener("click", toggleModal);
})
closeButton.addEventListener("click", (e)=>{
     e.preventDefault();
     toggleModal();
});
window.addEventListener("click", windowOnClick);
window.addEventListener("keypress", (e) =>{
     if(e.code === 'esc'){
          windowOnClick();
     }

})