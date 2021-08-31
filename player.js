class Player{
    constructor(){
this.name = null,
this.distance = 0,
this.lives = 2,
this.index = null
    }

    getCount(){
        var gameStateref = database.ref("playerCount")
        gameStateref.on("value", (data)=>{
            playerCount = data.val();
        }
        )
    }

    updatecount(count){
        database.ref('/').update({
            playerCount: count
        })
    }

    update(){   
        var playerindex = "players/player" + this.index
        database.ref(playerindex).set({
            name:this.name,
            distance: this.distance,
            lives: this.lives
        })
    }

    static getPlayerInfo(){
        var getPlayerRef = database.ref("players")
        getPlayerRef.on("value", (data) =>{
            allPlayers = data.val();
        })

    }

}