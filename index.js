window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var ScrollNumber = document.documentElement.scrollTop
  if ( ScrollNumber < 600) {
    document.getElementById("Emmanuel").style.fontSize = 3*(1-ScrollNumber/1800)+"rem";

  } else {
    document.getElementById("Emmanuel").style.fontSize = "2rem";
  }
}
