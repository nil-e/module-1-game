const gameFrame = Math.round(1000 / 60);
const gameHeight = 900;
const gameWidth = "100vw";

class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.charSetupScreen = document.getElementById("char-setup");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.charBroomElement = document.getElementById("broom");
    this.charBroom = this.charBroomElement.getAttribute("src");
    this.gamePlay = document.getElementById("game-play");
    this.player = new Player(
      this.gameScreen,
      200,
      500,
      150,
      200,
      this.charBroom
    );
    this.height = gameHeight;
    this.width = gameWidth;
    this.obstacles = [];
    this.Gems = [];
    // this.Snitch = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrecuency = gameFrame;
  }

  charSetup() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.charSetupScreen.style.display = "block";
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.charSetupScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gamePlay.style.display = "block";
    this.gameScreen.appendChild(document.getElementById("score-lives"));
    let nickname = document.getElementById("username").value;
    this.element = document.createElement("h2");
    this.element.innerHTML = nickname;
    this.element.id = "nickname";
    this.gameScreen.appendChild(this.element);    

    let houseOptions = document.querySelectorAll("input[name='house']");
    let houseValue;
    let findSelected = () => {
        let selected = document.querySelector("input[name='house']:checked").value;
        return selected;
      };
    houseValue = findSelected();
    this.houseLogo = document.createElement("img");
    this.houseText = document.createElement("h2");
    this.houseLogo.src = `./assets/${houseValue}.svg`;
    this.houseLogo.id = "houseLogo";
    this.houseText.innerHTML = houseValue;
    this.houseText.id = "houseText";
    this.gameScreen.appendChild(this.houseText); 
    this.gameScreen.appendChild(this.houseLogo); 
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrecuency);
    setTimeout(() => {
      if(!this.gameIsOver) {
      this.endGame();
    }
    }, 60000);
  }

  gameLoop() {
    console.log("in the game loop");
    this.update();
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }
  
  update() {
    this.player.move();
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();
//*here i do obstacles*/
      if (this.player.didCollide(obstacle)) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.lives--;
        document.getElementById("lives").innerText = this.lives.toString();
        i--;
      } else if (obstacle.top > this.height) {
        obstacle.element.remove();
        this.score++;
        document.getElementById("score").innerText = this.score.toString();
        this.obstacles.splice(i, 1);
        i--;
      }
      console.log("update initiated");
    }
//*here i do gems*/
    for (let i = 0; i < this.Gems.length; i++) {
      const Gem = this.Gems[i];
      Gem.move();

      if (this.player.didCollide(Gem)) {
        Gem.element.remove();
        this.Gems.splice(i, 1);
        this.score += 10;
        document.getElementById("score").innerText = this.score.toString();
        i--;
      }
      else if (Gem.top > this.height) {
        Gem.element.remove();
        this.Gems.splice(i, 1);
        i--;
      }
      console.log("update initiated");
    }

//*here i do snitch*/
// if(this.Snitch.length === 0)
// {
//   new Snitch(this.gameScreen)
//   Snitch.move();

//   if (this.player.didCollide(Snitch)) {
//     Snitch.element.remove();
//     this.score += 200;
//     document.getElementById("score").innerText = this.score.toString();
//   }
//   else if (Snitch.top > this.height) {
//     Snitch.element.remove();
//   }
// }

    if (this.lives === 0) {
      this.endGame();
    }
    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
    if (Math.random() > 0.97 && this.Gems.length < 1) {
      this.Gems.push(new Gem(this.gameScreen));
    }
  }

  endGame() {
    this.obstacles.forEach((obstacle) => obstacle.element.remove());
    this.player.element.remove();
    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
    let finalScore = Number(document.getElementById("score").innerText);
    finalScore += Number(document.getElementById("lives").innerText)*50;
    this.displayScore = document.createElement("h2");
    let houseName = document.getElementById("houseText").innerText;
    if (finalScore === 0) {
      this.displayScore.innerHTML = `You brought shame to ${houseName}! Try harder next time!`;
    }
    else if (finalScore > 0) {
      this.displayScore.innerHTML = `${finalScore} points to ${houseName}! Great job!`;
    }
    this.displayScore.id = "displayScore";
    this.gameEndScreen.appendChild(this.displayScore);
  }
}
