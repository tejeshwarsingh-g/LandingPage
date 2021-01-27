AOS.init();
let formControl = document.querySelectorAll(".form-control");

formControl.forEach((key, i) => {
  key.addEventListener("keyup", function (e) {
    //   e.preventDefault();
    validate(e.target);
  });
});

function validate(e) {
  if (e.value !== "") {
    e.parentElement.children[0].classList.add("show");
  } else {
    e.parentElement.children[0].classList.remove("show");
  }
}
// formControl.addEventListener('click', function (e) {
//     console.log(e);
// })

function openMenu() {
  let menuList = document.querySelector(".nav-menu-list");
  
  menuList.classList.toggle('show');
}
