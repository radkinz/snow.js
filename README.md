# snow.js
`Snow.js` is a stand alone javascript library that helps "cool down" the web with a beautiful snowfall. 

### Installation
`npm i snowfallz -- save`

### JS
The setup to run `snow.js` is fairly simple. You will have to create a new instance of `Snow`, and pass it an element id that you want to encapsulate the snowfall.

```html
<div id="snow"></div>

<script>
//import the Snow module
import * as Snow from './node_modules/snowfallz/snow.js'

// Snow script included on the page, already.
window.onload = function () {
    var snow = new Snow.default({
        id: 'snow'
    });
}

//Can run the snowfall by calling:
snow.snowfall();
</script>
```

There are also optional elements that you can pass to customize the snowfall....

### Themes
The default theme displays the ordinary white snowflakes. However if you want something more bright then you can use the theme `colors`.

```html
<script>
window.onload = function () {
    var snow = new Snow.default({
        id: 'snow',
        theme: 'colors'
    });
}
</script>
```

If blue is your favorite color, you can use the theme `blues`!

There are also the themes: `berry`, `pastel`, and `purple` to help your snowfall be a little more unique.


