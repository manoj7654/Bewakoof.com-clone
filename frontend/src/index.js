// import { navbar } from "../components/navbar"; 
// import {footer} from "../components/footer";
// let navbar_div=document.getElementById("navbar");
// navbar_div.innerHTML=navbar();
// console.log(navbar)

// let footer_div=document.getElementById("footer")
// footer_div.innerHTML=footer()


// let top = document.getElementById("navbar").offsetTop;
// function stickynavbar() {
//   if (window.scrollY>top) {    
//     document.getElementById("navbar").classList.add('sticky');
//   } else {
//     document.getElementById("navbar").classList.remove('sticky');
//   }
// }
// window.addEventListener('scroll', stickynavbar)





           /*................................slider.................*/
function responsiveSlider() {
  const slider = document.querySelector('.maincontainer');
  let sliderWidth = slider.offsetWidth / 3;
  const sliderList = document.querySelector('ul');
  let items = sliderList.querySelectorAll('li').length -2 ;
  let count = 1;
  
  window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
  });
  
  function prevSlide() {
    if(count > 1) {
      count = count - 2;
      sliderList.style.left = '-' + count * sliderWidth + 'px';
      count++;
    }else if(count == 1) {
      count = items - 1;
      sliderList.style.left = '-' + count * sliderWidth + 'px';
      count++;
    }
    
  }
  function nextSlide() {
    if(count < items) {
      sliderList.style.left = '-' + count * sliderWidth + 'px';
      count++;
      
    }else if(count == items) {
      sliderList.style.left = '0px';
      count = 1;
      
    }
  }
  prev.addEventListener('click', prevSlide);
  next.addEventListener('click', nextSlide);
  setInterval(function() {
    nextSlide();
  }, 4000);
}

window.onload = function() {
  responsiveSlider();
  }

console.log("hii")