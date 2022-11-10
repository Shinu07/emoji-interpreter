import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🧑‍💻": "Programming",
  "😊": "smiling",
  "🤣": "Laughing",
  "😍": "face with heart eyes",
  "😘": "giving a kiss",
  "😉": "wink eyes",
  "😎": "face with sunglass",
  "🏆": "trophy",
  "❤️": "red heart",
  "💐": "bouquet"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    setMeaning(meaning);

    if (meaning === undefined) {
      meaning = "We don't have this in our database ";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Out!</h1>
      <input
        onChange={emojiInputHandler}
        style={{
          height: "1rem",
          width: "15rem",
          marginTop: "5rem",
          borderRadius: "0.5rem"
        }}
      />
      <h2> meaning {meaning} </h2>
      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontsize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
            {""}
          </span>
        );
      })}
    </div>
  );
}
