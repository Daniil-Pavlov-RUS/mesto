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
        this._popupForm = this._popupElement.querySelector('.popup__form');
        this._inputsList = this._popupForm.querySelectorAll('.popup__row');
        this._submitButtonElement = this._popupElement.querySelector('.popup__button_submit');
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
        this._formValues = {};
        this._inputsList.forEach(input => {
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

    close() {
        super.close();
        this._popupForm.reset(); // сбросить значения полей формы.
    }
}