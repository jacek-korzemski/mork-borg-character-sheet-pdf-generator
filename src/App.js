import React from "react";
import Grid from "./components/Grid";
import CharacterSheet from "./components/CharacterSheet";
import ReactToPdf from "react-to-pdf";
import { armor } from "./data/armor";
import { weapons } from "./data/weapons";

const App = () => {
  const ref = React.createRef();

  const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const randomElementFromArray = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const generateCharacter = () => {
    return (
      <div className="initial-data">
        <p>
          str: <strong>{randomInt(-3, 3)}</strong>
        </p>
        <p>
          agl: <strong>{randomInt(-3, 3)}</strong>
        </p>
        <p>
          prs: <strong>{randomInt(-3, 3)}</strong>
        </p>
        <p>
          tgh: <strong>{randomInt(-3, 3)}</strong>
        </p>
        <p>
          health: <strong>{randomInt(1, 6)}</strong>
        </p>
        <p>
          Omens: <strong>{randomInt(1, 2)}</strong>
        </p>
        <p>
          Armor: <br />
          <strong>{randomElementFromArray(armor)}</strong>
          <br />
          <br />
        </p>
        <p>
          Weapon: <br />
          <strong>{randomElementFromArray(weapons)}</strong>
          <br />
          <br />
        </p>
        <p>
          Silver: <strong>{randomInt(40, 120)}</strong>
        </p>
        <p>Equipement: </p>
      </div>
    );
  };

  return (
    <div style={{ margin: "0 auto", width: "fit-content", position: "relative" }}>
      <ReactToPdf targetRef={ref} filename="4-more-to-kill.pdf">
        {({ toPdf }) => (
          <button onClick={toPdf} style={{ position: "absolute", top: 0, left: 0 }}>
            Generate pdf
          </button>
        )}
      </ReactToPdf>
      <div ref={ref}>
        <Grid>
          <div>
            <CharacterSheet />
          </div>
          <div>
            <CharacterSheet />
          </div>
          <div>
            <CharacterSheet />
          </div>
          <div>
            <div className="initial-data-wrapper">
              {generateCharacter()}
              {generateCharacter()}
              {generateCharacter()}
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default App;
