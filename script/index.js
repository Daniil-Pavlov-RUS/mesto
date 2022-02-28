const popup = document.querySelector('.popup');
const popupName = document.querySelector('.popup__row_data_name');
const popupStatus = document.querySelector('.popup__row_data_profession');
const profileName = document.querySelector('.profile__title');
const profileStatus = document.querySelector('.profile__subtitle');
const popupOpenBtn = document.querySelector('.profile__edit-button');

//Открываем попап
const openPopupForm = function() {
    popup.classList.add('popup_open');
    popupName.value = profileName.textContent;
    popupStatus.value = profileStatus.textContent;
};

//"слушаем"
popupOpenBtn.addEventListener('click', openPopupForm);

const popupCloseBtn = document.querySelector('.popup__button_close');

//Закрываем попап
const closePopupForm = function() {
    popup.classList.toggle('popup_open');
};

//"слушаем"
popupCloseBtn.addEventListener('click', closePopupForm);

const popupSubmitForm = popup.querySelector('.popup__form');

//Сохраняем форму
const submitForm = function(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileStatus.textContent = popupStatus.value;
    closePopupForm();
};

//"слушаем"
popupSubmitForm.addEventListener('submit', submitForm);