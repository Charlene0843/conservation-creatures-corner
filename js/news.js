 // ------cursor----
 let the_cursor = document.getElementById("cursor");
 document.addEventListener("mousemove", function (e) {
   //console.log(e.pageX); // 滑鼠距離頁面最左側的距離
   //console.log(e.pageY); // 滑鼠距離頁面最上方的距離
   console.log(window.scrollY);
 
   the_cursor.style.left = e.pageX + 10 + "px";
   the_cursor.style.top = e.pageY - window.scrollY + 10 + "px";
 });
 