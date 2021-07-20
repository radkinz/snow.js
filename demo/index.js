import * as Snow from './node_modules/snowfallz/snow.js'

window.onload = function () {
    //create new snow
    var snow = new Snow.default({
        id: 'snow',
        theme: 'colorful'
    });
    snow.snowfall();
}