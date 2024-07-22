import React, { useEffect } from "react";

function KeyBoardKey({ play, sound: { keyTrigger, url, keyCode, id } }) {
  function handleKeyDown(event) {
    if (event.keyCode === keyCode) {
      play(keyTrigger, id);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <button
      className="drum-pad"
      id={`button-${id}`}
      onClick={() => play(keyTrigger, id)}
    >
      <audio
        className="clip"
        id={keyTrigger}
        src={url}
        onError={(e) =>
          console.error(`Error loading audio file: ${e.target.src}`)
        }
      />
      {keyTrigger}
    </button>
  );
}

export default KeyBoardKey;
