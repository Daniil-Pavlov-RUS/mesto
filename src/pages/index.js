import './index.css';

import { token, cohort } from '../utils/authorizationData.js'

import Api from '../components/Api.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

import {
    profileEditButtonSelector,
    cardAddButtonSelector,
    avatarEditButtonSelector,
    profileSelector,
    profileNameSelector,
    profileAboutSelector,
    profileAvatarSelector,
    cardsContainerSelector,
    popupProfileSelector,
    popupProfileNameSelector,
    popupProfileAboutSelector,
    popupAvatarSelector,
    popupCardSelector,
    popupConfirmationSelector,
    popupImageSelector,
    cardTemplateSelector,
    formSelectors
} from '../utils/constants.js';

const profileElement = document.querySelector(profileSelector);
const profileEditButtonElement = profileElement.querySelector(profileEditButtonSelector);
const cardAddButtonElement = document.querySelector(cardAddButtonSelector);
const avatarEditButtonElement = document.querySelector(avatarEditButtonSelector);

const popupProfileFormElement = document.querySelector(popupProfileSelector);
const popupCardFormElement = document.querySelector(popupCardSelector);
const popupAvatarFormElement = document.querySelector(popupAvatarSelector);

const popupProfileNameElement = popupProfileFormElement.querySelector(popupProfileNameSelector);
const popupProfileAboutElement = popupProfileFormElement.querySelector(popupProfileAboutSelector);

const api = new Api({
    baseUrl: `https://mesto.nomoreparties.co/v1/${cohort}`,
    headers: {
        authorization: token,
        'Content-Type': 'application/json'
    }
});

api.getDataFromServer().then((responses) => {
    const [initialCards, userData] = responses;
    userInfo.setUserInfo({ userName: userData.name, userAbout: userData.about, userAvatar: userData.avatar, userId: userData._id });
    renderCards.renderItems(initialCards);
}).catch((err) => {
    console.error(err);
});

const renderCards = new Section(
    cardsContainerSelector, {
        renderer: (cardData) => {
            const newCard = new Card({
                cardData: cardData,
                cardTemplateSelector: cardTemplateSelector,
                userId: userInfo.getUserId(),
                handleCardClick: (name, link) => {
                    popupWithImage.open(name, link);
                },
                handleLikeButton: () => {
                    if (newCard.isLiked) {
                        api.deleteCardLike(newCard.getCardId()).then((cardData) => {
                            newCard.unsetLike();
                            newCard.updatelikesCounter(cardData.likes);
                        }).catch((err) => {
                            console.error(err);
                        });
                    } else {
                        api.addCardLike(newCard.getCardId()).then((cardData) => {
                            newCard.setLike();
                            newCard.updatelikesCounter(cardData.likes);
                        }).catch((err) => {
                            console.error(err);
                        });
                    }
                },
                handleRemoveButton: (event) => {
                    const cardElement = event.target.closest('.card');
                    const cardId = newCard.getCardId();
                    popupWithConfirmation.open();
                    popupWithConfirmation.updateSubmitHandler(() => {
                        api.removeCard(cardId).then(() => {
                            cardElement.remove();
                            popupWithConfirmation.close();
                        }).catch((err) => {
                            console.error(err);
                        });
                    });
                }
            });
            return newCard.generateCard();
        }
    });

const userInfo = new UserInfo({ profileNameSelector, profileAboutSelector, profileAvatarSelector });

const popupUpdateAvatar = new PopupWithForm(popupAvatarSelector, (formData) => {
    popupUpdateAvatar.renderLoading(true);
    api.updateProfileAvatar({ avatar: formData.url }).then((data) => {
        userInfo.setUserAvatar({ newUserAvatar: data.avatar });
        popupUpdateAvatar.close();
    }).catch((err) => {
        console.error(err);
    }).finally(() => {
        popupUpdateAvatar.renderLoading(false);
    });
});

popupUpdateAvatar.setEventListeners();

const avatarValidation = new FormValidator(formSelectors, popupAvatarFormElement);
avatarValidation.enableValidation();

avatarEditButtonElement.addEventListener('click', () => {
    avatarValidation.resetValidation();
    popupUpdateAvatar.open();
});

const popupWithProfileForm = new PopupWithForm(popupProfileSelector, (formData) => {
    popupWithProfileForm.renderLoading(true);
    api.updateUserInfo({ name: formData.userName, about: formData.userAbout }).then((data) => {
        userInfo.changeUserInfo({ userName: data.name, userAbout: data.about });
        popupWithProfileForm.close();
    }).catch((err) => {
        console.error(err);
    }).finally(() => {
        popupWithProfileForm.renderLoading(false);
    });
});

popupWithProfileForm.setEventListeners();

const profileValidation = new FormValidator(formSelectors, popupProfileFormElement);
profileValidation.enableValidation();

profileEditButtonElement.addEventListener('click', () => {
    const userData = userInfo.getUserInfo();
    popupWithProfileForm.setInputValues(userData);
    profileValidation.resetValidation();
    popupWithProfileForm.open();
});

const popupWithCardForm = new PopupWithForm(popupCardSelector, (formData) => {
    popupWithCardForm.renderLoading(true);
    api.addNewCard(formData).then((formData) => {
        renderCards.addItem(formData);
        popupWithCardForm.close();
    }).catch((err) => {
        console.error(err);
    }).finally(() => {
        popupWithCardForm.renderLoading(false);
    });
});

popupWithCardForm.setEventListeners();

const newCardValidation = new FormValidator(formSelectors, popupCardFormElement);
newCardValidation.enableValidation();

cardAddButtonElement.addEventListener('click', () => {
    newCardValidation.resetValidation();
    popupWithCardForm.open();
});

const popupWithConfirmation = new PopupWithConfirmation(popupConfirmationSelector);
popupWithConfirmation.setEventListeners();

const popupWithImage = new PopupWithImage(popupImageSelector);
popupWithImage.setEventListeners();