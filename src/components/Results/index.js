import React from "react";
import { Button } from "@material-ui/core";

import paperImage from "../../images/paper.png";
import rockImage from "../../images/rock.png";
import scissorsImage from "../../images/scissors.png";
import "../../App.css";

function Results(props) {
  const {
    setStep,
    setWinner,
    winner,
    computerChoice,
    playerChoice,
    setPlayerChoice,
    setComputerChoice,
  } = props;

  function restartGame() {
    setStep(2);
    setWinner("");
    setComputerChoice("");
    setPlayerChoice("");
  }

  function displayResultsMessage() {
    if (winner === "player") {
      return <p className="win-text">Vous avez gagné !</p>;
    } else if (winner === "computer") {
      return <p className="lose-text">Vous avez perdu !</p>;
    } else if (winner === "draw") {
      return <p className="draw-text">Match nul !</p>;
    }
  }

  function displayResultsImages() {
    return (
      <div className="results-details-container">
        <div className="results-details-container-flex">
          <div>
            <p className="results-details-score">
              {localStorage.getItem("playerScore") || 0}
            </p>
            <p className="results-details-name">Joueur</p>
            {displaySelectedImage(playerChoice)}
          </div>
        </div>
        <div className="results-details-container-flex">
          <div>
            <p className="results-details-score">
              {localStorage.getItem("computerScore") || 0}
            </p>
            <p className="results-details-name">Ordinateur</p>
            {displaySelectedImage(computerChoice)}
          </div>
        </div>
      </div>
    );
  }

  function displaySelectedImage(selection) {
    if (selection === "rock") {
      return (
        <img
          src={rockImage}
          alt="Pierre"
          title="Pierre"
          className="game-choice-image-results"
        />
      );
    } else if (selection === "paper") {
      return (
        <img
          src={paperImage}
          alt="Feuille"
          title="Feuille"
          className="game-choice-image-results"
        />
      );
    } else if (selection === "scissors") {
      return (
        <img
          src={scissorsImage}
          alt="Ciseaux"
          title="Ciseaux"
          className="game-choice-image-results"
        />
      );
    }
  }

  return (
    <div className="results">
      <h2 className="results-title">Résultats</h2>
      <p>{displayResultsMessage()}</p>
      <p>{displayResultsImages()}</p>
      <Button
        variant="contained"
        color="primary"
        onClick={restartGame}
        style={{ marginRight: "10px" }}
      >
        Refaire une partie
      </Button>
      <Button variant="contained" color="primary" onClick={() => setStep(1)}>
        Retourner à l'accueil
      </Button>
    </div>
  );
}

export default Results;
