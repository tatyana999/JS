/* ДЗ 7.1 - BOM */

/**
 * Функция должна создавать окно с указанным именем и размерами
 *
 * @param {number} name - имя окна
 * @param {number} width - ширина окна
 * @param {number} height - высота окна
 * @return {Window}
 */
function createWindow(name, width, height) {
    var NewWin = window.open( 'name', 'width = 200,height = 200');

    return NewWin;
}
/**
 * Функция должна закрывать указанное окно
 *
 * @param {Window} window - окно, размер которого надо изменить
 */
function closeWindow(window) {
    var NewWin = window.open( 'name', 'width = 200,height = 200');

    NewWin.close();
}

/**
 * Функция должна создавать cookie с указанными именем и значением
 *
 * @param name - имя
 * @param value - значение
 */
function createCookie(name, value) {

    document.cookie = name + "=" + value;
}

/**
 * Функция должна удалять cookie с указанным именем
 *
 * @param name - имя
 */
function deleteCookie(name) {
    var date = new Date();
    date.setTime(date.getTime() - 1);
    document.cookie = name += "=; expires=" + date.toGMTString();

}

export {
    createWindow,
    closeWindow,
    createCookie,
    deleteCookie
};
