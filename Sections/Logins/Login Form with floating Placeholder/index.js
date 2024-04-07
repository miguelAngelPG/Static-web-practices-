
var swiper = new Swiper(".mySwiper", {
    speed: 2000,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
    //   disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })

const btnSignUp = document.querySelector('#btnSignUp')
const btnSignIn = document.querySelector('#btnSignIn')

const littleCardSignUp = document.querySelector('.signup')
const littleCardSignIn = document.querySelector('.signin')

const boxLogin = document.querySelector('.login')
const boxRegister = document.querySelector('.register')

btnSignUp.addEventListener('click', () => {
  boxLogin.classList.toggle('active')
  boxRegister.classList.toggle('active')
  littleCardSignIn.classList.toggle('active')
  littleCardSignUp.classList.toggle('active')
})

btnSignIn.addEventListener('click', () => {
  boxLogin.classList.toggle('active')
  boxRegister.classList.toggle('active')
  littleCardSignIn.classList.toggle('active')
  littleCardSignUp.classList.toggle('active')
})

