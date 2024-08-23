// NAV SCROLL BLUR
const header = document.querySelector("header")

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky",window.scrollY > 130);
});


//NAV BAR SLIDER
let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menu-list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    menulist.classList.toggle('open')
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    menulist.classList.remove('open')
};


// FORM VALIDATION
function handleSubmit(){
const message=document.getElementById('message')
const email=document.getElementById('email').value
message.style.display="none"
if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)==false){
    message.innerText="Invalid Email"
    setTimeout(()=>{
        message.style.display="none"
    },3000)
    message.style.display="block"
    return false
}
}


//SEND EMAIL
const success=document.getElementById('success-message')
const contactForm=document.getElementById('contact-form')
const sendEmail=(e)=>{
    e.preventDefault()

    emailjs.sendForm('service_qdghwie','template_u94282f','#contact-form','dFzG2goTSdrtOTTUQ')
    .then(()=>{
        success.style.display="block"

        setTimeout(()=>{
            success.style.display="none"
        },5000)

        contactForm.reset()

    })
}
contactForm.addEventListener('submit',sendEmail)