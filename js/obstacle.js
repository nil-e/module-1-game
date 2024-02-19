class Obstacle extends Component {
  constructor(gameScreen) {
    super(
      gameScreen,
      Math.floor(Math.random() * 300 + 70),
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
      Math.floor(Math.random() * 300 + 70),
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
      Math.floor(Math.random() * 300 + 70),
      0,
      100,
      150,
      "./assets/snitch.svg"
    );
  }

  move() {
    this.top += 3;
    this.updatePosition();
  }
}

class Potion extends Component {
  constructor(gameScreen) {
    super(
      gameScreen,
      Math.floor(Math.random() * 300 + 70),
      0,
      100,
      150,
      "./assets/potion.svg"
    );
  }

  move() {
    this.top += 3;
    this.updatePosition();
  }
}