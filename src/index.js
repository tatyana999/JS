/* ДЗ 6.1 - Асинхронность и работа с сетью */

/**
 * Функция должна создавать Promise, который должен быть resolved через seconds секунду после создания
 *
 * @param {number} seconds - количество секунд, через которое Promise должен быть resolved
 * @return {Promise}
 */
function delayPromise(seconds) {

    var delay = seconds*1000;

    return new Promise(function(resolve) {
        setTimeout(resolve, delay);
    });

}

/**
 * Функция должна вернуть Promise, который должен быть разрешен массивом городов, загруженным из
 * https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 * Элементы полученного массива должны быть отсортированы по имени города
 *
 * @return {Promise<Array<{name: String}>>}
 */
function loadAndSortTowns() {
    var url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';

    return new Promise(function(resolve) {

        var xhr = new XMLHttpRequest();

        xhr. open ('GET', url);
        xhr.responseType = 'json';
        xhr.send();
        xhr.addEventListener('load', function() {
            var result = xhr.response;

            function compare(a, b) {
                if (a.name >= b.name) {

                    return 1;
                }
                if (a.name < b.name) {

                    return -1;
                }
                return 0;
            }
            result = result.sort(compare);
            resolve(result);
        });
    });
}

export {
    delayPromise,
    loadAndSortTowns
};
