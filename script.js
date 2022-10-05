var toggler=document.querySelector(".toggler"),
    ul =document.querySelector("header ul"),
    link = Array.from(document.querySelectorAll('header ul a')),
    clos = document.querySelector(".close");
 
toggler.onclick =function(){
     ul.classList.add("active")
     clos.classList.add("active")
     for(var i = 0 ; i<link.length; i++){
          link[i].classList.add("active");
     }
}
clos.onclick=function(){
     ul.classList.remove("active")
     for(var i = 0 ; i<link.length; i++){
          link[i].classList.remove("active");
     }
     clos.classList.remove("active")
}

// slider info 

var sliderinfo = Array.from(document.querySelectorAll(".info .concept")),
    next = document.querySelector("#ext"),
    prev = document.querySelector("#rev"),
    circle = Array.from(document.querySelectorAll(".circle ul li"));

currentinfo = 0 ;

checker()

prev.onclick = function(){
     if(currentinfo == sliderinfo.length-1){
          currentinfo = 0
          checker()
     }else{
          currentinfo++
          checker()
     }
       
}
next.onclick=function(){
     if(currentinfo == 0){
          currentinfo = sliderinfo.length - 1
          checker()
     }else{
          currentinfo--
          checker()
     }
}
console.log(next)
console.log(prev,next)
function checker(){
     remove()
     sliderinfo[currentinfo].classList.add("active")

     circle[currentinfo].classList.add("active")
}
function remove(){
     sliderinfo.forEach(element => {
          element.classList.remove("active")
     });
     circle.forEach(element => {
          element.classList.remove("active")
     });
}

//animation about us section
let aboutus = document.querySelector(".aboutus"),
    about = document.querySelector(".about"),
    img = document.querySelector(".aboutimg ");
//animation company section
let copmany = document.querySelector(".company"),
    cont = document.querySelector(".cont"),
    copmimg = document.querySelector(".compimg");
// animation services section
let conservices = document.querySelector(".conservices"),
    herder1 = document.querySelector(".conservices h1"),
    herder2 = document.querySelector(".conservices h2"),
    box = document.querySelectorAll(".box");
window.onscroll=function(){
     if(window.scrollY >= aboutus.offsetTop - 500 && window.scrollY <= aboutus.offsetTop +250){
          about.classList.add("active")
          img.classList.add("active")
     }else{
          about.classList.remove("active")
          img.classList.remove("active")

     }
     if(window.scrollY >= copmany.offsetTop -400 && window.scrollY <= copmany.offsetTop +500 ){
          cont.classList.add("active")
          copmimg.classList.add("active")
     }else{
          cont.classList.remove("active")
          copmimg.classList.remove("active")
     }
     if(window.scrollY >= conservices.offsetTop -400  ){
          box.forEach((box)=>{
               box.classList.add("active")
          })
          herder1.classList.add("active")
          herder2.classList.add("active")
     }else{
          box.forEach((box)=>{
               box.classList.remove("active")
          })   
          herder1.classList.remove("active")  
          herder2.classList.remove("active")  
     }
}




