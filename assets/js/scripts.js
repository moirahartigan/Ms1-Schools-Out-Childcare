
//  JavaScript for Toggle menu - https://stackoverflow.com/questions/27577211/javascript-toggle-menu
  
    var navLinks = document.getElementById("navLinks");

    function showmenu() {
      navLinks.style.right = "0"
    }

    function hidemenu() {
      navLinks.style.right = "-200px"
    }

    //Get the button code found here https://www.w3schools.com/howto/howto_js_scroll_to_top.asp :
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}