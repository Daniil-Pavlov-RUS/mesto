/* Создайте класс Section, который отвечает за отрисовку элементов на странице. Этот класс:
-)Первым параметром конструктора принимает объект с двумя свойствами: items и renderer. Свойство items — это массив данных, которые нужно добавить на страницу при инициализации класса. Свойство renderer — это функция, которая отвечает за создание и отрисовку данных на странице.
-)Второй параметр конструктора — селектор контейнера, в который нужно добавлять созданные элементы.
-)Содержит публичный метод, который отвечает за отрисовку всех элементов. Отрисовка каждого отдельного элемента должна осуществляться функцией renderer.
-)Cодержит публичный метод addItem, который принимает DOM-элемент и добавляет его в контейнер.
У класса Section нет своей разметки. Он получает разметку через функцию-колбэк и вставляет её в контейнер. */

export default class Section {
    constructor(containerSelector, { renderer }) {
        this._renderer = renderer;
        this._containerElement = document.querySelector(containerSelector);
    }

    renderItems(initialCards) {
        initialCards.forEach(item => {
            this.addItem(item);
        });
    }

    addItem(item) {
        const card = this._renderer(item);
        this._containerElement.prepend(card);
    }

    addItemAppend(item) {
        this._containerElement.append(item);
    }

    // addItemPrepend(item) {
    //     this._containerElement.prepend(item);
    // }
}