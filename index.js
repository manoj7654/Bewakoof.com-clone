import { navbar } from "./components/navbar.js"; 
import {footer} from "./components/footer.js";
let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();


let footer_div=document.getElementById("footer")
footer_div.innerHTML=footer()


let top = document.getElementById("navbar").offsetTop;
function stickynavbar() {
  if (window.scrollY > top) {    
    document.getElementById("navbar").classList.add('sticky');
  } else {
    document.getElementById("navbar").classList.remove('sticky');
  }
}
window.addEventListener('scroll', stickynavbar)