class Entity
{   constructor(x,y,width,height,img)
    {   this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = new Image;
        this.img.src = img;
    }
    draw()
    {   
         //context.strokeStyle = "green"
         //context.strokeRect(this.x, this.y,this.width,this.height)
        
        context.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    collide(entity)
    {   return (entity.x + entity.width >= this.x &&     
                entity.x <= this.x + this.width &&       
                this.y + this.height >= entity.y &&       
                this.y <= entity.y + entity.height);
    }
}