class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Lets collect fruits! :D');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("Fruits Collecting Championship");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'pink');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'magenta');
        this.reset.position(990, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'magenta');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+player.name+". Please wait for the more players to log in. ")
            this.greeting.position(100,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '30px');
        });

        this.reset.mousePressed(() => {
            //add code to reset the values of the gameState and the playerCount nodes to 0 in the database
            game.update(0)
            player.updateCount(0)
            database.ref('players').remove();

        });

    }
}