// Сергей, добрый день! У меня при сужении стили все подвязываются. Непойму сути ошибки. Взаранее благодарен!

import { openPopup } from './index.js';

const popupImage = document.querySelector('.popup_type_photo');
const popupImagePicture = popupImage.querySelector('.popup__image');
const popupImageText = popupImage.querySelector('.popup__text');

export class Card {
    constructor(item, elementTemplate) {
        this._name = item.name;
        this._link = item.link;
        this._cardSelector = elementTemplate;
    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    //Действия с карточками
    _getCard() {
        this._cardElement = this._getTemplate();

        this._cardImage = this._cardElement.querySelector('.element__image');
        this._cardText = this._cardElement.querySelector('.element__title');
        this._deleteBtn = this._cardElement.querySelector('.element__button-del');
        this._likeBtn = this._cardElement.querySelector('.element__button');

    }

    createCard() {
        this._getCard();
        this._cardImage.src = this._link;
        this._cardText.textContent = this._name;
        this._cardImage.alt = this._name;

        this._setEventListeners();

        return this._cardElement;
    }

    _setEventListeners() {
        this._likeBtn.addEventListener('click', () => { this._likeCard() });
        this._deleteBtn.addEventListener('click', () => { this._deleteCard() });

        // Открытие картинки по клику
        this._cardImage.addEventListener('click', () => {
            popupImagePicture.src = this._link
            popupImageText.textContent = this._name
            popupImagePicture.alt = this._name
            openPopup(popupImage)
        });
    }

    // Лайк
    _likeCard() {
        this._likeBtn.classList.toggle('element__button_action_active')
    };

    // Удаление карточки
    _deleteCard() {
        this._cardElement.remove();
    };
}