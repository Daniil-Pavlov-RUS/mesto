/* Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:
-)Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
-)Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
-)Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу. */

export default class UserInfo {
    constructor({ profileNameSelector, profileAboutSelector, profileAvatarSelector }) {
        this._profileNameElement = document.querySelector(profileNameSelector);
        this._profileAboutElement = document.querySelector(profileAboutSelector);
        this._profileAvatarElement = document.querySelector(profileAvatarSelector);
    }

    getUserInfo() {
        return {
            userName: this._profileNameElement.textContent,
            userAbout: this._profileAboutElement.textContent
        }
    }

    setUserInfo(userData) { //Если вставить setUserInfo( { name, about, avatar, _id } ) + закоментить и зменить в index.js, не работает
        const { userName, userAbout, userAvatar, userId } = userData;
        this._profileNameElement.textContent = userName;
        this._profileAboutElement.textContent = userAbout;
        this._profileAvatarElement.src = userAvatar;
        this._userId = userId;
    }

    changeUserInfo({ userName, userAbout }) {
        this._profileNameElement.textContent = userName;
        this._profileAboutElement.textContent = userAbout;
    }

    setUserAvatar({ newUserAvatar }) {
        this._profileAvatarElement.src = newUserAvatar;
    }

    getUserId() {
        return this._userId;
    }
}