import React, { useState } from "react";

import Rules from "./components/Rules";
import Game from "./components/Game";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="App">
      <h1>Pierre - Feuille - Ciseaux</h1>
      {step === 1 && <Rules setStep={setStep} step={step} />}
      {step === 2 && <Game setStep={setStep} step={step} />}
    </div>
  );
}

export default App;
