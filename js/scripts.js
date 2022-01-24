window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector(".nav").style.transition = "padding 0.2s, opacity 0.2s, height 0.2s, background 0.2s";
    document.querySelector(".nav").style.background = "#ABC6F7";
    document.querySelector(".nav").style.height = "4.5rem";
    document.querySelector(".nav").style.opacity = "0.7";
    document.querySelector(".nav").style.padding = "0rem 1.5rem";
    document.querySelector(".nav").classList.add = "nav-after-scroll";
    document.querySelector(".nav-brand-logo").style.height = "2.25rem";
    document.querySelector(".nav-brand-logo").style.width = "7.9rem";
  } else {
    document.querySelector(".nav").style.transition = "padding 0.2s, opacity 0.2s, height 0.2s, background 0.2s";
    document.querySelector(".nav").style.background = "#e8edf6";
    document.querySelector(".nav").style.height = "8.8rem";
    document.querySelector(".nav").style.opacity = "1";
    document.querySelector(".nav").style.padding = "0rem 4.5rem";
    document.querySelector(".nav").classList.remove = "nav-after-scroll";
    document.querySelector(".nav-brand-logo").style.height = "4.52rem";
    document.querySelector(".nav-brand-logo").style.width = "15.8rem";
  }
} 

/* Set the width of the sidebar to 250px (show it) */
function openLeftNav() {
  document.getElementById("mySidepanel").style.width = "350px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeLeftNav() {
  document.getElementById("mySidepanel").style.width = "0";
} 