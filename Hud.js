class Hud 
{   constructor()
    {   this.scoreImg = new Image;
        this.scoreImg.src = "score.png";

        this.lifeImg = new Image;
        this.lifeImg.src = "nave1.png";
    }

    draw()
    {   context.font = "bold 50px sans-serif";
        context.fillStyle = "cyan";
        context.textBaseline = "middle";
        context.textAlign = 'left';
        context.fillText(nave.life,50,50);

        context.drawImage(this.lifeImg,0,30,32,32);
        
        context.fillStyle = "purple";
        context.fillText(nave.score,50,100);

        context.drawImage(this.scoreImg,0,80,32,32);
    }
}