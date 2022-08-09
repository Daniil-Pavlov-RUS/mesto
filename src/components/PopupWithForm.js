/* Создайте класс PopupWithForm, который наследует от Popup. Этот класс:
-)Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
-)Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
-)Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
-)Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
Для каждого попапа создавайте свой экземпляр класса PopupWithForm. */

import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._popupForm = this._popupElement.querySelector('.popup__input-list');
        this._inputList = this._popupForm.querySelectorAll('.popup__input');
        this._submitButtonElement = this._popupElement.querySelector('.popup__save-button');
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }

    setInputValues(data) {
        this._inputList.forEach((input) => {
            input.value = data[input.name];
        });
    }

    close() {
        super.close();
        this._popupForm.reset();
    }

    renderLoading(isLoading) {
        if (isLoading === true) {
            this._submitButtonElement.textContent = 'Сохранение...';
        } else {
            this._submitButtonElement.textContent = 'Сохранить';
        }
    }
}