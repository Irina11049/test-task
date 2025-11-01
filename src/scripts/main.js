import '../css/style.css'
import '../css/adaptive.css'

document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger')
  const menu = document.getElementById('menu')
  const closeBtn = document.querySelector('.close')
  const mode = document.querySelector('.header__mode')
  const body = document.body

  burger.addEventListener('click', () => {
    menu.classList.add('active')
    burger.style.display = 'none'
    closeBtn.style.display = 'flex'
    mode.style.display = 'grid'
    body.classList.add('no-scroll')
  })

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('active')
    burger.style.display = 'flex'
    
    if (window.innerWidth < 768) {
      mode.style.display = 'none'
    } else {
        mode.style.display = 'grid'
    }
    closeBtn.style.display = 'none'
    body.classList.remove('no-scroll')
  })

  const slides = document.querySelector('.reasons__items')
  const slideCount = document.querySelectorAll('.reasons__item').length
  const prevBtn = document.querySelector('.prev')
  const nextBtn = document.querySelector('.next')

  let currentIndex = 0

  //Слайдер для блока с причинами посещения
  function goToSlide (index) {
    if (index < 0) {
      index = slideCount - 1
    } else if (index >= slideCount) {
      index = 0
    }
    currentIndex = index
    slides.style.transform = `translateX(${-index * 100}%)`
  }

  prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1)
  })

  nextBtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1)
  })

  goToSlide(0)

  // Слайдер для отзывов
  const slidesReview = document.querySelector('.reviews__items')
  const slideCountReview = document.querySelectorAll('.review-card').length
  const prevBtnReview = document.querySelector('.review-prev')
  const nextBtnReview = document.querySelector('.review-next')

  let currentIndexReview = 0

  function goToSlideReview (index) {
    if (index < 0) {
      index = slideCountReview - 1
    } else if (index >= slideCountReview) {
      index = 0
    }
    currentIndexReview = index
    slidesReview.style.transform = `translateX(${-index * 100}%)`
  }

  prevBtnReview.addEventListener('click', () => {
    goToSlideReview(currentIndexReview - 1)
  })

  nextBtnReview.addEventListener('click', () => {
    goToSlideReview(currentIndexReview + 1)
  })

  goToSlideReview(0)
})
