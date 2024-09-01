const darkMode = document.querySelector('.dark-mode');
const darkIcon = document.querySelector('.dark-icon');
const lightIcon = document.querySelector('.light-icon');
const body = document.querySelector('body');
const year = document.querySelector('.year');

((d) => {
    const btnMenu = d.querySelector('.menu-hamburguesa');
    const menu = d.querySelector('.links-respons');
    
    btnMenu.addEventListener('click', () =>{
        btnMenu.firstElementChild.classList.toggle('none');
        btnMenu.lastElementChild.classList.toggle('none');
    
        menu.classList.toggle('is-active')
    });

    d.addEventListener('click', (e) =>{
        
        if(!e.target.matches('.links-option a')) return false;
        
        btnMenu.firstElementChild.classList.remove('none');
        btnMenu.lastElementChild.classList.add('none');
        
        menu.classList.remove('is-active');
    })
})(document);


const darkModeToggle = () => {
    darkIcon.classList.toggle('d-none');
    lightIcon.classList.toggle('d-none');
    body.classList.toggle('dark');

    localStorage.setItem('darkMode', body.classList.contains('dark'));
}

darkMode.addEventListener('click', darkModeToggle);
if(localStorage.getItem('darkMode') === 'true'){
    darkIcon.classList.add('d-none');
    lightIcon.classList.remove('d-none');
    body.classList.add('dark');
}else{
    darkIcon.classList.remove('d-none');
    lightIcon.classList.add('d-none');
    body.classList.remove('dark');
}

year.textContent = new Date().getFullYear();