import * as Snow from '/demo/node_modules/snowfallz/snow.js'

window.onload = function () {
    console.log(Snow.default)
    //create new snow
    var snow = new Snow.default({
        id: 'snow'
    });
    snow.snowfall();
}