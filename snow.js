var Snow = function (options) {
    //change style of given element to make full screen div
    document.getElementById(options.id).style.position = "fixed";
    document.getElementById(options.id).style.top = 0;
    document.getElementById(options.id).style.left = 0;
    document.getElementById(options.id).style.right = 0;
    document.getElementById(options.id).style.bottom = 0;
    document.getElementById(options.id).style.zIndex = 1000;
    document.getElementById(options.id).style.pointerEvents = "none";

    //create canvas
    this.canvas = document.createElement("CANVAS");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    document.getElementById(options.id).appendChild(this.canvas);

    //get theme
    var theme = "default"
    if (options.theme == "colorful") {
        theme = "colorful"
    }

    //snowflake list
    this.snowflakes = []
    for (let i = 0; i < 250; i++) {
        this.snowflakes[i] = new Snowflake(this.canvas, theme);
        this.snowflakes[i].show();
    }

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    this.snowfall = function () {
        requestAnimationFrame(() => this.snowfall());

        //clear canvas
        const context = this.canvas.getContext('2d');
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        //update snowflakes
        for (var i = 0; i < 250; i++) {
            this.snowflakes[i].update();
            this.snowflakes[i].show();

            if (this.snowflakes[i].y > this.canvas.height) {
                this.snowflakes[i].y = random(-20, -200);
            }
        }
    }
}

//snowflakes to use in snow
var Snowflake = function (canvas, theme) {
    //snowflake elements
    this.radius = random(2, 7);
    this.x = random(0, canvas.width);
    this.y = random(-20, -800);
    this.Vy = random(1, 2)

    //set default
    this.color = "#FFF"

    //apply theme
    if (theme == "colorful") {
        this.color =
            "rgb(" +
            Math.floor(Math.random() * 256) +
            "," +
            Math.floor(Math.random() * 256) +
            "," +
            Math.floor(Math.random() * 256) +
            ")";
    }
    this.canvas = canvas;

    this.show = function () {
        var ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    this.update = function () {
        this.y += this.Vy;
    }

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }
}

export default Snow;