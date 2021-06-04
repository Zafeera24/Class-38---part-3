class Game {
  constructor() {

  }

  getState() {
    var start = database.ref("gameState")
    start.on("value", (data) => {
      gameState = data.val()
    })


  }

  updateState(state) {
    database.ref("/").update({
      gameState: state
    })
  }

  async startState() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }
    car1 = createSprite(100,200);
    car1.addImage("car1 Image",car1Img);

    car2 = createSprite(300,200);
    car2.addImage("car2 Image",car2Img);

    car3 = createSprite(600,200);
    car3.addImage("car3 Image",car3Img);

    car4 = createSprite(900,200);
    car4.addImage("car4 Image",car4Img);

    car=[car1 ,car2, car3, car4]
    
    

  }


  //  function clouds(){

  // }  clouds()
  playState() {
    form.hide();
    textSize(25);
    text("Start Game ", 100, 100);
    Player.getPlayerInput();
    player.carRank()
    if (allplayers !== undefined) {
    //  var pos = 120
    // Index of Array
    background(ground);
    image(track,0,-displayHeight*4,displayWidth, displayHeight*5)
    var index = 0;
    // X and Y position of Car
    var x = 200;
    var y;
    //  range(0,9)  for i in range
     for (var i in allplayers) {
      // Increase the index of the car array by 1
     index = index + 1;
    x = x + 200
    y = displayHeight - allplayers[i].distance
    car [index - 1].x = x
    car[index -1].y = y
    if(index === player.index){
      stroke("purple");
      fill("pink");
      ellipse(x,y,60,60)
    car[index - 1].shapeColor = "red"
      camera.position.x = displayWidth / 2;
      camera.position.y = car[index-1].y

      textSize(30)
      //text(pl[n].name+ ":" +p.d,x,y)
      //player[1].name= zafeera
      textAlign(CENTER)
      text(allplayers[i].name+ ":"+ allplayers[i].distance ,car[index-1].x ,car[index-1].y+75)
    }else{
     car[index - 1].shapeColor = "white"
    }
       }
    }
    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance += 50;
      player.updatename();
    }
    if(player.distance > 300){
      gameState = 2
      player.rank+=1;
      Player.updatecarsRank(player.rank)
    
    }
    drawSprites();
  }

endState(){
 console.log("game end")
 console.log(player.rank)
}

}
