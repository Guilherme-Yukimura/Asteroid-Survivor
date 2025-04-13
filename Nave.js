class Nave extends Entity
{   constructor(x, y,width, height, img)
    {   super(x,y,width,height, img);

        this.bullets = [];
        this.life = 5;
        this.score = 0;
        this.speed = 1/FPS * 650;
        this.countframe = 0;
        this.countframe2 = 0;
        this.sprite = 1;
        this.img.src = "nave1.png";
    }


    draw () {

        if(!menuint == 1) {
        context.save();
        var angle = Math.atan2(mouse.y - (this.y + this.height / 2), mouse.x - (this.x + this.width / 2)) + Math.PI / 2;
        context.translate(this.x + this.width / 2, this.y + this.height / 2);
        context.rotate(angle);
        context.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);
        context.restore();
        } else {
            context.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }
    update()
    {

        if(keys[65])
        {   this.x-=this.speed;
        }
        if(keys[68])
        {   this.x+=this.speed;
        }
        if(keys[87])
        {   this.y-=this.speed;
        }
        if(keys[83])
        {   this.y+=this.speed;
        }
        if(keys[69] || click == true)
        {   this.fire();
        }


        for(let i1 = 0; i1 < this.bullets.length; i1++)
        {
                this.bullets[i1].update();
                this.bullets[i1].draw();

                for (let i2 = 0; i2 < meteors.objects.length; i2++) {
                    
                    if (this.bullets[i1]) {
                    if (this.bullets[i1].collide(meteors.objects[i2]) || this.bullets[i1].y + this.bullets[i1].height < 0 || this.bullets[i1].y > canvas.height || this.bullets[i1].x > canvas.width || this.bullets[i1].x + this.bullets[i1].width < 0) {

                        if (this.bullets[i1].collide(meteors.objects[i2])) {

                            meteors.objects[i2].reMake();
                        }
                        this.bullets.splice(i1, 1);
                        nave.score += 20;
                    }
                }
                }
            }
        
    

        this.x = Math.max(0, Math.min(this.x, canvas.width - this.width));
        this.y = Math.max(0, Math.min(this.y, canvas.height - this.height));
        
        this.countframe++;
        this.countframe2++;
        if (this.countframe > FPS + 1) {
        this.countframe = FPS + 1;
        }

        if (this.countframe2 > FPS * 0.1) {
            
            this.sprite ++;
            if (this.sprite > 5) {

                this.sprite = 1;
            }
            this.img.src = "nave" + this.sprite +".png";
            this.countframe2 = 0;
        }

    }

    fire()
    {
        if (this.countframe > FPS * 0.5)  {
        this.bullets.push(new ProjectileNave(this.x+this.width/2, this.y + this.height/2, 10, 20));
        this.bullets[this.bullets.length - 1].rotate();
        this.countframe = 0;
        }
    }
}