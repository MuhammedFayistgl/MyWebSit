let checked = document.querySelector('#checked');
let navlist = document.querySelector('.navlist');
checked.addEventListener('click',()=>{
    navlist.classList.toggle('mob-togle')
})