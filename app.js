//nav bar menu responsive
const bar =document.getElementById('bar')
const nav =document.getElementById('navbar') 
const close =document.getElementById('close')  
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active'); 
    })
}  

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');  
    })
} 
 
/*product page*/
var mainImg =document.getElementById("main-img");
var smallImg = document.getElementsByClassName("small-Img")

   for (let i = 0; i < smallImg.length; i++) {
         smallImg[i].onclick = function () {
            mainImg.src=smallImg[i].src;
         } 

   }
var products=document.getElementsByClassName("pro") 
for (let i = 0; i < products.length; i++) {
    products[i].onclick = function () {
         window.location.href="sproduct.html"; 
    } 

}