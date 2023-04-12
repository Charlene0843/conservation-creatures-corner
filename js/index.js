
// var scroll_overlay=document.getElementsByClassName('overlay');
// scroll_overlay.addEventListner(scroll,function(){

// })

// let top_button = getElementsByClassName('top');
// top.addEventListener(click,function(){

// })
// ---------------------ocean
let lightbox_el1 = document.getElementById("lightbox1");


// 頁面上的按鈕
var btn_modal = document.getElementsByClassName("btn_modal")[0];
btn_modal.addEventListener("click", function () {
  lightbox_el1.classList.remove("none");
});


var btn_modal_close = document.getElementsByClassName("btn_modal_close")[0];
btn_modal_close.addEventListener("click", function () {
  lightbox_el1.classList.add("none");
});


lightbox_el1.addEventListener("click", function () {
  this.classList.add("none");
});


// 點擊 lightbox 中的白色區域，不會關掉 modal
lightbox_el1.querySelector("article").addEventListener("click", function (e) {
  e.stopPropagation();
});
// ---------------------climate
let lightbox_el2 = document.getElementById("lightbox2");


// 頁面上的按鈕
var btn_modal = document.getElementsByClassName("btn_modal")[1];
btn_modal.addEventListener("click", function () {
  lightbox_el2.classList.remove("none");
});


var btn_modal_close = document.getElementsByClassName("btn_modal_close")[1];
btn_modal_close.addEventListener("click", function () {
  lightbox_el2.classList.add("none");
});


lightbox_el2.addEventListener("click", function () {
  this.classList.add("none");
});


// 點擊 lightbox 中的白色區域，不會關掉 modal
lightbox_el2.querySelector("article").addEventListener("click", function (e) {
  e.stopPropagation();
});

// ------------------people
let lightbox_el3 = document.getElementById("lightbox3");


// 頁面上的按鈕
var btn_modal = document.getElementsByClassName("btn_modal")[2];
btn_modal.addEventListener("click", function () {
  lightbox_el3.classList.remove("none");
});


var btn_modal_close = document.getElementsByClassName("btn_modal_close")[2];
btn_modal_close.addEventListener("click", function () {
  lightbox_el3.classList.add("none");
});


lightbox_el3.addEventListener("click", function () {
  this.classList.add("none");
});


// 點擊 lightbox 中的白色區域，不會關掉 modal
lightbox_el3.querySelector("article").addEventListener("click", function (e) {
  e.stopPropagation();
});
// ------------------land
let lightbox_el4 = document.getElementById("lightbox4");


// 頁面上的按鈕
var btn_modal = document.getElementsByClassName("btn_modal")[3];
btn_modal.addEventListener("click", function () {
  lightbox_el4.classList.remove("none");
});


var btn_modal_close = document.getElementsByClassName("btn_modal_close")[3];
btn_modal_close.addEventListener("click", function () {
  lightbox_el4.classList.add("none");
});


lightbox_el4.addEventListener("click", function () {
  this.classList.add("none");
});


// 點擊 lightbox 中的白色區域，不會關掉 modal
lightbox_el4.querySelector("article").addEventListener("click", function (e) {
  e.stopPropagation();
});
// ------------------water
let lightbox_el5 = document.getElementById("lightbox5");


// 頁面上的按鈕
var btn_modal = document.getElementsByClassName("btn_modal")[4];
btn_modal.addEventListener("click", function () {
  lightbox_el5.classList.remove("none");
});


var btn_modal_close = document.getElementsByClassName("btn_modal_close")[4];
btn_modal_close.addEventListener("click", function () {
  lightbox_el5.classList.add("none");
});


lightbox_el5.addEventListener("click", function () {
  this.classList.add("none");
});


// 點擊 lightbox 中的白色區域，不會關掉 modal
lightbox_el5.querySelector("article").addEventListener("click", function (e) {
  e.stopPropagation();
});



$('.slideshow').each(function () {

  let slideImgs = $(this).find('img'),
    slideImgsCount = slideImgs.length,
    currentIndex = 0;

  slideImgs.eq(currentIndex).fadeIn();

  setInterval(showNextSlide, 5000);

  function showNextSlide() {
    let nextIndex = (currentIndex + 1) % slideImgsCount;
    slideImgs.eq(currentIndex).fadeOut();
    slideImgs.eq(nextIndex).fadeIn();
    currentIndex = nextIndex;
  }

})

let count = document.getElementsByClassName("count");

window.addEventListener("scroll", function () {

  //console.log( my_block.getBoundingClientRect().top );
  if (count.getBoundingClientRect().top <= 0) {
    animateValue("value1", 1, 142, 2500);
    animateValue("value2", 0, 577, 0.1);
  }


});




// -----數字特效-----
function animateValue(id, start, end, duration) {
  if (start === end) return;
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function () {
    current += increment;
    obj.innerHTML = current;
    if (current >= end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// toLocaleString().
// animateValue("value1", 1, 142, 2500);
// animateValue("value2", 0, 577, 0.1);

// $('.counter').counterUp({
//   delay: 10,
//   time: 1000
// }); 
let haha = false;

let numvalue1 = document.getElementById("value1");

window.addEventListener("scroll", function(){
  
  
  if(numvalue1.getBoundingClientRect().top <= 500 && !haha){
    animateValue("value1", 1, 142, 2500);
    animateValue("value2", 0, 577, 0.1);
    haha = true;
  }
  
  
  
});


// ------cursor----
let the_cursor = document.getElementById("cursor");
document.addEventListener("mousemove", function (e) {
  //console.log(e.pageX); // 滑鼠距離頁面最左側的距離
  //console.log(e.pageY); // 滑鼠距離頁面最上方的距離
  console.log(window.scrollY);

  the_cursor.style.left = e.pageX + 10 + "px";
  the_cursor.style.top = e.pageY - window.scrollY + 10 + "px";
});






// -----hamburger-----
let hamburger = document.getElementsByClassName("hamburger");
hamburger.document.addEventListener("click",function(){

});



