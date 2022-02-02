import React, { createContext, useState } from "react";
import Grid from "styled-components/Grid";
import Configuration from "components/Configuration";
import CharacterSheet from "components/CharacterSheet";
import ReactToPdf from "react-to-pdf";
import { armor as initialArmor } from "data/armor";
import { weapons as initiialWeapons } from "data/weapons";
import { equipement as initiialEquipement } from "data/equipement";
import { generateRandomPlayer } from "utils/generators";

export const AppContext = createContext({});

const App = () => {
    const ref = React.createRef();
    const [armor, setArmor] = useState([...initialArmor]);
    const [weapons, setWeapons] = useState([...initiialWeapons]);
    const [equipement, setEquipement] = useState([...initiialEquipement]);

    return (
        <AppContext.Provider
            value={{
                armor: armor,
                weapons: weapons,
                equipement: equipement,
                setArmor: setArmor,
                setWeapons: setWeapons,
                setEquipement: setEquipement,
            }}
        >
            <div
                style={{
                    margin: "0 0 0 50%",
                    width: "fit-content",
                    position: "relative",
                    height: "100%",
                }}
            >
                <div ref={ref}>
                    <Grid>
                        <div>
                            <CharacterSheet player={generateRandomPlayer(armor, weapons, equipement, 3, 6)} />
                        </div>
                        <div>
                            <CharacterSheet player={generateRandomPlayer(armor, weapons, equipement, 3, 6)} />
                        </div>
                        <div>
                            <CharacterSheet player={generateRandomPlayer(armor, weapons, equipement, 3, 6)} />
                        </div>
                        <div>
                            <CharacterSheet player={generateRandomPlayer(armor, weapons, equipement, 3, 6)} />
                        </div>
                    </Grid>
                </div>
            </div>
            <Configuration open={true}>
                <ReactToPdf targetRef={ref} filename="4-more-to-kill.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
                </ReactToPdf>
                <button onClick={() => setArmor([...armor])}>Refresh data</button>
            </Configuration>
        </AppContext.Provider>
    );
};

export default App;
