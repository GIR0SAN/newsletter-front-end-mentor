const form = document.getElementById('form')
const campos = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.c-span__required')
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

function setError(index ) {
 campos[0].style.border = '2px solid red';
 campos[0].style.background = '#f5aca6';
 spans[0].style.display = 'block'  
} 

function removeError(index){
    campos[0].style.border = ''
    campos[0].style.background = '';
    spans[0].style.display = 'none'  
}

function emailValidate(){
    if (!emailRegex.test(campos[0].value)) {
        setError()
    } else {
        removeError()
    }
}


const button = document.getElementById('button')
const popup = document.querySelector('.l-popup__wrapper')

button.addEventListener('click', () =>{
popup.style.display = 'flex'
})


popup.addEventListener('click', event =>{
    const elementName = event.target.classList[0]
    const classNames = ['c-subscribe__button', 'l-popup__wrapper']
    const shoulClosePopup = classNames.some(classNames => classNames === elementName)

    if ( shoulClosePopup )

    popup.style.display = 'none'
})