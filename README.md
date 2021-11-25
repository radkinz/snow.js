# snow.js
`Snow.js` is a stand alone javascript library that helps "cool down" the web with a beautiful snowfall. 

### Installation
`npm install snowfall.js`

### JS
The setup to run `snow.js` is fairly simple. You will have to create a new instance of `Snow`, and pass it an element id that you want to encapsulate the snowfall.

```html
<div id="snow"></div>

<script type="module">
//import the Snow module
import * as Snow from '/node_modules/snowfall.js/snow.js'

// Snow script included on the page, already.
window.onload = function () {
    var snow = new Snow.default({
        id: 'snow'
    });

    //Can run the snowfall by calling:
    snow.start();
}
</script>
```

There are also optional elements that you can pass to customize the snowfall....

### Themes
The default theme displays the ordinary white snowflakes. However if you want something more bright then you can use the theme `colors`.

```html
<script type = "module">
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

### Snowflake Size
If you want to change the range of the snowflake sizes, then you can pass a min and max size element:

```html
<script type = "module">
window.onload = function () {
    var snow = new Snow.default({
        id: 'snow',
        theme: 'colors',
        min_size: 3,
        max_size: 300
    });
}
</script>
```
For reference the default range is a min size of 2 and a max size of 7.

### Toggle Snowfall

Maybe you do not want snowfall on your website 24/7? In that case, you can stop the snowfall with ``snow.stop()`` and you can toggle the snowfall with ``snow.toggle()``. 

The toggle feature can be good, for example, if you want the user to be able to switch back and forth between snow and no snow by a mouse click as seen with the code...

```html
<script type="module">
window.onload = function () {
    //create new snow
    var snow = new Snow.default({
        id: 'snow',
        theme: 'berry',
        min_size: 1,
        max_size: 5
    });
    snow.start();

    document.querySelector("body").onclick = function () {
        snow.toggle();
    }
}
</script>
```
