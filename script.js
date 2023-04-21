const kurslarDropDown = document.querySelector('.kurslar_drop_down')
const aboutUsDropDown = document.querySelector('.nav_about_us')

const kurslar = document.querySelector('.nav_courses')
const bizHaqimizda = document.querySelector('.nav_about-us')

aboutUsDropDown.classList.add('not-active')
kurslarDropDown.classList.add('not-active')

kurslar.addEventListener('mouseenter', () => {
  kurslarDropDown.classList.remove('not-active')
  aboutUsDropDown.classList.add('not-active')
})

bizHaqimizda.addEventListener('mouseenter', () => {
  aboutUsDropDown.classList.remove('not-active')
  kurslarDropDown.classList.add('not-active')
})

kurslar.addEventListener('mouseleave', () => {
  aboutUsDropDown.classList.add('not-active')
  kurslarDropDown.classList.add('not-active')
})

bizHaqimizda.addEventListener('mouseleave', () => {
  aboutUsDropDown.classList.add('not-active')
  kurslarDropDown.classList.add('not-active')
})