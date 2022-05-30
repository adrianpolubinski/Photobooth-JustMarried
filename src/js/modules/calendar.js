export default class Calendar {
  constructor() {
    this.counter=null;
    this.day=null;
    this.date = null;
    this.month = null;
    this.monthText = null;
    this.leftArrow = null;
    this.rightArrow = null;
    this.nextMonthDay = null;
    this.lBody=null;
    this.year=null;
    this.reservationClose=null;
    this.popup=null;
    this.currentDay=null;
    this.months = [
      "Styczeń",
      "Luty",
      "Marzec",
      "Kwiecień",
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Październik",
      "Listopad",
      "Grudzień",
    ];
    this.days = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Ndz"];
    this.Selector = {
      nextBtn: ".js-button-next",
      prevBtn: ".js-button-prev",
      currentDay: ".js-current",
      day: ".js-day",
      monthText: ".js-month",
      dateText: ".js-date",
      monthDays: ".js-days",
      nextMonth: ".js-nextMonth",
      lBody: ".l-body",
      reservationClose: ".f-reservation__close",
    };
  }
  init() {
    this.counter=0;
    this.leftArrow = document.querySelector(this.Selector.prevBtn);
    this.rightArrow = document.querySelector(this.Selector.nextBtn);
    this.lBody=document.querySelector(this.Selector.lBody);


    this.date = new Date();
    this.initCalendar();
    this.currentDay=document.querySelector(this.Selector.currentDay)
    this.addListeners();
  }

  createPopup(day){
    const dateText= day.textContent+"-"+this.monthText+"-"+this.date.getFullYear();

    const reservation = document.createElement("div");
    reservation.classList.add("c-reservation");

    const reservationTitle = document.createElement("div");
    reservationTitle.classList.add("c-reservation__title");

    const reservationTitleName = document.createElement("p");
    reservationTitleName.classList.add("c-reservation__title-name");
    reservationTitleName.textContent="Zarezerwuj termin:";

    const reservationTitleDate = document.createElement("p");
    reservationTitleDate.classList.add("c-reservation__title-date");
    reservationTitleDate.textContent= dateText;

    reservationTitle.appendChild(reservationTitleName);
    reservationTitle.appendChild(reservationTitleDate);

    const reservationForm = document.createElement("form");
    reservationForm.classList.add("f-reservation");
    reservationForm.method = "POST";
    reservationForm.action = "calendarTerm";

    const formWrappers = new Array(5);
    for(let i=0; i<formWrappers.length; i++) {
      formWrappers[i] = document.createElement("div");
      formWrappers[i].classList.add("f-reservation__input-wrapper");
    }

    const labelTexts = ["Imie i nazwisko:", "Email:", "Numer telefonu:"];
    const ids = ["name", "email", "phone"];
    const types = ["text","email","text"];

    for(let i=0; i<ids.length; i++) {
      const label = document.createElement('label');
      label.htmlFor=ids[i];
      label.classList.add("f-reservation__label");
      label.textContent=labelTexts[i];

      const input = document.createElement('input');
      input.id=ids[i];
      input.name=ids[i];
      input.type=types[i];
      input.classList.add("f-reservation__input");
      
      formWrappers[i].appendChild(label);
      formWrappers[i].appendChild(input);
      reservationForm.appendChild(formWrappers[i])
    }

    const labelPackages = document.createElement('label');
    labelPackages.htmlFor="packages";
    labelPackages.classList.add("f-reservation__label") 
    labelPackages.textContent="Wybierz pakiet:";

    const packages = document.createElement('select');
    packages.id="packages";
    packages.name="packages";

    const packageValues = ['stypa', 'potupajka', 'remiza'];
    const packageNames=['Pakiet Stypa (2 Godziny)','Pakiet Potupajka (3 Godziny)','Pakiet Remiza (4 Godziny)']
    const packageOptions = [];
    for(let i=0; i<3; i++){  
      packageOptions[i]=document.createElement('option');
      packageOptions[i].value=packageValues[i];
      packageOptions[i].textContent=packageNames[i];
      packages.appendChild(packageOptions[i]);
    }
    
    formWrappers[3].appendChild(labelPackages);
    formWrappers[3].appendChild(packages);

    const button = document.createElement('button');
    button.type="submit";
    button.classList.add("f-reservation__submit");
    button.textContent="Zarezerwuj";

    const reservationClose = document.createElement("button");
    reservationClose.type="reset"
    reservationClose.classList.add("f-reservation__close")
    reservationClose.textContent="Anuluj";

    formWrappers[4].appendChild(button);
    formWrappers[4].appendChild(reservationClose);

    reservationForm.appendChild(formWrappers[3]);
    reservationForm.appendChild(formWrappers[4]);

    reservation.appendChild(reservationTitle);
    reservation.appendChild(reservationForm);
    
    return reservation;
  }

  addListeners() {  
    this.leftArrow.addEventListener("click", () => {
      if (this.date.getMonth() > new Date().getMonth() || this.date.getYear() > new Date().getYear()) {
        this.date.setMonth(this.date.getMonth() - 1);
        this.initCalendar();
        this.counter--;
        for(let day of this.day){
          if(this.counter==0){
            if(parseInt(day.textContent) >= parseInt(this.currentDay.textContent) 
            && (day.className=="js-day"
            || day.className=="c-calendar__current js-current js-day"))
              day.addEventListener("click", () => { 
              this.popup = this.createPopup(day);
              this.showPopup();
            });
          } else{
            if(day.className=="js-day" || day.className=="c-calendar__current js-current js-day")
              day.addEventListener("click", () => { 
              this.popup = this.createPopup(day);
                this.showPopup();
              });
          }
        }
      }
    });

    this.rightArrow.addEventListener("click", () => {
      this.date.setMonth(this.date.getMonth() + 1);
      this.initCalendar();
      this.counter++;
      for(let day of this.day){
        if(day.className=="js-day"
        || day.className=="c-calendar__current js-current js-day")
        day.addEventListener("click", () => { 
         this.popup = this.createPopup(day);
         this.showPopup();
        });
      }
    });

   
    for(let day of this.day){
      if(parseInt(day.textContent) >= parseInt(this.currentDay.textContent) 
      && (day.className=="js-day"
      || day.className=="c-calendar__current js-current js-day"))
        day.addEventListener("click", () => { 
        this.popup = this.createPopup(day);
          this.showPopup();
        });
     }


     
  }

  showPopup(){
    this.lBody.appendChild(this.popup);
    this.reservationClose=document.querySelector(this.Selector.reservationClose);
    this.reservationClose.addEventListener("click", () => {
     this.lBody.removeChild(this.popup)
    })
  }

  initCalendar() {
    this.month = this.date.getMonth();
    this.monthText = this.months[this.month];

    // console.log(this.date.getDay());
    // let whatDay = this.date.getDay() === 0 ? 6 : this.date.getDay() - 1;
    this.dateText = document.querySelector(this.Selector.dateText).innerHTML =
      this.months[this.date.getMonth()] +
      " " +
      this.date.getFullYear();

    let days = "";
    const monthDays = document.querySelector(this.Selector.monthDays);
    const lastDay = new Date(
      this.date.getFullYear(),
      this.date.getMonth() + 1,
      0
    ).getDate();
    this.date.setDate(1);

    const firstDayIndex = this.date.getDay() === 0 ? 7 : this.date.getDay();
    const prevLastDay = new Date(
      this.date.getFullYear(),
      this.date.getMonth(),
      0
    ).getDate();
    const lastDayCurrentMonth = new Date(
      this.date.getFullYear(),
      this.date.getMonth() + 1,
      0
    ).getDate();
    const nextDays = 42 - (firstDayIndex - 1 + lastDayCurrentMonth);
    for (let x = firstDayIndex - 1; x > 0; x--) {
      days += `<div class="c-calendar__previousMonth js-day">${
        prevLastDay - x + 1
      }</div>`;
    }
    for (let i = 1; i <= lastDay; i++) {
      if (
        i === new Date().getDate() &&
        this.date.getMonth() === new Date().getMonth()
      ) {
        days += `<div class="c-calendar__current js-current js-day">${i}</div>`;
      } else {
        days += `<div class="js-day">${i}</div>`;
      }
    }
    for (let f = 1; f <= nextDays; f++) {
      days += `<div class="c-calendar__nextMonth js-day js-nextMonth">${f}</div>`;
      monthDays.innerHTML = days;
    }
    this.day = document.querySelectorAll(this.Selector.day); 
  } 
}
