class Star {
    constructor(x, y, size) {
        this.x = x-size/2;
        this.y = y-size/2;
        this.size = size;
        this.speed = this.size/2 * 1/FPS * 70;
    }

    draw() {
        context.fillStyle = "white";
        context.fillRect(this.x, this.y, this.size, this.size);
    }

    update() {
        this.y += this.speed;
        this.draw();
        if(this.y > canvas.height) {
            this.x = Math.floor(Math.random()*(canvas.width));
            this.y = 0-this.size;
        }    
    }
}

class Stars {
    constructor(maxStars) {
        this.stars = [];
        this.maxStars = maxStars;
        for(var i=0; i<this.maxStars; i++) {
            var starSize = Math.floor(Math.random() * 10) + 1;
            this.stars.push(new Star(Math.floor(Math.random()*(canvas.width)), Math.floor(Math.random()*(canvas.height)), starSize));
        }
    }

    update() {
        for(var i=0; i<this.stars.length; i++) {
            this.stars[i].update();
        }
    }    
}