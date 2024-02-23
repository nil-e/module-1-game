class Obstacle extends Component {
  constructor(gameScreen) {
    super(
      gameScreen,
      Math.floor(Math.random() * (window.screen.width - 300) + 170),
      0,
      100,
      150,
      "./assets/deathEater.png"
    );
  }

  move() {
    this.top += 3;
    this.updatePosition();
  }
}

class Gem extends Component {
  constructor(gameScreen) {
    super(
      gameScreen,
      Math.floor(Math.random() * (window.screen.width - 190) + 170),
      0,
      100,
      150,
      "./assets/gem.png"
    );
  }

  move() {
    this.top += 3;
    this.updatePosition();
  }
}

class Snitch extends Component {
  constructor(gameScreen) {
    super(
      gameScreen,
      Math.floor(Math.random() * (window.screen.width - 250) + 180),
      0,
      100,
      150,
      "./assets/snitch.png"
    );
  }

  move() {
    this.top += 12;
    this.updatePosition();
  }
}
