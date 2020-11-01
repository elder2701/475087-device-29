const map = document.querySelector(".info-contact__map");
const mapModal = document.querySelector(".modal__map");
const mapCloseBtn = document.querySelector(".modal-map__cross");

const writeUsBtn = document.querySelector(".info-contact__letter");
const formModal = document.querySelector(".modal__contact");
const formCloseBtn = document.querySelector(".modal-contact__cross");

const mainSliderControl = document.querySelector(".slider__nav");
const mainSliderBtns = document.getElementsByClassName("slider-nav__item");
const mainSliderPanels = document.getElementsByClassName("slider__item");
const activeMainSliderBtnClass = "slider-nav__item--active";
const activeMainSliderPanelClass = "slider__item--active";

const serviceSliderControl = document.querySelector(".services__menu");
const serviceSliderBtns = document.getElementsByClassName(
  "services-menu__item"
);
const serviceSliderPanels = document.getElementsByClassName("services__item");
const activeServiceSliderBtnClass = "services-menu__item--active";
const activeServiceSliderPanelClass = "services__item--active";

const contactModal = document.querySelector(".modal__contact");
const contactForm = document.querySelector(".modal-contact__form");
const submitContactFormBtn = document.querySelector(".contact-form__button");
const contactFormControls = document.getElementsByClassName(
  "contact-form__control"
);

function clearActiveClass(elements, activeClassName) {
  const elementCount = elements.length;
  for (let i = 0; i < elementCount; i++) {
    elements[i].classList.remove(activeClassName);
  }
}

/*Карта*/

map.addEventListener("click", (e) => {
  e.preventDefault();
  mapModal.classList.add("modal__map--show");
});

mapCloseBtn.addEventListener("click", () => {
  mapModal.classList.remove("modal__map--show");
});

/*Форма обратной связи*/

writeUsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formModal.classList.add("modal__contact--show");
});

formCloseBtn.addEventListener("click", () => {
  formModal.classList.remove("modal__contact--show");
});

/*Главный слайдер*/

mainSliderControl.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < mainSliderBtns.length; i++) {
    if (e.target.parentNode == mainSliderBtns[i]) {
      clearActiveClass(mainSliderBtns, activeMainSliderBtnClass);
      mainSliderBtns[i].classList.add(activeMainSliderBtnClass);

      clearActiveClass(mainSliderPanels, activeMainSliderPanelClass);
      mainSliderPanels[i].classList.add(activeMainSliderPanelClass);
    }
  }
});

/*Слайдер услуг*/

serviceSliderControl.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < serviceSliderBtns.length; i++) {
    if (e.target.parentNode == serviceSliderBtns[i]) {
      clearActiveClass(serviceSliderBtns, activeServiceSliderBtnClass);
      serviceSliderBtns[i].classList.add(activeServiceSliderBtnClass);

      clearActiveClass(serviceSliderPanels, activeServiceSliderPanelClass);
      serviceSliderPanels[i].classList.add(activeServiceSliderPanelClass);
    }
  }
});

/*Валидация формы*/
submitContactFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const countControl = contactFormControls.length;
  for (let i = 0; i < countControl; i++) {
    if (!contactFormControls[i].value) {
      contactModal.classList.add("modal__contact--error");
      contactForm.reportValidity();
      return;
    }
  }
  contactForm.submit();
});
