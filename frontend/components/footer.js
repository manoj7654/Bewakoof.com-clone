const footer=()=>{
    return `  <div class="footer_first">
    <h1 id="logo"><a href="">Clothingkeeda</a></h1>
    <div  id="foot_c" >
      <div>
        <h3>Customer Service</h3>
        <ul class="ul">
          <a href=""> <li class="li">Contact Us</li></a>
          <a href=""> <li class="li" >Track Order</li></a>
          <a href=""> <li class="li">Return Order</li></a>
          <a href=""><li class="li>Cancel Order</li></a>
        </ul>
      </div>
      <div>
        <h3>Company</h3>
        <ul class="ul">
          <a href=""> <li  class="li">About Us</li></a>
          <a href=""> <li class="li">We're Hiring</li></a>
          <a href=""> <li  class="li">Term's & Condition</li></a>
          <a href=""><li class="li">Privacy Policy</li></a>
          <a href=""><li class="li">Blog</li></a>
        </ul>
      </div>
      <div>
        <h3>Connect with us</h3>
        <ul class="ul">
          <a href=""> <li class="li"><i class="fa-brands fa-instagram"></i><span> raj.manoj.712</span></li></a>
          <a href=""> <li class="li"><i class="fa-brands fa-facebook"></i> <span>Rajmanoj</span></li></a>
          <a href=""> <i  class="fa-brands fa-twitter"></i> 
            <i   class="fa-brands fa-github"></i></li>
            <i   class="fa-brands fa-pinterest"></i></a>
            
         
        </ul>
      </div>
      <div>
        <h3>Keep Uptodate</h3>
        <input type="text" id="input" placeholder="Enter Email id">
        <button id="button"><a href="">Subscribe</a></button>
      </div>
    </div>
    <div class="top">
        <div>
        <p><a href="">15 Days Retrun Policy*</a></p>
        <p><a href="">Cash On Delivery</a></p>
        </div>
        <div id="bottom_img">
            <h3>Download the app</h3>
            <a href=""><img src="https://images.bewakoof.com/web/app_android_v1.png" alt=""></a>
            <a href=""><img src="https://images.bewakoof.com/web/app_ios_v1.png" alt=""></a>
        </div>
        <div>
            <h3>100% Secure Payment</h3>
            <img src="https://images.bewakoof.com/web/secure-payments-image.png" alt="">
        </div>
    </div>
    <hr>
    <div class="bottom">
      <div>
          <h1>Men's Clothing</h1>
          <ul  class="ul">
              <a href=""><li class="li">Top Wear</li></a>
              <a href=""><li class="li">Men's New Arrival</li></a>
              
              <a href=""><li class="li">Mens's Hoodies & Sweatshirt</li></a>
             <a href=""> <li  class="li">Men's long sleeves T-shirt</li></a>
            <a href="">  <li class="li">Men's Plane T-shirts</li></a>
             <a href="">  <li class="li">Men's Plane T-shirts</li></a>
              <a href=""><li class="li">Men's Polo T-shirts</li></a>
             <a href=""> <li class="li">Men's Kurtas</li></a>
              <a href=""><li class="li">Men's Combo T-shirts</li></a>
             <a href=""> <li class="li">Men's shirts</li></a>
             <a href=""> <li  class="li">Men's Nightwear</li></a>
              <a href=""><li class="li">Men' Plus size store</li></a>
          </ul>
      </div>
      <div>
          <h1>Women's Clothing</h1>
          <ul class="ul">
              <a href=""><li class="li">Women's Top Wear</li></a>
              <a href=""><li class="li">Women's New Arrival</li></a>
              <a href=""><li class="li">Womens's Hoodies & Sweatshirt</li></a>
             <a href=""> <li class="li">Women's  T-shirt</li></a>
              <a href=""> <li class="li">Women's 3/4 sleeves T-shirt</li></a>
            <a href="">  <li class="li">Women's kurties</li></a>
             <a href="">  <li  class="li">Women's Dressess</li></a>
              <a href=""><li class="li">Women's Night Wear</li></a>
             <a href=""> <li class="li">"Women's Plus Zero Store"</li></a>
              <a href=""><li class="li">"Women's Pajamas"</li></a>
             <a href=""> <li class="li">Women's sweater size store</li></a>
          </ul>
      </div>
      <div>
          <h1>Mobile Cover's</h1>
          <ul class="ul">
              <a href=""><li class="li">Brands</li></a>
              <a href=""><li  class="li">Apple</li></a>
              <a href=""><li  class="li">Ralme</li></a>
             <a href=""> <li class="li">Women's  T-shirt</li></a>
              <a href=""> <li class="li">Samsung</li></a>
            <a href="">  <li class="li">Xiomi</li></a>
             <a href="">  <li class="li">Oneplus</li></a>
              <a href=""><li  class="li">Vivo</li></a>
             <a href=""> <li  class="li">Oppo</li></a>
          </ul>
      </div>
    </div>
  </div>`
}
let Footer=document.getElementById("footer");
Footer.innerHTML=null
Footer.innerHTML=footer()