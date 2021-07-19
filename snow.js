//snow class
class Snowflake {
    constructor(canvas) {
        this.radius = this.random(2, 7);
        this.x = this.random(0, canvas.width);
        this.y = this.random(-20, -800);
        this.Vy = this.random(1, 2)
        this.color =
            "rgb(" +
            Math.floor(Math.random() * 256) +
            "," +
            Math.floor(Math.random() * 256) +
            "," +
            Math.floor(Math.random() * 256) +
            ")";
        this.canvas = canvas;
    }

    show() {
        var ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.y += this.Vy;
    }

    random(min, max) {
        return Math.random() * (max - min) + min;
    }
}

var Snow = function () {
    //create canvas
    this.canvas = document.createElement("CANVAS");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    document.getElementById('snow').appendChild(this.canvas);

    //snowflake list
    this.snowflakes = []
    for (let i = 0; i < 250; i++) {
        this.snowflakes[i] = new Snowflake(this.canvas);
        this.snowflakes[i].show();
    }

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    this.snowfall = function () {
        requestAnimationFrame(()=>this.snowfall());

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