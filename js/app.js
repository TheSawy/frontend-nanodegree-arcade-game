// Enemies our player must avoid
let Enemy = function (x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed * dt;
    if (this.x > 510) {
        this.x = -50;
        this.speed = 100 + Math.floor(Math.random() * 222);
    };

/*
* functioning the collision with enemy
*/

    if (player.x < this.x + 80 &&
        player.x + 80 > this.x &&
        player.y < this.y + 60 &&
        60 + player.y > this.y) {
        player.x = 202;
        player.y = 405;
    };
};



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
/*
* assign player variable
*/
let Player = function (x, y) {

    this.x = x;
    this.y = y;


    //The image of the player of char-girl is added to the playing field 
    this.player = 'images/char-boy.png';
};

Player.prototype.update = function (dt) {

};


Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

/*
* functioning player moves
*/

Player.prototype.handleInput = function (keyPress) {

    
    if (keyPress == 'left' && this.x > 0) {
        this.x -= 102;
    };


    if (keyPress == 'right' && this.x < 405) {
        this.x += 102;
    };

    
    if (keyPress == 'up' && this.y > 0) {
        this.y -= 83;
    };

    if (keyPress == 'down' && this.y < 405) {
        this.y += 83;
    };
/*
* as a player reach the water, bring him back the begining point
*/
    if (this.y < 0) {
        setTimeout(() => {
            this.x = 202;
            this.y = 405;
        }, 800);
    };
};

/*
* assigning the enemy locations
*/

let allEnemies = [];
// where the enemies will be
let placesY = [63, 147, 230];


/*
* functioning enemies speed 
*/

placesY.forEach(function (locationY) {
    bug = new Enemy(0, locationY, 100);
    allEnemies.push(bug);
});

let player = new Player(202,405);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
