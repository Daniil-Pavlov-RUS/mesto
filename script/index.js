// Профиль
const profileName = document.querySelector('.profile__title');
const profileStatus = document.querySelector('.profile__subtitle');
// Редакт профиля
const popupRedactProfiles = document.querySelector('#redactProfiles');
const popupRedactOpenBtnProfile = document.querySelector('.profile__edit-button');
const popupRedactCloseBtnProfile = popupRedactProfiles.querySelector('.popup__button_close');
const popupRedactSubmitBtnForm = popupRedactProfiles.querySelector('#redactForm');

//Функция открытие попапа
function openPopupForm(popup) {
    popup.classList.add('popup_open')
    document.addEventListener('keydown', closePopupFormEscape);
};

//Функция закрытия попапа
function closePopupForm(popup) {
    popup.classList.remove('popup_open')
    document.addEventListener('keydown', closePopupFormEscape);
};

//Функция закрытия попапа на крестик
const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_open')) {
            closePopupForm(popup)
        }
        if (evt.target.classList.contains('popup__button_close')) {
            closePopupForm(popup)
        }
        if (evt.target === openPopupForm) {
            closePopupForm(popup);
        }
    })
});

//Функция закрытия попапа по клавише ESC
function closePopupFormEscape(evt) {
    if (evt.key === 'Escape') {
        const openPopup = document.querySelector('.popup_open');
        closePopupForm(openPopup);
    }
};

//Функция добавление картинки
function renderElement(element) {
    elementContainer.prepend(element)
};

// Картинки
const elementContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-tamplate').content;
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

//Добавление картинки
const popupAddElement = document.querySelector('#addElement');
const popupAddButtonOpenElement = document.querySelector('.profile__add-button');
const popupAddButtonCloseElement = popupAddElement.querySelector('.popup__button_close');
const popupAddSubmitElement = popupAddElement.querySelector('#addForm');

//Начальные картинки
initialCards.reverse().forEach(elem => renderElement(createElement(elem.name, elem.link)));

//Функция добавления карточек(element)
function createElement(name, link) {
    const element = elementTemplate.cloneNode(true);

    element.querySelector('.element__title').textContent = name
    element.querySelector('.element__image').src = link
    element.querySelector('.element__image').alt = `фото ${name}`

    element.querySelector('.element__button').addEventListener('click', likeClick);
    element.querySelector('.element__button-del').addEventListener('click', delElement);
    element.querySelector('.element__image').addEventListener('click', () => {
        openPopupForm(popupImage), takeImagePopup()
    });
    return element
};

// Функция Лайк
function likeClick(event) {
    event.target.classList.toggle('element__button_action_active');
};

//Функция Удаления карточки
function delElement(event) {
    event.target.closest('.element').remove();
};

//Функция очистки полей попапа
function cleanBoxPopup(selector) {
    selector.reset();
}

//Большая картинка 
const popupImage = document.querySelector('#image');
const popupImagePicture = popupImage.querySelector('.popup__image');
const popupImageText = popupImage.querySelector('.popup__text');
const popupImageClose = popupImage.querySelector('.popup__button_close');

//Перенос в попап с изображением
function takeImagePopup() {
    const text = event.target.closest('.element').querySelector('.element__title').textContent
    popupImagePicture.src = event.target.src
    popupImagePicture.alt = `фото ${text}`
    popupImageText.textContent = text
};

//Функция переноса из профиля в попап
function transferEditPopup(selector) {
    selector.profileName.value = profileName.textContent;
    selector.profileStatus.value = profileStatus.textContent;
};

//Функция переноса из попапа в профиль
function transferPopupProfile(selector) {
    profileName.textContent = selector.profileName.value
    profileStatus.textContent = selector.profileStatus.value
};

//"Слушаем"
popupImageClose.addEventListener('click', () => closePopupForm(popupImage));

popupRedactOpenBtnProfile.addEventListener('click', () => {
    openPopupForm(popupRedactProfiles), transferEditPopup(popupRedactSubmitBtnForm)
});
popupRedactCloseBtnProfile.addEventListener('click', () => closePopupForm(popupRedactProfiles));
popupRedactSubmitBtnForm.addEventListener('submit', () => {
    event.preventDefault();
    transferPopupProfile(popupRedactSubmitBtnForm);
    closePopupForm(popupRedactProfiles);
});

popupAddButtonOpenElement.addEventListener('click', () => { openPopupForm(popupAddElement), cleanBoxPopup(popupAddSubmitElement) });
popupAddButtonCloseElement.addEventListener('click', () => closePopupForm(popupAddElement));
popupAddSubmitElement.addEventListener('submit', () => {
    event.preventDefault();
    renderElement(createElement(popupAddSubmitElement.placeName.value, popupAddSubmitElement.placeLink.value));
    closePopupForm(popupAddElement);
});