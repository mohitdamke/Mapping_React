import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function AddEmojipedia(props) {
  return (
    <Entry
      key={props.id}
      emoji={props.emoji}
      name={props.name}
      mean={props.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(AddEmojipedia)}</dl>
    </div>
  );
}

export default App;
