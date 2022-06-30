const btns = document.querySelectorAll('.faq-boton');

btns.forEach(btn=>{
    btn.addEventListener('click', () =>{
        btn.parentNode.classList.toggle('active');
    })
})