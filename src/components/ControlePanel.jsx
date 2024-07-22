import React from "react";

function ControlePanel({ name, changeSounds, power, powerChange }) {
  return (
    <div className="controle-panel">
      <button className="power-btn" onClick={powerChange}>
        Power {power ? "ON" : "OFF"}
      </button>
      <div id="display">
        <h3>{name}</h3>
      </div>
      <button className="controle-btn" onClick={changeSounds}>
        Change Sounds
      </button>
    </div>
  );
}

export default ControlePanel;
