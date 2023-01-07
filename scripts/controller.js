const imgHb = document.querySelector(".nav img");
const navItem = document.querySelector(".wrap");
const a = document.querySelectorAll(".link");
imgHb.addEventListener("click",(e)=>{
  navItem.classList.toggle("wrap");
  navItem.classList.toggle("wdisplay");
});

let slideIdx = 1;
showSlides(slideIdx);
document.querySelector(".previous").addEventListener("click",()=>{plusSlides(1)});
document.querySelector(".next").addEventListener("click",()=>{plusSlides(-1)});

function plusSlides(n) {
  showSlides(slideIdx += n);
}

function showSlides(n) {
  let slides = document.querySelectorAll(".Slides");
  if (n > slides.length) slideIdx = 1 ;   
  if (n < 1) slideIdx = slides.length ;
  for (let i = 0 ; i < slides.length ; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIdx-1].style.display = "block";  
}