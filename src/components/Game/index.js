import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

import Results from "../Results";
import paperImage from "../../images/paper.png";
import rockImage from "../../images/rock.png";
import scissorsImage from "../../images/scissors.png";
import "../../App.css";

function Game(props) {
  const { setStep } = props;
  const [selections] = useState(["rock", "paper", "scissors"]);
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [winner, setWinner] = useState("");

  useEffect(() => {
    if (playerChoice !== "" && computerChoice !== "") {
      compareChoices();
    }
  }, [playerChoice, computerChoice]);

  function handlePlayerChoice(choice) {
    setPlayerChoice(choice);

    handleComputerChoice();
  }

  function handleComputerChoice() {
    const choice = selections[Math.floor(Math.random() * selections.length)];

    setComputerChoice(choice);
  }

  function compareChoices() {
    if (playerChoice === computerChoice) {
      setWinner("draw");
      return;
    }

    if (
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      setWinner("player");
      let playerScore = parseInt(localStorage.getItem("playerScore") || 0);
      localStorage.setItem("playerScore", (playerScore + 1).toString());
    } else {
      setWinner("computer");
      let computerScore = parseInt(localStorage.getItem("computerScore") || 0);
      localStorage.setItem("computerScore", (computerScore + 1).toString());
    }
  }

  return (
    <>
      {winner === "" ? (
        <div className="game">
          <h2>Fais ton choix !</h2>
          <div className="game-choices-images">
            <img
              src={rockImage}
              alt="Pierre"
              title="Pierre"
              className="game-choice-image"
              onClick={() => handlePlayerChoice("rock")}
            />
            <img
              src={paperImage}
              alt="Feuille"
              title="Feuille"
              className="game-choice-image"
              onClick={() => handlePlayerChoice("paper")}
            />
            <img
              src={scissorsImage}
              alt="Ciseaux"
              title="Ciseaux"
              className="game-choice-image"
              onClick={() => handlePlayerChoice("scissors")}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setStep(1)}
          >
            Retourner à l'accueil
          </Button>
        </div>
      ) : (
        <Results
          setStep={setStep}
          setWinner={setWinner}
          winner={winner}
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          setPlayerChoice={setPlayerChoice}
          setComputerChoice={setComputerChoice}
        />
      )}
    </>
  );
}

export default Game;
