import { FormValidator } from './FormValidator.js'
import { Card } from './Card.js';

const enableValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__row',
    submitButtonSelector: '.popup__button_submit',
    inactiveButtonClass: 'popup__button_submit-inactive',
    inputErrorClass: 'popup__row_input-type_error',
    errorClass: 'popup__button-error_active',
};

// Профиль
const profileName = document.querySelector('.profile__title');
const profileStatus = document.querySelector('.profile__subtitle');
const jobInput = document.querySelector('.popup__row_data_profession');
const nameInput = document.querySelector('.popup__row_data_name');

//Редакт профиля
const popupRedactProfiles = document.querySelector('#redactProfiles');
const popupRedactOpenBtnProfile = document.querySelector('.profile__edit-button');

//Добавление картинки
const popupAddElement = document.querySelector('#addElement');
const popupAddButtonOpenElement = document.querySelector('.profile__add-button');

const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//Большая картинка 
const popupImage = document.querySelector('#image');
const popupImagePicture = popupImage.querySelector('.popup__image');
const popupImageText = popupImage.querySelector('.popup__text');
const popupImageClose = popupImage.querySelector('.popup__button_close');

//Функция закрытия попапа на крестик
const popups = document.querySelectorAll('.popup');

//Popup
const formEdit = popupRedactProfiles.querySelector('.popup__form');
const cardFormAdd = popupAddElement.querySelector('.popup__form');



// Заполнение формы карточек
const fieldCardName = document.querySelector('.popup__row_card_name');
const fieldCardProfession = document.querySelector('.popup__row_card_profession');

// Закрытия попапа на крестик 

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_open')) {
            closePopupForm(popup)
        }
        if (evt.target.classList.contains('popup__button_close')) {
            closePopupForm(popup)
        }
    })
});

// Заполнение профиля
formEdit.addEventListener('submit', (evt) => {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileStatus.textContent = jobInput.value;

    closePopupForm(popupRedactProfiles)
});

// Заполнение карточки
cardFormAdd.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const item = {
        name: fieldCardName.value,
        link: fieldCardProfession.value
    }

    const cardElement = createCard(item);
    elementList.prepend(cardElement);

    closePopupForm(popupAddElement);

    evt.target.reset();
});

//Карточки
const elementList = document.querySelector('.elements');
const elementTemplate = '.element-tamplate'

// Cоздания карточки

function createCard(cardData) {
    const card = new Card(cardData, elementTemplate);
    const cardElement = card.createCard();
    return cardElement
};

initialCards.forEach((item) => {
    const cardElement = createCard(item);
    elementList.prepend(cardElement);
});



// Функция открытия попапа
export function openPopup(popup) {
    popup.classList.add('popup_open');
    document.addEventListener('keydown', handleEscape);
};

// Функция закрытия попапа
function closePopupForm(popup) {
    popup.classList.remove('popup_open')
    document.removeEventListener('keydown', handleEscape);
};

// Функция закрытия попап Esc
function handleEscape(evt) {
    if (evt.key === 'Escape') {
        const openPopup = document.querySelector('.popup_open')
        closePopupForm(openPopup);
    }
};

// Валидация
const formValidatorEdit = new FormValidator(enableValidation, formEdit);
const cardFormValidatorAdd = new FormValidator(enableValidation, cardFormAdd);

formValidatorEdit.enableValidation();
cardFormValidatorAdd.enableValidation();

popupAddButtonOpenElement.addEventListener('click', () => {
    cardFormValidatorAdd.clearForm();
    openPopup(popupAddElement);
});

popupRedactOpenBtnProfile.addEventListener('click', () => {
    jobInput.value = profileStatus.textContent;
    nameInput.value = profileName.textContent;
    openPopup(popupRedactProfiles);
});