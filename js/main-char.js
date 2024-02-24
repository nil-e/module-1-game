class Player extends Component {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    super(gameScreen, left, top, width, height, imgSrc);
    this.directionX = 0;
    this.directionY = 0;
  }

  move() {
    this.left += this.directionX * 5;
    this.top += this.directionY * 5;

    if (this.left < 10) {
      this.left = 10;
    }
    if (this.top < 10) {
      this.top = 10;
    }

    if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
      this.left = this.gameScreen.offsetWidth - this.width - 10;
    }

    if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    }
    this.updatePosition();
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }

  didCatch(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }

  selectBroom() {
    let charBroom = document.getElementById("broom");
    let currentBroom = charBroom.getAttribute("src");
    let brooms = [
      "./assets/broom1.png",
      "./assets/broom2.svg",
      "./assets/broom3.png",
      "./assets/broom4.png",
      "./assets/broom5.png",
    ];
    let i = brooms.indexOf(currentBroom);
    let newValue;
    if (i === brooms.length - 1) {
      newValue = brooms[0];
    } else if (i < brooms.length - 1) {
      newValue = brooms[i + 1];
    }
    charBroom.setAttribute("src", newValue);
    let gameBroom = document.getElementById(currentBroom);
    gameBroom.setAttribute("src", newValue);
    gameBroom.setAttribute("id", newValue);
  }
}
