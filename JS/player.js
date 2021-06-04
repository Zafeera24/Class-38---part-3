class Player {
    constructor(){
        // 1,2,3,4 
        this.index=null;
        this.name=null;
        this.distance=0;
        this.rank = 0;
    }
// geting the playerCount information from firebase
    getCount(){
    var referee=database.ref("playerCount")
    referee.on("value",(data)=>{
     playerCount=data.val()
    })

    }

// this function updating playerCount to my firebase
    updateCount(count){
      database.ref("/").update({
       playerCount:count
      })
    }

// update name of the player
  updatename(){     
      // player1, player2
        var playerindex= "players/player"+this.index
        database.ref(playerindex).set({
        name:this.name,
        distance: this.distance,
        Rank: this.rank
        })
    }
    
   static getPlayerInput(){
          var info = database.ref("players")
          info.on("value" ,(data)=>{
          allplayers = data.val()
          })
    }
      
    carRank(){
        database.ref("Cars").on("value",(data)=>{
            // its string data.val() inside the variable called this.rank
         this.rank=data.val()
        })
    }
    
    static updatecarsRank(rank){
        // "/" means root of the data, update(), its json {,,,}
      database.ref("/").update({
       Cars:rank
      })
 
    }


}