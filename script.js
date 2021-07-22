const navLink = document.querySelectorAll(".nav-link");

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("isActive");
    current[0].className = current[0].className.replace(" isActive", "");
    this.className += " isActive";
  });
}
