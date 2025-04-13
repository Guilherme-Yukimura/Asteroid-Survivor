class Meteors {

    constructor(MeteorsMax)
    {
        this.objects = [];
        this.MeteorsMax = MeteorsMax;

        let size = canvas.width/14;
        for (let i = 0; i < this.MeteorsMax; i++) {

        this.objects.push(new meteor(Math.random()*canvas.width - size / 2, 0 - (size * 6 * Math.random()) - size, size + Math.random() * 70, size + Math.random() * 70));
    }
}

    update() {

        for (let i = 0; i < this.objects.length; i++) {
            this.objects[i].update();

            if (this.objects[i].collide(nave)) {
                

                this.objects[i].reMake();
                nave.life --;
                //console.log("Vida atual: " + nave.life);

                //this.objects[i].morreu();
            }
        }
    }

    draw() {
        for (let i = 0; i < this.objects.length; i++) {
            this.objects[i].draw();
        }
    }

    resize() {

        let size = canvas.width/14;
        for (let i = 0; i < this.objects.length; i++) {
            this.objects[i].width = size + Math.random() * 70;
            this.objects[i].height = size + Math.random() * 70;
        }
    }

}


class meteor extends Entity {

    constructor(x,y,width,height)
    {
        super(x, y, width, height, "meteorito" + Math.floor(Math.random() * 4) +".png");
        this.speed = 1/FPS * 450;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 3;
    }

    draw() {
        context.save();
        context.translate(this.x + this.width / 2, this.y + this.height / 2);
        context.rotate(this.rotation * Math.PI / 180);
        context.drawImage(this.img, - this.width/2, - this.height/2, this.width, this.height); //context.drawImage(this.image, -this.width / 2, -this.height / 2, this.width, this.height);
        context.restore();
    }

    update()
    {
        let size = canvas.width/14;
        if(this.x >= canvas.width) {
            this.x = Math.random()*canvas.width - this.width / 2;

        }

        if(this.y > canvas.height) {

            this.y = 0 - (size * 6 * Math.random()) - size;
            this.x = Math.random()*canvas.width - this.width / 2;
        }

        this.speed += this.speed * 0.06 * 1 / FPS; // + 5% de velocidade a cada 1 segundo,
        this.y += this.speed;                      // assim fica com uma aceleração interessante

        this.rotation += this.rotationSpeed;
        if (this.rotation >= 360) this.rotation -= 360;

    }

    reMake() {

        let size = canvas.width/14;
        this.y = 0 - (size * 6 * Math.random()) - size;
        this.x = Math.random()*canvas.width - this.width / 2;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 3;
        this.width = size + Math.random() * 70;
        this.height = size + Math.random() * 70;
        this.img.src = "meteorito" + Math.floor(Math.random() * 4) +".png";
    }
}