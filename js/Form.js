class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton("Reset");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 110, 0);
    this.title.class("titleText");

    this.input.position(displayWidth/2 - 60 , displayHeight/2 - 80);
    this.input.class("customInput");

    this.button.position(displayWidth/2 -50, displayHeight/2);
    this.button.class("customButton");


    this.reset.position(displayWidth-250,50);
    this.reset.class("customButton");


    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Olá " + player.name)
      this.greeting.position(displayWidth/2 - 60, displayHeight/3);
      this.greeting.class("greeting");
    });

    this.reset.mousePressed(() =>{
      player.updateCount(0);
      game.update(0);

      database.ref("/").set({
        playerCount: 0,
        gameState: 0,
        CarsAtEnd: 0
    
      });

      window.location.reload();
    })
  }
}
