const navbar = () => {
  return ` <div class="main">
    <div class="main_first">
        <a href="">Offer</a>
        <a href="">Fanbook</a>
        <a href="">Download App</a>
        <a href="">TriBe Membership</a>
    </div>
    <div class="main_second">
        <a href="">Contact Us</a>
        <a href="">Track Order</a>
    </div>
</div>
<div class="navbar">
      <div class="navbar_first">
        <div id="img"><a href="../index.html"><img src="https://www.linkpicture.com/q/00000.png" alt=""></a></div>
        <div id="menu">
            <a id="MEN" href="./public/product.html">MEN</a>
            <a id="WOMEN" href="./public/product.html">WOMEN</a>
        <a href="../frontend/public/product.html">MOBILE COVERS</a>
        </div>
      </div>
      <div class="navbar_second">
        <div class="search">
          
            <input type="text" id="input_box" placeholder="Search by product category or collection">
            <button id="search_button">Search</button>
          
         <a href="./public/login.html"> <i class="fa-solid fa-user"></i></a>
        </div>
       <div class="icon">
        <a href=""> <i class="fa-solid fa-heart"></i></a>
       <a href="./public/cart.html"> <i class="fa-sharp fa-solid fa-bag-shopping"></i> </a>
       <img src="https://images.bewakoof.com/web/india-flag-round-1639566913.png" alt="">
       </div>
      
      </div>
</div>
<hr>
<div class="bottom">
    <div class="bottom_first">
         <a href="">LIVE NOW!</a>
         <a href="./public/product.html">MEN</a>
         <a href="./public/product.html">WOMEN</a>
         <a href="./public/product.html">ACCESSORIES</a>
         <a href="./public/product.html">WINTER WEAR</a>
    </div>
</div>
`;
};

let Navbar=document.getElementById("navbar")

Navbar.innerHTML=navbar()

let men=document.querySelector("#MEN")
men.addEventListener("click",myfun())

 function myfun(){
  console.log("hii")
 localStorage.setItem("key","Male");
 
}

let women=document.querySelector("#WOMEN")
women.addEventListener("click",my)

 function my(){

 localStorage.setItem("key","Female");
 
}

let search=document.querySelector("#search_button")
search.addEventListener("click",data)

function data(){
  let searchData=document.querySelector("#input_box").value;
  localStorage.setItem("searchKey",searchData);
  // console.log("Hii")
  window.location.href="../frontend/public/searchProduct.html";  
}
