import './index.css';

import { initialCards } from '../utils/initialCards.js';

import FormValidator from '../script/FormValidator.js';
import Section from '../script/Section.js';
import PopupWithImage from '../script/PopupWithImage.js';
import PopupWithForm from '../script/PopupWithForm.js';
import UserInfo from '../script/UserInfo.js';
import Card from '../script/Card.js';

import {
    profileEditButtonSelector,
    cardAddButtonSelector,
    profileSelector,
    profileNameSelector,
    profileAboutSelector,
    cardsContainerSelector,
    popupProfileSelector,
    popupProfileNameSelector,
    popupProfileProfessionSelector,
    popupCardSelector,
    popupImageSelector,
    cardTemplateSelector,
    formSelectors
} from '../utils/constants.js';

const profileElement = document.querySelector(profileSelector);
const profileEditButtonElement = profileElement.querySelector(profileEditButtonSelector);

const popupProfileFormElement = document.querySelector(popupProfileSelector);
const popupCardFormElement = document.querySelector(popupCardSelector);

const popupProfileNameElement = popupProfileFormElement.querySelector(popupProfileNameSelector);
const popupProfileAboutElement = popupProfileFormElement.querySelector(popupProfileProfessionSelector);

const popupWithImage = new PopupWithImage(popupImageSelector);
popupWithImage.setEventListeners();

function createCard(cardData) {
    const newCard = new Card(cardData, cardTemplateSelector, () => { popupWithImage.open(cardData) });
    return newCard.generateCard();
};

const renderCards = new Section({
        items: initialCards,
        renderer: (cardData) => {
            const card = createCard(cardData);
            renderCards.addItemAppend(card);
        }
    },
    cardsContainerSelector);

renderCards.renderItems();

const userInfo = new UserInfo({ profileNameSelector, profileAboutSelector });

const popupWithProfileForm = new PopupWithForm(popupProfileSelector, (formData) => {
    userInfo.setUserInfo({ userName: formData.userName, userAbout: formData.userAbout });
    popupWithProfileForm.close();
});

popupWithProfileForm.setEventListeners();

profileEditButtonElement.addEventListener('click', () => {
    const userData = userInfo.getUserInfo();
    popupProfileNameElement.value = userData.userName;
    popupProfileAboutElement.value = userData.userAbout;
    popupWithProfileForm.open();
});

const popupWithCardForm = new PopupWithForm(popupCardSelector, (formData) => {
    const card = createCard({ name: formData.name, link: formData.link });
    renderCards.addItemPrepend(card);
    popupWithCardForm.close();
});

popupWithCardForm.setEventListeners();

document.querySelector(cardAddButtonSelector).addEventListener('click', () => {
    newCardValidation.toggleButtonState();
    popupWithCardForm.open();
});

const profileValidation = new FormValidator(formSelectors, popupProfileFormElement);
const newCardValidation = new FormValidator(formSelectors, popupCardFormElement);
profileValidation.enableValidation();
newCardValidation.enableValidation();