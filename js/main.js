// header color change
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// header color change END


// mobile menu toggle
function toggle(){
  var header = document.querySelector("header");
  header.classList.toggle("active");
}
// mobile menu toggle END

// scroll up btn
const buttonScrollTop = document.querySelector('#btnScrollTop');

window.addEventListener("scroll", function(){
  buttonScrollTop.classList.toggle("visible", window.scrollY > 100);
});

buttonScrollTop.addEventListener("click", function(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});
// scroll up END

// cookie consent popup
const cookieContainer = document.querySelector('.cookie-container');
const cookieBtn = document.querySelector(".cookie-button");

cookieBtn.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("Exanor_Cookie", "true");
});

setTimeout( () => {
  if(!localStorage.getItem("Exanor_Cookie")){
    cookieContainer.classList.add("active");
  }
}, 2000);
// cookie consent popup END

// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

// Smooth Scroll END
