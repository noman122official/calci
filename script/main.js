let navBarStauts = false;
let toggleNav = function() {
  let getSideBar = document.querySelector(".nav-side");
  let getSideBarUL = document.querySelector(".nav-side ul");


  if (navBarStauts === false){
    getSideBarUL.style.visibility="visible";
    getSideBar.style.width="300px";
    navBarStauts = true;
  }
  else if (navBarStauts === true) {
    getSideBarUL.style.visibility="hidden";
    getSideBar.style.width="60px";
    navBarStauts = false;

  }
}
