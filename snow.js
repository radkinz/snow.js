var Snow = function (options) {
    document.getElementById(options.id).style.position = "fixed";
    document.getElementById(options.id).style.top = 0;
    document.getElementById(options.id).style.left = 0;
    document.getElementById(options.id).style.right = 0;
    document.getElementById(options.id).style.bottom = 0;
    document.getElementById(options.id).style.zIndex = 1000;
    document.getElementById(options.id).style.pointerEvents = "none";

    //create canvas
    this.canvas = document.createElement("canvas"); //add random number to change canvas id
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    document.getElementById(options.id).appendChild(this.canvas);

    //get theme
    var theme = "default"
    if (options.theme == "colors" || options.theme == "blues" || options.theme == "watermelon" || options.theme == "berry" || options.theme == "pastel") {
        theme = options.theme;
    }

    //change size
    var min = 2;
    var max = 7;
    if (!isNaN(options.min_size)) {
        min = options.min_size;
    }
    if (!isNaN(options.max_size)) {
        max = options.max_size;
    }

    //snowflake list
    this.snowflakes = []
    for (let i = 0; i < 250; i++) {
        this.snowflakes[i] = new Snowflake(this.canvas, theme, min, max);
        this.snowflakes[i].show();
    }

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    //boolean is snow is true or false
    this.go = false;
    this.snowfall = function () {
        requestAnimationFrame(() => this.snowfall());

        if (this.go) {
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

    this.snowfall();

    this.start = function () {
        this.go = true;
    }

    this.stop = function () {
        this.go = false;
    }

    this.toggle = function () {
        console.log(this.go);
        this.go = !this.go;
    }
}

//snowflakes to use in snow
var Snowflake = function (canvas, theme, min, max) {
    //snowflake elements
    this.radius = random(min, max);
    this.x = random(0, canvas.width);
    this.y = random(-20, -800);
    this.Vy = random(1, 2)
    console.log(this.canvas)

    //set default
    this.color = "#FFF"

    //apply theme
    if (theme == "colors") {
        this.color =
            "rgb(" +
            Math.floor(Math.random() * 256) +
            "," +
            Math.floor(Math.random() * 256) +
            "," +
            Math.floor(Math.random() * 256) +
            ")";
    } else if (theme == "blues") {
        this.color =
            "rgb(" +
            0 +
            "," +
            0 +
            "," +
            Math.floor(Math.random() * 256) +
            ")";
    } else if (theme == "watermelon") {
        if (Math.random() < 0.5) {
            this.color =
                "rgb(" +
                random(242, 255) +
                "," +
                random(0, 50) +
                "," +
                random(70, 120) +
                ")";
        } else {
            this.color =
                "rgb(" +
                0 +
                "," +
                Math.floor(Math.random() * 256) +
                "," +
                0 +
                ")";
        }
    } else if (theme == "berry") {
        this.color =
            "rgb(" +
            random(40, 150) +
            "," +
            random(0, 50) +
            "," +
            random(80, 180) +
            ")";
    } else if (theme == "pastel") {
        this.color =
            "hsla(" +
            random(0, 360) +
            "," +
            random(40, 80) +
            "%," +
            random(60, 80) +
            "%)";
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