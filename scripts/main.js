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

  //Таймер
  function initTimer () {
    // Находим элементы более надежным способом
    const timerValues = document.querySelectorAll('.timer__value')

    if (timerValues.length !== 4) {
      console.log('Элементы таймера не найдены')
      return
    }

    const [daysEl, hoursEl, minutesEl, secondsEl] = timerValues

    // Устанавливаем дату окончания (7 дней от текущей даты)
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 7)
    const endTime = endDate.getTime()

    function updateTimer () {
      const now = new Date().getTime()
      const distance = endTime - now

      if (distance < 0) {
        daysEl.textContent = '0'
        hoursEl.textContent = '00'
        minutesEl.textContent = '00'
        secondsEl.textContent = '00'
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      daysEl.textContent = days
      hoursEl.textContent = hours.toString().padStart(2, '0')
      minutesEl.textContent = minutes.toString().padStart(2, '0')
      secondsEl.textContent = seconds.toString().padStart(2, '0')
    }

    // Запускаем таймер
    updateTimer()
    setInterval(updateTimer, 1000)
  }

  // Запускаем таймер
  initTimer()

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
  const slideCountResults = document.querySelectorAll('.results__card').length
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
