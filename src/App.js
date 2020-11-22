import React, { useState } from "react";
import { Button } from "@material-ui/core";

import "./App.css";

function App() {
  const [selections] = useState(["rock", "paper", "scissors"]);

  return (
    <div className="App">
      <h1>Rock / Paper / Scissors</h1>
      <p>Bienvenue sur le jeu du Pierre / Papier / Ciseaux !</p>
      <p>
        Le but du jeu est simple : à chaque manche, vous choisirez un choix
        entre "Pierre", "Papier" et "Ciseaux". Dès que vous aurez fait votre
        choix, l'ordinateur choisira également aléatoirement une des 3 options.
      </p>
      <p>
        Voici les combinaisons : <br /> - La pierre bat les ciseaux
        <br />
        - Le papier bat la pierre
        <br />
        - Les ciseaux battent la feuille
        <br />
      </p>
      <p>
        Le gagnant de chaque manche est celui qui choisira la combinaison qui
        bat celle de l'autre !
      </p>
      <p>Pour commencer une partie, cliquer sur le bouton "Jouer"</p>
      <Button variant="contained" color="primary">
        Jouer
      </Button>
    </div>
  );
}

export default App;
