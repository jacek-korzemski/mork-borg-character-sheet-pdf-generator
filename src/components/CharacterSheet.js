import React from "react";
import CharacterSheetWrapper from "styled-components/CharacterSheetWrapper";
import { names } from "data/names";

const CharacterSheet = ({ player }) => {
    return (
        <CharacterSheetWrapper>
            <h1 className="character-name">{names[Math.floor(Math.random() * names.length)]}</h1>
            <div className="params">
                <div className="box">
                    <div className="name">Strength</div>
                    <div className="value">{player.str.toString()}</div>
                </div>
                <div className="box">
                    <div className="name">Agility</div>
                    <div className="value">{player.agl.toString()}</div>
                </div>
                <div className="box">
                    <div className="name">Presence</div>
                    <div className="value">{player.prs.toString()}</div>
                </div>
                <div className="box">
                    <div className="name">Toughness</div>
                    <div className="value">{player.tgh.toString()}</div>
                </div>
            </div>

            <div className="middle">
                <div className="health">
                    <div className="value">{player.hp.toString()}</div>
                    <div className="name">Health</div>
                </div>
                <div className="omens">
                    <div className="value">{player.omens.toString()}</div>
                    <div className="name">Omens</div>
                </div>
                <div className="weapon">
                    <div className="value">{player.weapon}</div>
                    <div className="name">Weapon</div>
                </div>
                <div className="armor">
                    <div className="value">{player.weapon}</div>
                    <div className="name">Armor</div>
                </div>
            </div>
            <div className="silver">
                <div className="name">Silver: </div>
                <div className="value">{player.silver}</div>
            </div>

            <div className="eq">
                <h2 className="name">Equipement</h2>
                <div>
                    {player.equipement.map((elem, index) => (
                        <React.Fragment key={index}>{elem}, </React.Fragment>
                    ))}
                </div>
            </div>
        </CharacterSheetWrapper>
    );
};

export default CharacterSheet;
