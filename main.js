(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._headers=r,this._baseUrl=n}var n,r;return n=t,(r=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("".concat(e.status," ").concat(e.statusText))}},{key:"getUserInfo",value:function(){var e=this._baseUrl+"/users/me";return fetch(e,{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){var e=this._baseUrl+"/cards";return fetch(e,{headers:this._headers}).then(this._checkResponse)}},{key:"getDataFromServer",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}},{key:"updateUserInfo",value:function(e){var t=this._baseUrl+"/users/me";return fetch(t,{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){var t=this._baseUrl+"/cards";return fetch(t,{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"removeCard",value:function(e){var t=this._baseUrl+"/cards/".concat(e);return fetch(t,{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addCardLike",value:function(e){var t=this._baseUrl+"/cards/likes/".concat(e);return fetch(t,{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteCardLike",value:function(e){var t=this._baseUrl+"/cards/likes/".concat(e);return fetch(t,{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"updateProfileAvatar",value:function(e){var t=this._baseUrl+"/users/me/avatar";return fetch(t,{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=r((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"_showInputError",(function(e,t){var n=e.closest(r._inputFieldSelector).querySelector(r._inputErrorMessageClass);e.classList.add(r._inputErrorUnderlineClass),n.textContent=t,n.classList.add(r._activeErrorClass)})),o(this,"_hideInputError",(function(e){var t=e.closest(r._inputFieldSelector).querySelector(r._inputErrorMessageClass);e.classList.remove(r._inputErrorUnderlineClass),t.textContent="",t.classList.remove(r._activeErrorClass)})),o(this,"_isValid",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),o(this,"_hasInvalidInput",(function(){return r._inputElementsArr.some((function(e){return!e.validity.valid}))})),o(this,"toggleButtonState",(function(){r._hasInvalidInput()?(r._popupSubmitButtonElement.classList.add(r._inactiveSubmitButtonClass),r._popupSubmitButtonElement.setAttribute("disabled",!0)):(r._popupSubmitButtonElement.classList.remove(r._inactiveSubmitButtonClass),r._popupSubmitButtonElement.removeAttribute("disabled"))})),o(this,"_setEventListeners",(function(){r.toggleButtonState(),r._inputElementsArr.forEach((function(e){e.addEventListener("input",(function(){r._isValid(e),r.toggleButtonState()}))}))})),o(this,"enableValidation",(function(){r._setEventListeners()})),this._formElement=n,this._inputFieldSelector=t.inputFieldSelector,this._inputSelector=t.inputSelector,this._inputErrorMessageClass=t.inputErrorMessageClass,this._inputErrorUnderlineClass=t.inputErrorUnderlineClass,this._activeErrorClass=t.activeErrorClass,this._inactiveSubmitButtonClass=t.inactiveSubmitButtonClass,this._inputElementsArr=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._popupSubmitButtonElement=this._formElement.querySelector(t.popupSubmitButtonSelector)}));function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._containerElement=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItemAppend",value:function(e){this._containerElement.append(e)}},{key:"addItemPrepend",value:function(e){this._containerElement.prepend(e)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){(t.target.classList.contains("popup_open")||t.target.classList.contains("popup__button-close"))&&e.close()}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function m(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function a(){var e;p(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return b(_(e=i.call.apply(i,[this].concat(n))),"_popupImageElement",e._popupElement.querySelector(".popup__image")),b(_(e),"_popupImageСaptionElement",e._popupElement.querySelector(".popup__text")),e}return t=a,(n=[{key:"open",value:function(e){this._popupImageСaptionElement.textContent=e.name,this._popupImageElement.src=e.link,this._popupImageElement.alt="".concat(e.name,". Фотография"),d(v(a.prototype),"open",this).call(this)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function O(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popupForm=n._popupElement.querySelector(".popup__form"),n._inputsList=n._popupForm.querySelectorAll(".popup__row"),n._submitButtonElement=n._popupElement.querySelector(".popup__button_submit"),n._handleFormSubmit=t,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputsList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;S(L(a.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){S(L(a.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"renderLoading",value:function(e){this._submitButtonElement.textContent=!0===e?"Сохранение...":"Сохранить"}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=R(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},A.apply(this,arguments)}function R(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function B(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._formElement=t._popupElement.querySelector(".popup__form"),t}return t=a,(n=[{key:"updateSubmitHandler",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;A(T(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t){var n=t.profileNameSelector,r=t.profileAboutSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileNameElement=document.querySelector(n),this._profileAboutElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._profileNameElement.textContent,userAbout:this._profileAboutElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.userName,n=e.userAbout;this._profileNameElement.textContent=t,this._profileAboutElement.textContent=n}},{key:"changeUserInfo",value:function(e){var t=e.userName,n=e.userAbout;this._profileNameElement.textContent=t,this._profileAboutElement.textContent=n}},{key:"setUserAvatar",value:function(e){var t=e.newUserAvatar;this._profileAvatarElement.src=t}},{key:"getUserId",value:function(){return this._userId}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardNameData=t.name,this._cardLinkData=t.link,this._cardTemplateSelector=n,this._handleCardClick=r}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._cardElement=this._getTemplate(),this._cardTitleElement=this._cardElement.querySelector(".element__title"),this._cardTitleElement.textContent=this._cardNameData,this._cardImageElement=this._cardElement.querySelector(".element__image"),this._cardImageElement.src=this._cardLinkData,this._cardImageElement.alt="".concat(this._cardNameData,". Фотография"),this._likeButtonElement=this._cardElement.querySelector(".element__button"),this._setEventListeners(),this._cardElement}},{key:"_setEventListeners",value:function(){var e=this;this._cardImageElement.addEventListener("click",(function(){e._handleCardClick()})),this._likeButtonElement.addEventListener("click",(function(){e._handleLikeButton()})),this._cardElement.querySelector(".element__button-del").addEventListener("click",(function(){e._removeCard()}))}},{key:"_handleLikeButton",value:function(){this._likeButtonElement.classList.toggle("element__button_action_active")}},{key:"_removeCard",value:function(){this._cardElement.remove(),this._cardElement=null}},{key:"_toggleLikesCounter",value:function(){this._checkUserLikes()?this.setLike():this.unsetLike()}},{key:"_checkUserLikes",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._UserId}))}},{key:"setLike",value:function(){this._likeButtonElement.classList.add("card__like-button_active"),this.isLiked=!0}},{key:"unsetLike",value:function(){this._likeButtonElement.classList.remove("card__like-button_active"),this.isLiked=!1}},{key:"updatelikesCounter",value:function(e){this._likesCounter.textContent=e.length}},{key:"getCardId",value:function(){return this._cardId}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),F=".popup_type_profile",M=".popup_type_avatar",H=".popup_add_cards",J={inputFieldSelector:".popup__field",inputSelector:".popup__row",inputErrorMessageClass:".popup__input-error",inputErrorUnderlineClass:"popup__button_type_error",activeErrorClass:"popup__input-error_active",inactiveSubmitButtonClass:"popup__button-submit_inactive",popupSubmitButtonSelector:".popup__button-submit"};function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $=document.querySelector(".profile").querySelector("."),G=document.querySelector(".profile__add-button"),K=document.querySelector(".profile__avatar-edit-button"),Q=document.querySelector(F),W=document.querySelector(H),X=document.querySelector(M),Y=(Q.querySelector("#name-input"),Q.querySelector("#profession-input"),new t({baseUrl:"https://mesto.nomoreparties.co/v1/".concat("cohort-46"),headers:{authorization:"7aaf8843-40c4-43f9-b9f5-60e0eb26ac4a","Content-Type":"application/json"}}));Y.getDataFromServer().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ee.setUserInfo({userName:i.name,userAbout:i.about,userAvatar:i.avatar,userId:i._id}),Z.renderItems(o)})).catch((function(e){console.error(e)}));var Z=new u(".elements",{renderer:function(e){var t=new V({cardData:e,cardTemplateSelector:"#template",userId:ee.getUserId(),handleCardClick:function(e,t){ce.open(e,t)},handleLikeButton:function(){t.isLiked?Y.deleteCardLike(t.getCardId()).then((function(e){t.unsetLike(),t.updatelikesCounter(e.likes)})).catch((function(e){console.error(e)})):Y.addCardLike(t.getCardId()).then((function(e){t.setLike(),t.updatelikesCounter(e.likes)})).catch((function(e){console.error(e)}))},handleRemoveButton:function(e){var n=e.target.closest(".element"),r=t.getCardId();ue.open(),ue.updateSubmitHandler((function(){Y.removeCard(r).then((function(){n.remove(),ue.close()})).catch((function(e){console.error(e)}))}))}});return t.generateCard()}}),ee=new N({profileNameSelector:".profile__title",profileAboutSelector:".profile__subtitle",profileAvatarSelector:".profile__image"}),te=new j(M,(function(e){te.renderLoading(!0),Y.updateProfileAvatar({avatar:e.url}).then((function(e){ee.setUserAvatar({newUserAvatar:e.avatar}),te.close()})).catch((function(e){console.error(e)})).finally((function(){te.renderLoading(!1)}))}));te.setEventListeners();var ne=new i(J,X);ne.enableValidation(),K.addEventListener("click",(function(){ne.resetValidation(),te.open()}));var re=new j(F,(function(e){re.renderLoading(!0),Y.updateUserInfo({name:e.userName,about:e.userAbout}).then((function(e){ee.changeUserInfo({userName:e.name,userAbout:e.about}),re.close()})).catch((function(e){console.error(e)})).finally((function(){re.renderLoading(!1)}))}));re.setEventListeners();var oe=new i(J,Q);oe.enableValidation(),$.addEventListener("click",(function(){var e=ee.getUserInfo();re.setInputValues(e),oe.resetValidation(),re.open()}));var ie=new j(H,(function(e){ie.renderLoading(!0),Y.addNewCard(e).then((function(e){Z.addItem(e),ie.close()})).catch((function(e){console.error(e)})).finally((function(){ie.renderLoading(!1)}))}));ie.setEventListeners();var ae=new i(J,W);ae.enableValidation(),G.addEventListener("click",(function(){ae.resetValidation(),ie.open()}));var ue=new q("popup_type_confirm-deletion");ue.setEventListeners();var ce=new E(".popup_type_photo");ce.setEventListeners()})();