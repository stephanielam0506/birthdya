'use strict';

// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
// }

const navItems = document.querySelectorAll('.nav a');

// navItems.forEach(function() {

navItems.addEventListener('hover', function() {
    navItems.style.backgroundColor = '#ff0000';
  });

navItems.addEventListener('click', function(e) {
    e.style.color = '#00ff00';
});
// });

function change_page(){
  window.location.href = "test.html";
} 