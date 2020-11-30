import React from "react";
import { Button } from "@material-ui/core";

import "../../App.css";

function Rules(props) {
  const { setStep } = props;

  return (
    <div className="rules">
      <h2>Bienvenue sur le jeu du Pierre - Feuille - Ciseaux !</h2>
      <p>
        Le but du jeu est simple : à chaque manche, vous choisirez un choix
        entre "Pierre", "Feuille" et "Ciseaux". Dès que vous aurez fait votre
        choix, l'ordinateur choisira également aléatoirement une des 3 options.
      </p>
      <p>
        Voici les combinaisons : <br /> - La pierre bat les ciseaux
        <br />
        - La feuille bat la pierre
        <br />
        - Les ciseaux battent la feuille
        <br />
      </p>
      <p>
        Le gagnant de chaque manche est celui qui choisira la combinaison qui
        bat celle de l'autre !
      </p>
      <p>Pour commencer une partie, cliquer sur le bouton "Jouer"</p>
      <Button variant="contained" color="primary" onClick={() => setStep(2)}>
        Jouer
      </Button>
    </div>
  );
}

export default Rules;
