
const map = document.querySelector('.info-contact__map');
const mapModal = document.querySelector('.modal__map');
const mapCloseBtn = document.querySelector('.modal-map__cross');

const writeUsBtn = document.querySelector('.info-contact__letter');
const formModal = document.querySelector('.modal__contact');
const formCloseBtn = document.querySelector('.modal-contact__cross');

/*Карта*/ 

map.addEventListener('click', () => {
  mapModal.classList.add('modal__map--show');
});

mapCloseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  mapModal.classList.remove('modal__map--show');
});

/*Форма обратной связи*/

writeUsBtn.addEventListener('click', (e) => {
  e.preventDefault();
  formModal.classList.add('modal__contact--show');
});

formCloseBtn.addEventListener('click', () => {
  formModal.classList.remove('modal__contact--show');
});