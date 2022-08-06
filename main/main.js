let checked = document.querySelector('#icon');
let navlist = document.querySelector('.navlist');
checked.addEventListener('click',()=>{
    navlist.classList.toggle('mob-togle')
})