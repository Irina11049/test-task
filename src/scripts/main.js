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
    mode.style.display = 'flex'
    body.classList.add('no-scroll')
  })

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('active')
    burger.style.display = 'flex'
    if (window.innerWidth < 900) {
      mode.style.display = 'none'
    } else {
      mode.style.display = 'flex'
    }
    closeBtn.style.display = 'none'
    body.classList.remove('no-scroll')
  })

  class CountdownTimer {
    constructor (endDate) {
      this.endDate = new Date(endDate).getTime()
      this.timerElements = {
        days: document.querySelector('.timer__item:nth-child(1) .timer__value'),
        hours: document.querySelector(
          '.timer__item:nth-child(3) .timer__value'
        ),
        minutes: document.querySelector(
          '.timer__item:nth-child(5) .timer__value'
        ),
        seconds: document.querySelector(
          '.timer__item:nth-child(7) .timer__value'
        )
      }

      this.start()
    }

    start () {
      this.updateTimer()
      this.interval = setInterval(() => this.updateTimer(), 1000)
    }

    updateTimer () {
      const now = new Date().getTime()
      const distance = this.endDate - now

      if (distance < 0) {
        clearInterval(this.interval)
        this.timerElements.days.textContent = '0'
        this.timerElements.hours.textContent = '00'
        this.timerElements.minutes.textContent = '00'
        this.timerElements.seconds.textContent = '00'
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      this.timerElements.days.textContent = days
      this.timerElements.hours.textContent = hours.toString().padStart(2, '0')
      this.timerElements.minutes.textContent = minutes
        .toString()
        .padStart(2, '0')
      this.timerElements.seconds.textContent = seconds
        .toString()
        .padStart(2, '0')
    }
  }
  const endDate = new Date()
  endDate.setDate(endDate.getDate() + 7)
  new CountdownTimer(endDate)

    //Слайдер для блока с причинами посещения
  const slides = document.querySelector('.reasons__items')
  const slideCount = document.querySelectorAll('.reasons__item').length
  const prevBtn = document.querySelector('.prev')
  const nextBtn = document.querySelector('.next')

  let currentIndex = 0

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

  // Слайдер для результатов
  const slidesResults = document.querySelector('.results__items')
  const slideCountResults= document.querySelectorAll('.results__card').length
  const prevBtnResults = document.querySelector('.results__prev')
  const nextBtnResults = document.querySelector('.results__next')

  let currentIndexResults = 0

  function goToSlideResults (index) {
    if (index < 0) {
      index = slideCountResults - 1
    } else if (index >= slideCountResults) {
      index = 0
    }
    currentIndexResults = index
    slidesResults.style.transform = `translateX(${-index * 100}%)`
  }

  prevBtnResults.addEventListener('click', () => {
    goToSlideResults(currentIndexResults - 1)
  })

  nextBtnResults.addEventListener('click', () => {
    goToSlideResults(currentIndexResults + 1)
  })

  goToSlideResults(0)
})
