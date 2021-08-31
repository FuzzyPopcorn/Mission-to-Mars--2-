class Game{
    constructor(){

    }
    getState(){
        var gameStateref = database.ref("gameState")
        gameStateref.on("value", (data)=>{
            gameState = data.val();
        }
        )
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }

    start(){
        if (gameState === 0){
            form = new Form();
            form.display();
            player = new Player();
            player.getCount()
            
        }

        Rocket1 = createSprite(500,600);
        Rocket1.addAnimation("nofires", rocket1Img)
        Rocket1.addAnimation("fires", rocket1fireImg)
        Rocket1.scale = 0.9

        Rocket2 = createSprite(650,600);
        Rocket2.addAnimation("nofire", rocket2Img)
        Rocket2.addAnimation("fire", rocket2fireImg)
        Rocket2.scale = 1.2

        Rockets = [Rocket1, Rocket2]

    }

    play(){
        
    form.hidden();
    Player.getPlayerInfo()

    //if players are there
    if(allPlayers !== undefined){
    //background(bgImg)
    image(bgImg, 0, -1500, displayWidth-50, displayHeight*3.5)
    var index = 0;

    var x = 150
    var y;

    for(var plr in allPlayers){
        index = index+1

        x = x + 400
        y = displayHeight - allPlayers[plr].distance
        Rockets[index-1].x = x
        Rockets[index-1].y = y
        if(index === player.index){
        fill("blue")
        ellipse(x,y,70, 70)
        camera.position.x = displayWidth/2
        camera.position.y = Rockets[index-1].y
        }

        
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance = player.distance + 15;
        player.update();
        console.log("sprinker")
        Rocket1.changeAnimation("fires", rocket1fireImg)
        Rocket2.changeAnimation("fire", rocket2fireImg)
    }
    if (World.frameCount % 100 == 0) {
     var num = Math.round(random(1,2))

     if(num === 1){
         this.spawnMeteor();
     }
     else{
        this.spawnSatellite();
     }
    }
    
    if(player.distance > 2050){
        gameState = 2
    }

    }

    
    drawSprites()

    }
    spawnMeteor(){
        meteor = createSprite(Math.round(random(50, 500), -10, 10, 10)) 
        meteor.addAnimation("falling", meteorImg)
        meteor.scale = 0.2
        meteor.velocityY= 3
    }
    spawnSatellite(){
        satellite = createSprite(Math.round(random(50, 500),-10, 10, 10))
        satellite.addAnimation("fall", satelliteImg)
        satellite.scale = 0.5
        satellite.velocityY= 3
    }
  

    
    end(){
        console.log("ending")
    }
}