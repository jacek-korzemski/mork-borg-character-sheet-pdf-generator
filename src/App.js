import React from "react";
import Grid from "styled-components/Grid";
import Configuration from "components/Configuration";
import CharacterSheet from "components/CharacterSheet";
import { generateCharacter } from "utils/generators";
import ReactToPdf from "react-to-pdf";

const App = () => {
    const ref = React.createRef();

    return (
        <React.Fragment>
            <div style={{ margin: "0 auto", width: "fit-content", position: "relative" }}>
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
            <Configuration open={true}>
                <ReactToPdf targetRef={ref} filename="4-more-to-kill.pdf">
                    {({ toPdf }) => (
                        <button onClick={toPdf}>
                            Generate pdf
                        </button>
                    )}
                </ReactToPdf>
            </Configuration>
        </React.Fragment>
    );
};

export default App;
