# snow.js
`Snow.js` is a stand alone javascript library that helps "cool down" the web with a beautiful snowfall. 

### Installation
`npm i snowfallzz -- save`

*The latest version of this npm package has not yet been updated to include the option to change snowflake or snowfall sizes*

### JS
The setup to run `snow.js` is fairly simple. You will have to create a new instance of `Snow`, and pass it an element id that you want to encapsulate the snowfall.

```html
<div id="snow"></div>

<script type="module">
//import the Snow module
import * as Snow from '/node_modules/snowfallzz/snow.js'

// Snow script included on the page, already.
window.onload = function () {
    var snow = new Snow.default({
        id: 'snow'
    });

    //Can run the snowfall by calling:
    snow.snowfall();
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

### Snowfall Size
Your default snowfall will encapsulate your entire website, but maybe that is too much snow? If you want your snowfall to be limited to a specific size, then you can pass a width and a height element....

```html
<script type = "module">
window.onload = function () {
    var snow = new Snow.default({
        id: 'snow',
        theme: 'colors',
        width: 500,
        height: 500
    });
}
</script>
```