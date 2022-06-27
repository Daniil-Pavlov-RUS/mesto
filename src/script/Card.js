/* Свяжите класс Card c попапом. Сделайте так, чтобы Card принимал в конструктор функцию handleCardClick. Эта функция должна открывать попап с картинкой при клике на карточку. */

export default class Card {
    constructor(cardData, cardTemplateSelector, handleCardClick) {
        this._cardNameData = cardData.name;
        this._cardLinkData = cardData.link;
        this._cardTemplateSelector = cardTemplateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        return document
            .querySelector(this._cardTemplateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
    }

    generateCard() {
        this._cardElement = this._getTemplate();

        this._cardTitleElement = this._cardElement.querySelector('.element__title');
        this._cardTitleElement.textContent = this._cardNameData;

        this._cardImageElement = this._cardElement.querySelector('.element__image');
        this._cardImageElement.src = this._cardLinkData;
        this._cardImageElement.alt = `${this._cardNameData}. Фотография`;

        this._likeButtonElement = this._cardElement.querySelector('.element__button');

        this._setEventListeners();

        return this._cardElement;
    }

    _setEventListeners() {

        this._cardImageElement.addEventListener('click', () => {
            this._handleCardClick();
        });

        this._likeButtonElement.addEventListener('click', () => {
            this._handleLikeButton();
        });

        this._cardElement.querySelector('.element__button-del').addEventListener('click', () => {
            this._removeCard();
        });
    }

    _handleLikeButton() {
        this._likeButtonElement.classList.toggle('element__button_action_active');
    }

    _removeCard() {
        this._cardElement.remove();
        this._cardElement = null;
    }

}