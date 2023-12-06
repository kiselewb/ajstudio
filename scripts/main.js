const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".about-slide_btn--next",
    prevEl: ".about-slide_btn--prev",
  },

  pagination: {
    el: ".about-slide_pagination",
    type: "fraction",
    renderFraction: function (currentClass) {
      return '<span class="' + currentClass + '"></span>';
    },
  },
});

burgerBtn = document.querySelector(".burger-icon");
burgerBtnLineUp = document.querySelector(".burger-line--up");
burgerBtnLineDown = document.querySelector(".burger-line--down");
headerMenu = document.querySelector(".header-menu_navigation");
body = document.querySelector("body");
headerMain = document.querySelector(".header-main");
headerDescription = document.querySelector(".header-description");

burgerBtn.addEventListener("click", (event) => {
  isOpen = burgerBtn.classList.contains("open");

  headerMain.style.filter = "none";
  headerDescription.style.filter = "none";
  body.style.overflow = "auto";

  burgerBtn.classList.toggle("open");
  headerMenu.classList.toggle("open");

  if (!isOpen) {
    body.style.overflow = "hidden";
    headerMain.style.filter = "blur(10px)";
    headerDescription.style.filter = "blur(10px)";
  }
});


solutionsSlides = document.querySelectorAll('.solutions-slide')

solutionsSlides.forEach(solutionsSlide => {
  solutionsSlide.addEventListener('click', (event) => {
    solutionsSlides.forEach(solutionsSlide => {
      solutionsSlide.classList.remove('active')
    })

    event.currentTarget.classList.toggle('active')
  })
})


