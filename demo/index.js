import * as Snow from './node_modules/snowfallzz/snow.js'

window.onload = function () {
    //create new snow
    var snow = new Snow.default({
        id: 'snow',
        theme: 'colors',
        min_size: 1,
        max_size: 5
    });
    snow.snowfall();
}