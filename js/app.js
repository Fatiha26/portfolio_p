let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('&#10006');
    navbar.classList.toggle('active');
}




var scrollBtn = document.getElementById("scroll-top");
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
  scrollBtn.style.display = "block";
}
else
{
 scrollBtn.style.display = "none";
}
}

function topFunction()
{
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
}
function roundFunction()
{
    document.getElementById("scroll-top").style.borderRadius = "50%";
}
function sqrFunction()
{
    document.getElementById("scroll-top").style.borderRadius = "5px";
    document.getElementById("scroll-top").style.transition = "0.5s";
}


AOS.init();