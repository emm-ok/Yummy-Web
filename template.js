// const sliderWrap = getOne(".slider__wrap"), sliderCards = getAll(".slider__card");
// let totalSlides = sliderCards.length;
// sliderWrap.style.width = `${totalSlides}00vw`;
// let slideIndex = 0;
// setInterval(() => {
//   slideIndex = slideIndex % totalSlides;
//   sliderWrap.style.transform = `translateX(-${slideIndex}00vw)` ;
//   slideIndex ++;
// }, 3000);

const mobileMenu = document.getElementById("mobile-menu");

mobileMenu.onclick = function(){
  navBarMenu = document.querySelector(".navbar__menu");
  navBarMenu.style.right = '0';
  navBarMenu.style.opacity = '1';
}




let username;
let noInput = "";

document.getElementById('bookTable__btn').onclick = function() {
  if(noInput === ""){
    console.log("Sorry, Please fill the form");
  }
  else{
    username = document.getElementById('bookTable__name').value;
    username = username.slice(0).toUpperCase();
    console.log(alert(`Thank you ${username} for booking a table with us, Your table will be arranged shortly.`));
  }
}