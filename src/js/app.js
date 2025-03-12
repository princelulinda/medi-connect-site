const nav = document.querySelector('nav');
const body = document.querySelector('main');
window.addEventListener('scroll', function() {
  console.log('scrolling');
    if (window.scrollY > 100) {
        nav.classList.add('nav--scrolled');
    } else {
        nav.classList.remove('nav--scrolled');
    }
});

var i = 0;
var timer = window.setInterval(function(){
    i++;
    console.log('le timer ' + i);
    if(i == 5){
        console.log("temps ecoulé");
        window.clearInterval(timer)
    } 
    
},1000)
