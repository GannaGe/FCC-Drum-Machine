import React from "react";
import KeyBoardKey from "./KeyBoardKey";

function KeyBoard({ play, sounds, power }) {
  return (
    <div id="drum-pads">
      {power
        ? sounds.map((sound) => (
            <KeyBoardKey key={sound.id} play={play} sound={sound} />
          ))
        : sounds.map((sound) => (
            <KeyBoardKey
              key={sound.id}
              play={play}
              sound={{ ...sound, url: "#" }}
            />
          ))}
    </div>
  );
}

export default KeyBoard;
