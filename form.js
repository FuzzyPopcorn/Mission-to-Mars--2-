class Form{
    constructor(){
        this.title = createElement('h1');
        this.input = createInput('Player Name');
        this.Greeting = createElement('h2');
        this.button = createButton("play");
        this.reset = createButton("resets")
    }

    display(){
        this.title.html("Mission to Mars");
        this.title.position(displayWidth/2,300);

        this.input.position(displayWidth/2,450);

this.reset.position(displayWidth-10, 40)

        this.button.position(displayWidth/2,500);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updatecount(playerCount);

            this.Greeting.html("Get Ready, " + player.name + "!");
            this.Greeting.position(displayWidth/2,450);
        })
          this.reset.mousePressed(()=>{
              game.update(0)
              player.updatecount(0)
              console.log("peanut")
          })  
        
    }

    hidden(){
        this.title.hide();
        this.button.hide();
        this.Greeting.hide();
        this.input.hide();
    }
    
}