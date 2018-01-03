var hamburger = document.querySelector(".page-header__mobile-btn--2");
var navigation = document.querySelector(".page-nav");
var showBtn = document.querySelector(".page-nav__show-btn");
var closeBtn = document.querySelector(".page-header__mobile--close");

hamburger.addEventListener("click", function(event1) {
   event1.preventDefault();
   navigation.classList.add("page-nav__show-btn");
   hamburger.classList.add("page-nav__close-btn");
   closeBtn.classList.add("page-nav__show-btn");
});

closeBtn.addEventListener("click", function(event2) {
    event2.preventDefault();
    navigation.classList.remove("page-nav__show-btn");
    closeBtn.classList.remove("page-nav__show-btn")
    hamburger.classList.remove("page-nav__close-btn");
});