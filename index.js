let y = window.screen.height;
let NavVisibility = 0;
let mainAbout = document.getElementById("main-About")
let controls = document.getElementById("controls")

window.addEventListener('scroll', function () {
  let Navbar = document.getElementById('Navbar-1');
  let WsY = window.scrollY

  if (WsY > (NavVisibility + 50) || WsY === 0) {
    Navbar.style.display = "none";
    NavVisibility = WsY
  } else if (WsY < NavVisibility) {
    Navbar.style.display = "block"
    NavVisibility = WsY
  }

  if (WsY > y * 0.80) {
    mainAbout.style.opacity = 0;
    controls.style.display = "flex";
  }
  else {
    mainAbout.style.opacity = 1;
    controls.style.display = "none";
  }
})

const Sections = ["#", "Proyectos", "Tecnologias"]
let counterScroll = 0

document.getElementById("control-up").addEventListener("click", function () {
  if (counterScroll <= 5) {
    counterScroll += 1;
    scrollSection("Proyectos")
  }

})

document.getElementById("control-down").addEventListener("click", function () {
  if (counterScroll > 0) {
    counterScroll -= 1;
    scrollSection(Sections[counterScroll])
  }

})

function scrollSection(Section) {
  const element = document.getElementById(Section);
  element.scrollIntoView(true);
}