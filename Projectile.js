class Projectile extends Entity
{   constructor(x, y, width, height)
    {   super(x-width/2,y,width,height,"");
    }
    draw()
    {   context.save();
        context.translate(this.x + this.width / 2, this.y + this.height / 2);
        context.rotate(this.angle);

        context.fillStyle = this.color;
        context.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);

        context.lineWidth = 1;
        context.strokeStyle = "white";
        context.strokeRect(-this.width / 2, -this.height / 2, this.width, this.height);
        
        context.restore();

        
    }
}

class ProjectileNave extends Projectile{
    constructor(x,y,width,height)
    {   super(x,y,width,height);
        this.color = "purple";
        this.angle = 0;

    }

    rotate() {
        this.angle = Math.atan2(mouse.y - (this.y + this.height / 2), mouse.x - (this.x + this.width / 2)) + Math.PI / 2;
    }
    update()
    {   this.x += Math.cos(this.angle - Math.PI/2) * 1/FPS * 850;
        this.y += Math.sin(this.angle - Math.PI/2) * 1/FPS * 650;
    }
}