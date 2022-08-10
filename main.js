(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._headers=r,this._baseUrl=n}var n,r;return n=t,(r=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("".concat(e.status," ").concat(e.statusText))}},{key:"getUserInfo",value:function(){var e=this._baseUrl+"/users/me";return fetch(e,{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){var e=this._baseUrl+"/cards";return fetch(e,{headers:this._headers}).then(this._checkResponse)}},{key:"getDataFromServer",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}},{key:"updateUserInfo",value:function(e){var t=this._baseUrl+"/users/me";return fetch(t,{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){var t=this._baseUrl+"/cards";return fetch(t,{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"removeCard",value:function(e){var t=this._baseUrl+"/cards/".concat(e);return fetch(t,{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addCardLike",value:function(e){var t=this._baseUrl+"/cards/likes/".concat(e);return fetch(t,{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteCardLike",value:function(e){var t=this._baseUrl+"/cards/likes/".concat(e);return fetch(t,{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"updateProfileAvatar",value:function(e){var t=this._baseUrl+"/users/me/avatar";return fetch(t,{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){var n=t.cardData,r=t.cardTemplateSelector,o=t.userId,i=t.handleCardClick,a=t.handleLikeButton,u=t.handleRemoveButton;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardNameData=n.name,this._cardLinkData=n.link,this._likes=n.likes,this._cardId=n._id,this._cardTemplateSelector=r,this._UserId=o,this._isUserCard=o===n.owner._id,this._handleCardClick=i,this._handleLikeButton=a,this._handleRemoveButton=u}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._cardElement=this._getTemplate(),this._cardTitleElement=this._cardElement.querySelector(".card__title"),this._cardTitleElement.textContent=this._cardNameData,this._cardImageElement=this._cardElement.querySelector(".card__image"),this._cardImageElement.src=this._cardLinkData,this._cardImageElement.alt="".concat(this._cardNameData,". Фотография"),this._cardDelButton=this._cardElement.querySelector(".card__del-button"),this._likeButtonElement=this._cardElement.querySelector(".card__like-button"),this._likesCounter=this._cardElement.querySelector(".card__likes-counter"),this._likesCounter.textContent=this._likes.length,this._setEventListeners(),this._toggleLikesCounter(),this._cardElement}},{key:"_setEventListeners",value:function(){var e=this;this._cardImageElement.addEventListener("click",(function(){e._handleCardClick(e._cardNameData,e._cardLinkData)})),this._likeButtonElement.addEventListener("click",(function(){e._handleLikeButton()})),this._isUserCard?this._cardDelButton.addEventListener("click",(function(t){e._handleRemoveButton(t)})):(this._cardDelButton.remove(),this._cardDelButton=null)}},{key:"_toggleLikesCounter",value:function(){this._checkUserLikes()?this.setLike():this.unsetLike()}},{key:"_checkUserLikes",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._UserId}))}},{key:"setLike",value:function(){this._likeButtonElement.classList.add("card__like-button_active"),this.isLiked=!0}},{key:"unsetLike",value:function(){this._likeButtonElement.classList.remove("card__like-button_active"),this.isLiked=!1}},{key:"updatelikesCounter",value:function(e){this._likesCounter.textContent=e.length}},{key:"getCardId",value:function(){return this._cardId}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_showInputError",(function(e,t){var n=e.closest(r._inputFieldSelector).querySelector(r._inputErrorMessageClass);e.classList.add(r._inputErrorUnderlineClass),n.textContent=t,n.classList.add(r._activeErrorClass)})),i(this,"_hideInputError",(function(e){var t=e.closest(r._inputFieldSelector).querySelector(r._inputErrorMessageClass);e.classList.remove(r._inputErrorUnderlineClass),t.classList.remove(r._activeErrorClass),t.textContent=""})),i(this,"_isValid",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),i(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),i(this,"toggleButtonState",(function(){r._hasInvalidInput()?(r._popupSubmitButtonElement.classList.add(r._inactiveSubmitButtonClass),r._popupSubmitButtonElement.setAttribute("disabled",!0)):(r._popupSubmitButtonElement.classList.remove(r._inactiveSubmitButtonClass),r._popupSubmitButtonElement.removeAttribute("disabled"))})),i(this,"_setEventListeners",(function(){r.toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._isValid(e),r.toggleButtonState()}))}))})),i(this,"enableValidation",(function(){r._setEventListeners()})),this._formElement=n,this._inputFieldSelector=t.inputFieldSelector,this._inputSelector=t.inputSelector,this._inputErrorMessageClass=t.inputErrorMessageClass,this._inputErrorUnderlineClass=t.inputErrorUnderlineClass,this._activeErrorClass=t.activeErrorClass,this._inactiveSubmitButtonClass=t.inactiveSubmitButtonClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._popupSubmitButtonElement=this._formElement.querySelector(t.popupSubmitButtonSelector)}var t,n;return t=e,(n=[{key:"resetValidation",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function h(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popupForm=n._popupElement.querySelector(".popup__input-list"),n._inputList=n._popupForm.querySelectorAll(".popup__input"),n._submitButtonElement=n._popupElement.querySelector(".popup__save-button"),n._handleFormSubmit=t,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;p(y(a.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"close",value:function(){p(y(a.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"renderLoading",value:function(e){this._submitButtonElement.textContent=!0===e?"Сохранение...":"Сохранить"}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImageElement=t._popupElement.querySelector(".popup__image"),t._popupImageСaptionElement=t._popupElement.querySelector(".popup__figcaption"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupImageСaptionElement.textContent=e,this._popupImageElement.src=t,this._popupImageElement.alt="".concat(e,". Фотография"),b(S(a.prototype),"open",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function P(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._formElement=t._popupElement.querySelector(".popup__input-list"),t}return t=a,(n=[{key:"updateSubmitHandler",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;O(B(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t,n){var r=n.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerElement=document.querySelector(t)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t.addItem(e)}))}},{key:"addItem",value:function(e){var t=this._renderer(e);this._containerElement.prepend(t)}},{key:"addItemAppend",value:function(e){this._containerElement.append(e)}},{key:"addItemPrepend",value:function(e){this._containerElement.prepend(e)}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){var n=t.profileNameSelector,r=t.profileAboutSelector,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileNameElement=document.querySelector(n),this._profileAboutElement=document.querySelector(r),this._profileAvatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._profileNameElement.textContent,userAbout:this._profileAboutElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.userName,n=e.userAbout,r=e.userAvatar,o=e.userId;this._profileNameElement.textContent=t,this._profileAboutElement.textContent=n,this._profileAvatarElement.src=r,this._userId=o}},{key:"changeUserInfo",value:function(e){var t=e.userName,n=e.userAbout;this._profileNameElement.textContent=t,this._profileAboutElement.textContent=n}},{key:"setUserAvatar",value:function(e){var t=e.newUserAvatar;this._profileAvatarElement.src=t}},{key:"getUserId",value:function(){return this._userId}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),D=".popup_type_profile",N=".popup_type_avatar",x=".popup_type_cards",V={inputFieldSelector:".popup__field",inputSelector:".popup__input",inputErrorMessageClass:".popup__input-error",inputErrorUnderlineClass:"popup__input_type_error",activeErrorClass:"popup__input-error_active",inactiveSubmitButtonClass:"popup__save-button_inactive",popupSubmitButtonSelector:".popup__save-button"};function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M=document.querySelector(".profile").querySelector(".profile__edit-button"),H=document.querySelector(".profile__add-button"),J=document.querySelector(".profile__avatar-edit-button"),z=document.querySelector(D),$=document.querySelector(x),G=document.querySelector(N),K=(z.querySelector("#name-input"),z.querySelector("#about-input"),new t({baseUrl:"https://mesto.nomoreparties.co/v1/".concat("cohort-46"),headers:{authorization:"7aaf8843-40c4-43f9-b9f5-60e0eb26ac4a","Content-Type":"application/json"}}));K.getDataFromServer().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];W.setUserInfo({userName:i.name,userAbout:i.about,userAvatar:i.avatar,userId:i._id}),Q.renderItems(o)})).catch((function(e){console.error(e)}));var Q=new A(".cards__list",{renderer:function(e){var t=new r({cardData:e,cardTemplateSelector:"#template",userId:W.getUserId(),handleCardClick:function(e,t){oe.open(e,t)},handleLikeButton:function(){t.isLiked?K.deleteCardLike(t.getCardId()).then((function(e){t.unsetLike(),t.updatelikesCounter(e.likes)})).catch((function(e){console.error(e)})):K.addCardLike(t.getCardId()).then((function(e){t.setLike(),t.updatelikesCounter(e.likes)})).catch((function(e){console.error(e)}))},handleRemoveButton:function(e){var n=e.target.closest(".card"),r=t.getCardId();re.open(),re.updateSubmitHandler((function(){K.removeCard(r).then((function(){n.remove(),re.close()})).catch((function(e){console.error(e)}))}))}});return t.generateCard()}}),W=new q({profileNameSelector:".profile__title",profileAboutSelector:".profile__subtitle",profileAvatarSelector:".profile__avatar"}),X=new _(N,(function(e){X.renderLoading(!0),K.updateProfileAvatar({avatar:e.url}).then((function(e){W.setUserAvatar({newUserAvatar:e.avatar}),X.close()})).catch((function(e){console.error(e)})).finally((function(){X.renderLoading(!1)}))}));X.setEventListeners();var Y=new a(V,G);Y.enableValidation(),J.addEventListener("click",(function(){Y.resetValidation(),X.open()}));var Z=new _(D,(function(e){Z.renderLoading(!0),K.updateUserInfo({name:e.userName,about:e.userAbout}).then((function(e){W.changeUserInfo({userName:e.name,userAbout:e.about}),Z.close()})).catch((function(e){console.error(e)})).finally((function(){Z.renderLoading(!1)}))}));Z.setEventListeners();var ee=new a(V,z);ee.enableValidation(),M.addEventListener("click",(function(){var e=W.getUserInfo();Z.setInputValues(e),ee.resetValidation(),Z.open()}));var te=new _(x,(function(e){te.renderLoading(!0),K.addNewCard(e).then((function(e){Q.addItem(e),te.close()})).catch((function(e){console.error(e)})).finally((function(){te.renderLoading(!1)}))}));te.setEventListeners();var ne=new a(V,$);ne.enableValidation(),H.addEventListener("click",(function(){ne.resetValidation(),te.open()}));var re=new R(".popup_type_confirm-deletion");re.setEventListeners();var oe=new w(".popup_type_image");oe.setEventListeners()})();