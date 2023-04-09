
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

