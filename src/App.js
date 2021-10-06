import React from "react";
import Grid from "./Grid";
import CharacterSheet from "./CharacterSheet";
import ReactToPdf from "react-to-pdf";

const App = () => {
  const ref = React.createRef();

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
            <CharacterSheet />
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default App;
