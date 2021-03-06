/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hamburger */ \"./src/js/modules/hamburger.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/js/modules/slider.js\");\n/* harmony import */ var _modules_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calendar */ \"./src/js/modules/calendar.js\");\n/* harmony import */ var _modules_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cookie */ \"./src/js/modules/cookie.js\");\n\r\nconst burger = new _modules_hamburger__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nburger.init();\r\n\r\nconst imageArr = [\r\n  \"../img/slider/1.jpg\",\r\n  \"../img/slider/2.jpg\",\r\n  \"../img/slider/3.jpg\",\r\n  \"../img/slider/4.jpg\",\r\n];\r\n\r\n\r\nconst slider = new _modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"](imageArr);\r\n\r\nconst calendar = new _modules_calendar__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\ncalendar.init();\r\nslider.init();\r\n\r\n\r\nconst cookie = new _modules_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\ncookie.init();\r\n\n\n//# sourceURL=webpack://photobooth-justmarried/./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/calendar.js":
/*!************************************!*\
  !*** ./src/js/modules/calendar.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Calendar; }\n/* harmony export */ });\nclass Calendar {\r\n  constructor() {\r\n    this.counter = null;\r\n    this.day = null;\r\n    this.date = null;\r\n    this.month = null;\r\n    this.showMonth = null;\r\n    this.monthText = null;\r\n    this.leftArrow = null;\r\n    this.rightArrow = null;\r\n    this.nextMonthDay = null;\r\n    this.lBody = null;\r\n    this.showYear = null;\r\n    this.reservationClose = null;\r\n    this.popup = null;\r\n    this.currentDay = null;\r\n    this.months = [\r\n      \"Stycze??\",\r\n      \"Luty\",\r\n      \"Marzec\",\r\n      \"Kwiecie??\",\r\n      \"Maj\",\r\n      \"Czerwiec\",\r\n      \"Lipiec\",\r\n      \"Sierpie??\",\r\n      \"Wrzesie??\",\r\n      \"Pa??dziernik\",\r\n      \"Listopad\",\r\n      \"Grudzie??\",\r\n    ];\r\n    this.reservedDays = [];\r\n    this.reservedMonths = [];\r\n    this.reservedYears = [];\r\n    this.days = [\"Pon\", \"Wt\", \"??r\", \"Czw\", \"Pt\", \"Sob\", \"Ndz\"];\r\n    this.Selector = {\r\n      nextBtn: \".js-button-next\",\r\n      prevBtn: \".js-button-prev\",\r\n      currentDay: \".js-current\",\r\n      day: \".js-day\",\r\n      monthText: \".js-month\",\r\n      dateText: \".js-date\",\r\n      monthDays: \".js-days\",\r\n      nextMonth: \".js-nextMonth\",\r\n      lBody: \".l-body\",\r\n      reservationClose: \".f-reservation__close\",\r\n    };\r\n  }\r\n  init() {\r\n    this.counter = 0;\r\n    this.leftArrow = document.querySelector(this.Selector.prevBtn);\r\n    this.rightArrow = document.querySelector(this.Selector.nextBtn);\r\n    this.lBody = document.querySelector(this.Selector.lBody);\r\n\r\n    this.date = new Date();\r\n    this.initCalendar();\r\n    this.currentDay = document.querySelector(this.Selector.currentDay);\r\n    this.addListeners();\r\n    this.setReservations();\r\n  }\r\n\r\n  getAllIndexes(arr, val) {\r\n    var indexes = [],\r\n      i = -1;\r\n    while ((i = arr.indexOf(val, i + 1)) != -1) {\r\n      indexes.push(i);\r\n    }\r\n    return indexes;\r\n  }\r\n  setReservations() {\r\n    const days = [];\r\n    fetch(\r\n      `http://localhost:3000/api/reservations/${this.showYear}/${this.showMonth}`\r\n    )\r\n      .then((res) => res.json())\r\n      .then((docs) => {\r\n        for (let doc of docs) {\r\n          days.push(doc.Date.split(\"-\")[0]);\r\n        }\r\n\r\n        const tmp = document.querySelectorAll(this.Selector.day);\r\n        const actualMonthDays = [];\r\n        tmp.forEach((e) => {\r\n          if (\r\n            e.classList.value == \"js-day\" ||\r\n            e.classList.value == \"c-calendar__current js-current js-day\"\r\n          )\r\n            actualMonthDays.push(e);\r\n        });\r\n\r\n        actualMonthDays.forEach((e) => {\r\n          const counter = days.filter((x) => x == e.textContent).length;\r\n          if (counter == 1) {\r\n            e.classList.add(\"c-calendar__reserved\");\r\n            e.classList.add(\"c-calendar__reserved--once\");\r\n          } else if (counter >= 2) {\r\n            e.classList.add(\"c-calendar__reserved\");\r\n            e.classList.add(\"c-calendar__reserved--twice\");\r\n          }\r\n        });\r\n      });\r\n  }\r\n\r\n  createPopup(day) {\r\n    const dateText =\r\n      day.textContent + \"-\" + this.monthText + \"-\" + this.date.getFullYear();\r\n\r\n    const reservation = document.createElement(\"div\");\r\n    reservation.classList.add(\"c-reservation\");\r\n\r\n    const reservationTitle = document.createElement(\"div\");\r\n    reservationTitle.classList.add(\"c-reservation__title\");\r\n\r\n    const reservationTitleName = document.createElement(\"p\");\r\n    reservationTitleName.classList.add(\"c-reservation__title-name\");\r\n    reservationTitleName.textContent = \"Zarezerwuj termin:\";\r\n\r\n    const reservationTitleDate = document.createElement(\"p\");\r\n    reservationTitleDate.classList.add(\"c-reservation__title-date\");\r\n    reservationTitleDate.textContent = dateText;\r\n\r\n    reservationTitle.appendChild(reservationTitleName);\r\n    reservationTitle.appendChild(reservationTitleDate);\r\n\r\n    const reservationForm = document.createElement(\"form\");\r\n    reservationForm.classList.add(\"f-reservation\");\r\n    reservationForm.method = \"POST\";\r\n    reservationForm.action = \"calendarTerm\";\r\n\r\n    const formWrappers = new Array(5);\r\n    for (let i = 0; i < formWrappers.length; i++) {\r\n      formWrappers[i] = document.createElement(\"div\");\r\n      formWrappers[i].classList.add(\"f-reservation__input-wrapper\");\r\n    }\r\n\r\n    const labelTexts = [\r\n      \"Imie i nazwisko:\",\r\n      \"Email:\",\r\n      \"Numer telefonu:\",\r\n      \"Data\",\r\n    ];\r\n    const ids = [\"name\", \"email\", \"phone\", \"date\"];\r\n    const types = [\"text\", \"email\", \"text\", \"text\"];\r\n\r\n    for (let i = 0; i < ids.length; i++) {\r\n      const label = document.createElement(\"label\");\r\n      label.htmlFor = ids[i];\r\n      label.classList.add(\"f-reservation__label\");\r\n      label.textContent = labelTexts[i];\r\n\r\n      const input = document.createElement(\"input\");\r\n      input.id = ids[i];\r\n      input.name = ids[i];\r\n      input.type = types[i];\r\n      input.classList.add(\"f-reservation__input\");\r\n      if (ids[i] == \"date\") input.innerHTML = dateText;\r\n      if (ids[i] == \"date\") input.value = dateText;\r\n      formWrappers[i].appendChild(label);\r\n      formWrappers[i].appendChild(input);\r\n      reservationForm.appendChild(formWrappers[i]);\r\n    }\r\n\r\n    const labelPackages = document.createElement(\"label\");\r\n    labelPackages.htmlFor = \"packages\";\r\n    labelPackages.classList.add(\"f-reservation__label\");\r\n    labelPackages.textContent = \"Wybierz pakiet:\";\r\n\r\n    const packages = document.createElement(\"select\");\r\n    packages.id = \"packages\";\r\n    packages.name = \"packages\";\r\n\r\n    const packageValues = [\"stypa\", \"potupajka\", \"remiza\"];\r\n    const packageNames = [\r\n      \"Pakiet Stypa (2 Godziny)\",\r\n      \"Pakiet Potupajka (3 Godziny)\",\r\n      \"Pakiet Remiza (4 Godziny)\",\r\n    ];\r\n    const packageOptions = [];\r\n    for (let i = 0; i < 3; i++) {\r\n      packageOptions[i] = document.createElement(\"option\");\r\n      packageOptions[i].value = packageValues[i];\r\n      packageOptions[i].textContent = packageNames[i];\r\n      packages.appendChild(packageOptions[i]);\r\n    }\r\n\r\n    formWrappers[3].appendChild(labelPackages);\r\n    formWrappers[3].appendChild(packages);\r\n\r\n    const button = document.createElement(\"button\");\r\n    button.type = \"submit\";\r\n    button.classList.add(\"f-reservation__submit\");\r\n    button.textContent = \"Zarezerwuj\";\r\n\r\n    const reservationClose = document.createElement(\"button\");\r\n    reservationClose.type = \"reset\";\r\n    reservationClose.classList.add(\"f-reservation__close\");\r\n    reservationClose.textContent = \"Anuluj\";\r\n\r\n    formWrappers[4].appendChild(button);\r\n    formWrappers[4].appendChild(reservationClose);\r\n\r\n    reservationForm.appendChild(formWrappers[3]);\r\n    reservationForm.appendChild(formWrappers[4]);\r\n\r\n    reservation.appendChild(reservationTitle);\r\n    reservation.appendChild(reservationForm);\r\n\r\n    return reservation;\r\n  }\r\n\r\n  addListeners() {\r\n    this.leftArrow.addEventListener(\"click\", () => {\r\n      if (\r\n        this.date.getMonth() > new Date().getMonth() ||\r\n        this.date.getYear() > new Date().getYear()\r\n      ) {\r\n        this.date.setMonth(this.date.getMonth() - 1);\r\n        this.initCalendar();\r\n        this.setReservations();\r\n        this.counter--;\r\n        for (let day of this.day) {\r\n          if (this.counter == 0) {\r\n            if (\r\n              parseInt(day.textContent) >=\r\n                parseInt(this.currentDay.textContent) &&\r\n              (day.className == \"js-day\" ||\r\n                day.className == \"c-calendar__current js-current js-day\")\r\n            )\r\n              day.addEventListener(\"click\", () => {\r\n                this.popup = this.createPopup(day);\r\n                this.showPopup();\r\n              });\r\n          } else {\r\n            if (\r\n              day.className == \"js-day\" ||\r\n              day.className == \"c-calendar__current js-current js-day\"\r\n            )\r\n              day.addEventListener(\"click\", () => {\r\n                this.popup = this.createPopup(day);\r\n                this.showPopup();\r\n              });\r\n          }\r\n        }\r\n      }\r\n    });\r\n\r\n    this.rightArrow.addEventListener(\"click\", () => {\r\n      this.date.setMonth(this.date.getMonth() + 1);\r\n\r\n      this.initCalendar();\r\n      this.setReservations();\r\n      this.counter++;\r\n      for (let day of this.day) {\r\n        if (\r\n          day.className == \"js-day\" ||\r\n          day.className == \"c-calendar__current js-current js-day\"\r\n        )\r\n          day.addEventListener(\"click\", () => {\r\n            this.popup = this.createPopup(day);\r\n            this.showPopup();\r\n          });\r\n      }\r\n    });\r\n\r\n    for (let day of this.day) {\r\n      if (\r\n        parseInt(day.textContent) >= parseInt(this.currentDay.textContent) &&\r\n        (day.className == \"js-day\" ||\r\n          day.className == \"c-calendar__current js-current js-day\")\r\n      )\r\n        day.addEventListener(\"click\", () => {\r\n          this.popup = this.createPopup(day);\r\n          this.showPopup();\r\n        });\r\n    }\r\n  }\r\n\r\n  showPopup() {\r\n    this.lBody.appendChild(this.popup);\r\n    this.reservationClose = document.querySelector(\r\n      this.Selector.reservationClose\r\n    );\r\n    this.reservationClose.addEventListener(\"click\", () => {\r\n      this.lBody.removeChild(this.popup);\r\n    });\r\n  }\r\n\r\n  initCalendar() {\r\n    this.month = this.date.getMonth();\r\n    this.monthText = this.months[this.month];\r\n\r\n    // console.log(this.date.getDay());\r\n    // let whatDay = this.date.getDay() === 0 ? 6 : this.date.getDay() - 1;\r\n    this.dateText = document.querySelector(this.Selector.dateText).innerHTML =\r\n      this.months[this.date.getMonth()] + \" \" + this.date.getFullYear();\r\n\r\n    let days = \"\";\r\n    const monthDays = document.querySelector(this.Selector.monthDays);\r\n    const lastDay = new Date(\r\n      this.date.getFullYear(),\r\n      this.date.getMonth() + 1,\r\n      0\r\n    ).getDate();\r\n    this.date.setDate(1);\r\n\r\n    const firstDayIndex = this.date.getDay() === 0 ? 7 : this.date.getDay();\r\n    const prevLastDay = new Date(\r\n      this.date.getFullYear(),\r\n      this.date.getMonth(),\r\n      0\r\n    ).getDate();\r\n    const lastDayCurrentMonth = new Date(\r\n      this.date.getFullYear(),\r\n      this.date.getMonth() + 1,\r\n      0\r\n    ).getDate();\r\n    const nextDays = 42 - (firstDayIndex - 1 + lastDayCurrentMonth);\r\n    for (let x = firstDayIndex - 1; x > 0; x--) {\r\n      days += `<div class=\"c-calendar__previousMonth js-day\">${\r\n        prevLastDay - x + 1\r\n      }</div>`;\r\n    }\r\n\r\n    for (let i = 1; i <= lastDay; i++) {\r\n      if (\r\n        i === new Date().getDate() &&\r\n        this.date.getMonth() === new Date().getMonth()\r\n      ) {\r\n        days += `<div class=\"c-calendar__current js-current js-day\">${i}</div>`;\r\n      } else {\r\n        days += `<div class=\"js-day\">${i}</div>`;\r\n      }\r\n    }\r\n    for (let f = 1; f <= nextDays; f++) {\r\n      days += `<div class=\"c-calendar__nextMonth js-day js-nextMonth\">${f}</div>`;\r\n      monthDays.innerHTML = days;\r\n    }\r\n    this.day = document.querySelectorAll(this.Selector.day);\r\n    this.showYear = this.date.getFullYear();\r\n    this.showMonth = this.monthText;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://photobooth-justmarried/./src/js/modules/calendar.js?");

/***/ }),

/***/ "./src/js/modules/cookie.js":
/*!**********************************!*\
  !*** ./src/js/modules/cookie.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Cookie; }\n/* harmony export */ });\nclass Cookie {\r\n  constructor() {\r\n    this.cookiesBar = null;\r\n    this.acceptCookiesBtn = null;\r\n\r\n    this.selector = {\r\n      cookiesBar: \".js-cookies-bar\",\r\n      acceptCookiesBtn: \".js-accept-cookies\",\r\n    };\r\n\r\n    this.state = {\r\n      isVisible: \"is-visible\",\r\n      isCookiesAccepted: \"isCookiesAccepted\",\r\n    };\r\n  }\r\n\r\n  init() {\r\n    this.cookiesBar = document.querySelector(this.selector.cookiesBar);\r\n    this.acceptCookiesBtn = document.querySelector(\r\n      this.selector.acceptCookiesBtn\r\n    );\r\n\r\n    const shouldContinue = !!this.cookiesBar && !!this.acceptCookiesBtn;\r\n\r\n    if (!shouldContinue) return;\r\n\r\n    this.addListeners();\r\n    this.handleReadCookies();\r\n  }\r\n\r\n  addListeners() {\r\n    this.acceptCookiesBtn.addEventListener(\"click\", this.handleSaveCookies);\r\n  }\r\n\r\n  handleReadCookies = () => {\r\n    const isCookiesAccepted = this.handleReadCookie(\r\n      this.state.isCookiesAccepted\r\n    );\r\n\r\n    if (!isCookiesAccepted) return;\r\n\r\n    this.handleHideCookieBar();\r\n  };\r\n\r\n  handleReadCookie(cookieName) {\r\n    const isCookiesAccepted =\r\n      document.cookie\r\n        .match(\"(^|;)\\\\s*\" + cookieName + \"\\\\s*=\\\\s*([^;]+)\")\r\n        ?.pop() || \"\";\r\n\r\n    return isCookiesAccepted;\r\n  }\r\n\r\n  handleSaveCookies = () => {\r\n    document.cookie = `${this.state.isCookiesAccepted}=true`;\r\n    this.handleHideCookieBar();\r\n  };\r\n\r\n  handleHideCookieBar = () => {\r\n    this.cookiesBar.classList.remove(this.state.isVisible);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://photobooth-justmarried/./src/js/modules/cookie.js?");

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hamburger; }\n/* harmony export */ });\nclass Hamburger {\r\n  constructor() {\r\n    this.hamburger = null;\r\n    this.header = null;\r\n\r\n    this.Selector = {\r\n      hamburger: \".js-hamburger\",\r\n      header: \".js-header\",\r\n    };\r\n\r\n    this.State = {\r\n      isOpen: \"is-open\",\r\n    };\r\n  }\r\n\r\n  init() {\r\n    this.hamburger = document.querySelector(this.Selector.hamburger);\r\n    this.header = document.querySelector(this.Selector.header);\r\n    const shouldContinue = !!this.hamburger && !!this.header;\r\n    if (!shouldContinue) return;\r\n    this.addListeners();\r\n  }\r\n\r\n  addListeners() {\r\n    this.hamburger.addEventListener(\"click\", () => {\r\n      this.header.classList.toggle(this.State.isOpen);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://photobooth-justmarried/./src/js/modules/hamburger.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Slider; }\n/* harmony export */ });\nclass Slider {\r\n  constructor(images) {\r\n    this.images = images;\r\n    this.slides = null;\r\n    this.dotsList = null;\r\n    this.dotsArr = [];\r\n    this.currentSlide = 0;\r\n    this.slideArr = [];\r\n    this.nextBtn = null;\r\n    this.prevBtn = null;\r\n    this.sliderTimeout = null;\r\n    this.loopTimeout = null;\r\n    this.keyword = null;\r\n\r\n    this.Selector = {\r\n      slides: \".js-slides\",\r\n      dotsList: \".js-dots-list\",\r\n      nextBtn: \".js-button-right\",\r\n      prevBtn: \".js-button-left\",\r\n      slider: \".js-slider\",\r\n    };\r\n  }\r\n\r\n  init() {\r\n    this.slides = document.querySelector(this.Selector.slides);\r\n    this.dotsList = document.querySelector(this.Selector.dotsList);\r\n    this.prevBtn = document.querySelector(this.Selector.prevBtn);\r\n    this.nextBtn = document.querySelector(this.Selector.nextBtn);\r\n    this.slider = document.querySelector(this.Selector.slider);\r\n\r\n    const shouldContinue = !!this.slides && !!this.dotsList;\r\n    if (!shouldContinue) return;\r\n\r\n    for (let i = 0; i < this.images.length; i++) {\r\n      const dot = document.createElement(\"li\");\r\n      dot.classList.add(\"c-slider__dot\");\r\n      // console.log(this.dotsList);\r\n      this.dotsList.appendChild(dot);\r\n      this.dotsArr.push(dot);\r\n\r\n      const slide = document.createElement(\"div\");\r\n      slide.classList.add(\"c-slider__slide\");\r\n      slide.style.backgroundImage = `url('../img/${this.images[i]}')`;\r\n      // console.log(slide);\r\n      this.slides.appendChild(slide);\r\n      this.slideArr.push(slide);\r\n    }\r\n\r\n    this.slideArr[0].classList.toggle(\"is-active\");\r\n    this.dotsArr[0].classList.toggle(\"is-active\");\r\n    this.addListeners();\r\n    // this.autoPlay(this);\r\n    this.startAutoPlay();\r\n    this.keyword = this;\r\n  }\r\n  addListeners() {\r\n    this.prevBtn.addEventListener(\"click\", () => {\r\n      this.changeState(this.currentSlide);\r\n\r\n      if (this.currentSlide === 0) {\r\n        this.currentSlide = this.slideArr.length - 1;\r\n        this.changeState(this.currentSlide);\r\n      } else {\r\n        this.currentSlide--;\r\n        this.changeState(this.currentSlide);\r\n      }\r\n    });\r\n    this.nextBtn.addEventListener(\"click\", () => {\r\n      this.changeState(this.currentSlide);\r\n      if (this.currentSlide < this.slideArr.length - 1) {\r\n        this.currentSlide++;\r\n        this.changeState(this.currentSlide);\r\n      } else {\r\n        this.currentSlide = 0;\r\n        this.changeState(this.currentSlide);\r\n      }\r\n    });\r\n    this.slider.addEventListener(\"mouseenter\", this.stopAutoPlay.bind(this));\r\n    this.slider.addEventListener(\"mouseleave\", this.startAutoPlay.bind(this));\r\n  }\r\n  changeState(currentSlide) {\r\n    this.slideArr[currentSlide].classList.toggle(\"is-active\");\r\n    this.dotsArr[currentSlide].classList.toggle(\"is-active\");\r\n  }\r\n  stopAutoPlay() {\r\n    clearInterval(this.sliderTimeout);\r\n    // clearTimeout(this.loopTimeout);\r\n  }\r\n  startAutoPlay() {\r\n    // console.log(this);\r\n\r\n    this.sliderTimeout = setInterval(this.slideChange.bind(this), 3000);\r\n  }\r\n  slideChange() {\r\n    // console.log(this);\r\n    this.keyword.changeState(this.keyword.currentSlide);\r\n    if (this.keyword.currentSlide < this.keyword.slideArr.length - 1) {\r\n      this.keyword.currentSlide++;\r\n    } else {\r\n      this.keyword.currentSlide = 0;\r\n    }\r\n\r\n    this.keyword.changeState(this.keyword.currentSlide);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://photobooth-justmarried/./src/js/modules/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;