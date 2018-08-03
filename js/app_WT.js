// Enemies our player must avoid

const Enemy = function(x, y, rate) {
    this.x = x;
    this.y = y;
    this.rate = 100;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.this.x += this.rate * dt; // speed of bug
        
        // Via Andrew Hartley - Facebook
        if (this.x > 510) { // if bug goes off screen to the right...
            this.x = -100; // ...move bug back to off screen left...
            this.rate = 150 + Math.random() * 200; // new speed
        }
        this.x += this.rate * dt; // speed of bug
            
        if (this.x > 510) { // if bug goes off screen to the right...
            this.x = -100; // ...move bug back to off screen left...
            this.rate = 150 + Math.random() * 200; // new speed
        }

    /*  
        // From Walkthrough Code
        this.x =+ this.speed * dt; 
    
        if (this.x > 510) {
            this.x = -50; 
            this.speed = 100 + Math.floor(Math.random() * 222);
        }    
    */        
        if (player.x < this.x + 80 &&
            player.x + 80 > this.x &&
            player.y < this.y + 60 &&
            60 + player.y > this.y) {
                player.x = 202;
                player.y = 405; 
        }                 
};  

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Hero {
    constructor() {
    this.x = 202;
    this.y = 405; 
    this.sprite = 'images/char-cat-girl.png'; 
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    }
    handleInput(keyPress) {
        if (keyPress == 'left' && this.x > 0) {
            this.x -= 102;
        }
        if (keyPress == 'right' && this.x < 405) {
            this.x += 102; 
        }
        if (keyPress == 'up' && this.y > 0) {
            this.y -= 83; 
        }
        if (keyPress == 'down' && this.y < 405) {
            this.y += 83;
        }
        if (this.y < 0) {
            setTimeout(function () {
                player.x = 202;
                player.y = 405; 
            }, 600);
    
        }
    }
}



// Player.prototype.update = function (dt) {

// }

// Player.prototype.render = function () {
    // ctx.drawImage(Resources.get(this.player), this.x, this.y);
// }

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [];
let enemyLocation = [63, 147, 230];

enemyLocation.forEach(function (locationY) {
    enemy = new Enemy(0, locationY, 200);
    allEnemies.push(enemy); 
});

const player = new Hero(); 



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
