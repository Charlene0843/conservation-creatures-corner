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
  animateValue("value1", 1, 142, 2500);
  animateValue("value2", 0, 577, 0.1);
  
  // ------cursor----
let the_cursor = document.getElementById("cursor");
document.addEventListener("mousemove", function (e) {
  //console.log(e.pageX); // 滑鼠距離頁面最左側的距離
  //console.log(e.pageY); // 滑鼠距離頁面最上方的距離
  console.log(window.scrollY);

  the_cursor.style.left = e.pageX + 10 + "px";
  the_cursor.style.top = e.pageY - window.scrollY + 10 + "px";
});
