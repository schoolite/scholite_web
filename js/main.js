const menu = document.querySelector('.menu');
const list = document.querySelector('.list');
const donateBtn = document.querySelector('.donate');
const popup = document.querySelector('popup');

menu.addEventListener('click', function(){
     list.classList.toggle('show');
})

donateBtn.addEventListener('click', function(){
     popup.classList.add('show-popup');
})