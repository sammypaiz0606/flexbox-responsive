
// document.querySelector('#menu').addEventListener('click', ()=> {
//     document.querySelector('nav ul').classList.toggle('showmenu');
// })

// OR

let menu = document.querySelector('#menu');
let list = document.querySelector('#list');

menu.addEventListener('click', ()=> {
    list.classList.toggle('showmenu');
})