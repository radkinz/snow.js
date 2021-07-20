import * as Snow from './node_modules/snowfallzz/snow.js'

window.onload = function () {
    //create new snow
    var snow = new Snow.default({
        id: 'snow',
        theme: 'colors'
    });
    snow.snowfall();
}