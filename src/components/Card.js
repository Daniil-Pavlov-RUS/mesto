/* Свяжите класс Card c попапом. Сделайте так, чтобы Card принимал в конструктор функцию handleCardClick. Эта функция должна открывать попап с картинкой при клике на карточку. */

export default class Card {
    constructor({ cardData, cardTemplateSelector, userId, handleCardClick, handleLikeButton, handleRemoveButton }) {
        this._cardNameData = cardData.name;
        this._cardLinkData = cardData.link;
        this._likes = cardData.likes;
        this._cardId = cardData._id;
        this._cardTemplateSelector = cardTemplateSelector;
        this._UserId = userId,
            this._isUserCard = userId === cardData.owner._id;
        this._handleCardClick = handleCardClick;
        this._handleLikeButton = handleLikeButton;
        this._handleRemoveButton = handleRemoveButton;
    }

    _getTemplate() {
        return document
            .querySelector(this._cardTemplateSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
    }

    generateCard() {
        this._cardElement = this._getTemplate();

        this._cardTitleElement = this._cardElement.querySelector('.card__title');
        this._cardTitleElement.textContent = this._cardNameData;
        this._cardImageElement = this._cardElement.querySelector('.card__image');
        this._cardImageElement.src = this._cardLinkData;
        this._cardImageElement.alt = `${this._cardNameData}. Фотография`;
        this._cardDelButton = this._cardElement.querySelector('.card__del-button');
        this._likeButtonElement = this._cardElement.querySelector('.card__like-button');
        this._likesCounter = this._cardElement.querySelector('.card__likes-counter');
        this._likesCounter.textContent = this._likes.length;
        this._setEventListeners();
        this._toggleLikesCounter();


        return this._cardElement;
    }

    _setEventListeners() {
        this._cardImageElement.addEventListener('click', () => {
            this._handleCardClick(this._cardNameData, this._cardLinkData);
        });
        this._likeButtonElement.addEventListener('click', () => {
            this._handleLikeButton();
        });
        if (!this._isUserCard) {
            this._cardDelButton.remove();
            this._cardDelButton = null;
        } else {
            this._cardElement.addEventListener('click', (event) => {
                this._handleRemoveButton(event);
            });
        }
    }

    _toggleLikesCounter() {
        if (this._checkUserLikes()) {
            this.setLike();
        } else {
            this.unsetLike();
        };
    }

    _checkUserLikes() {
        return this._likes.some(item => item._id === this._UserId);
    }

    setLike() {
        this._likeButtonElement.classList.add('card__like-button_active');
        this.isLiked = true;
    }

    unsetLike() {
        this._likeButtonElement.classList.remove('card__like-button_active');
        this.isLiked = false;
    }

    updatelikesCounter(data) {
        this._likesCounter.textContent = data.length;
    }

    getCardId() {
        return this._cardId;
    }

}