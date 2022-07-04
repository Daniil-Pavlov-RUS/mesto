export default class FormValidator {
    constructor(formSelectors, formElement) {
        this._formElement = formElement;
        this._inputFieldSelector = formSelectors.inputFieldSelector;
        this._inputSelector = formSelectors.inputSelector;
        this._inputErrorMessageClass = formSelectors.inputErrorMessageClass;
        this._inputErrorUnderlineClass = formSelectors.inputErrorUnderlineClass;
        this._activeErrorClass = formSelectors.activeErrorClass;
        this._inactiveSubmitButtonClass = formSelectors.inactiveSubmitButtonClass;
        this._inputElementsArr = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._popupSubmitButtonElement = this._formElement.querySelector(formSelectors.popupSubmitButtonSelector);
    }

    _showInputError = (inputElement, errorMessage) => {
        const errorElement = inputElement.closest(this._inputFieldSelector).querySelector(this._inputErrorMessageClass);
        inputElement.classList.add(this._inputErrorUnderlineClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._activeErrorClass);
    }

    _hideInputError = inputElement => {
        const errorElement = inputElement.closest(this._inputFieldSelector).querySelector(this._inputErrorMessageClass);
        inputElement.classList.remove(this._inputErrorUnderlineClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._activeErrorClass);
    }

    _isValid = inputElement => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _hasInvalidInput = () => {
        return this._inputElementsArr.some(inputElement => {
            return !inputElement.validity.valid;
        });
    }

    toggleButtonState = () => {
        if (this._hasInvalidInput()) {
            this._popupSubmitButtonElement.classList.add(this._inactiveSubmitButtonClass);
            this._popupSubmitButtonElement.setAttribute('disabled', true);
        } else {
            this._popupSubmitButtonElement.classList.remove(this._inactiveSubmitButtonClass);
            this._popupSubmitButtonElement.removeAttribute('disabled');
        }
    }

    _setEventListeners = () => {
        this.toggleButtonState();

        this._inputElementsArr.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this.toggleButtonState();
            });
        });
    }

    enableValidation = () => {
        this._setEventListeners();
    };
}