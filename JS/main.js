// show burger icon - show menu
let burgerIcon = document.querySelector('.burger-icon i');
let menu = document.querySelector('.links');
burgerIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
    burgerIcon.classList.toggle('fa-times');
});
////////////////////////////////////////////
//up button function
let up = document.querySelector(".up");
window.onscroll=function(){
    if(window.scrollY>=670){
        up.classList.add("show");
    }
    else{
        up.classList.remove("show");
    }
}
up.onclick = ()=>{
    window.scrollTo({
        top:0,
        behvior: "smooth",
    })
}
/////////////////////////////////////////////////////
// change form border on click
let form = document.querySelector(".contact form");
form.onclick=function(){
    form.style.borderColor = "#ed751c";
}