let y = window.screen.height;
let NavVisibility = 0;

window.addEventListener('scroll',function(){
  let Navbar = document.getElementById('Navbar-1');
  let WsY = window.scrollY

  if(WsY>(NavVisibility+50)){
    Navbar.style.opacity=0;
    NavVisibility = WsY
  }else if(WsY<NavVisibility){
    Navbar.style.opacity=1
    NavVisibility = WsY
  }
  // const O1 =0;
  // const O2 =1;
  // if(WsY<y*(3/4) && Once!==O1){
  //     console.log(0)
  //     Navbar.style.opacity=0;

  //     Once = O1;
  // }else if(WsY>y*(3/4) && Once!==O2){
  //     console.log(1)
  //     Navbar.style.opacity=1;
  //     Once = O2;
  // }
  // console.log(y)
  //console.log(window.scrollY)
  //console.log(pos)
})