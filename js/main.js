const menu = document.querySelector('.menu');
const list = document.querySelector('.list');
// const donateBtn = document.querySelector('.donate');
// const popup = document.querySelector('popup');

menu.addEventListener('click', function(){
     list.classList.toggle('show');
})

var popup = document.querySelector(".popup");
var donate = document.querySelector(".donate");
var closeButton = document.querySelector(".close");

function toggleModal() {
    popup.classList.toggle("show-popup");
}

function windowOnClick(event) {
    if (event.target === popup) {
        toggleModal();
    }
}
function modalClose(){
     if(location.hash == '.donate'){
          location.hash = 27;
     }
}
document.addEventListener('keyup', function(e){
     if (e.keyCode == 27) {
          modalClose();
      }
})
donate.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
