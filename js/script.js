window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    const playButton = document.getElementById("play-button");
    const broomSwitch = document.getElementById("broom");
    const goBackLink = document.getElementById("go-back");
    const myGame = new Game();
  
    startButton.addEventListener("click", function () {
      setCharacter();
    });

    function setCharacter() {
      console.log("set character");
      myGame.charSetup();
    };

    broomSwitch.addEventListener("click", function () {
      myGame.player.selectBroom();
    });

    playButton.addEventListener("click", function () {
      startGame();
    });
  
    function startGame() {
      console.log("start game");
      myGame.start();
    }

    function handleKeydown(event) {
      const key = event.key;
      const possibleKeystrokes = [
        "ArrowLeft",
        "ArrowUp",
        "ArrowRight",
        "ArrowDown",
      ];
  
      if (possibleKeystrokes.includes(key)) {
        event.preventDefault();
  
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = -1;
            break;
          case "ArrowUp":
            game.player.directionY = -1;
            break;
          case "ArrowRight":
            game.player.directionX = 1;
            break;
          case "ArrowDown":
            game.player.directionY = 1;
            break;
        }
      }
    }

    window.addEventListener("keydown", handleKeydown);

    restartButton.addEventListener("click", function () {
      restartGame();
    });

    function restartGame() {
      location.reload();
    }

    goBackLink.addEventListener("click", function () {
      restartGame();
    });

    

  };