import React from "react";
import CharacterSheetWrapper from "styled-components/CharacterSheetWrapper";
import { names } from "data/names";

const CharacterSheet = () => {
  return (
    <CharacterSheetWrapper>
      <h1 className="character-name">{names[Math.floor(Math.random() * names.length)]}</h1>
      <div className="params">
        <div className="box">
          <div className="name">Strength</div>
        </div>
        <div className="box">
          <div className="name">Agility</div>
        </div>
        <div className="box">
          <div className="name">Presence</div>
        </div>
        <div className="box">
          <div className="name">Toughness</div>
        </div>
      </div>

      <div className="middle">
        <div className="health">
          <div className="value"></div>
          <div className="name">Health</div>
        </div>
        <div className="omens">
          <div className="value"></div>
          <div className="name">Omens</div>
        </div>
        <div className="weapon">
          <div className="value"></div>
          <div className="name">Weapon</div>
        </div>
        <div className="armor">
          <div className="value"></div>
          <div className="name">Armor</div>
        </div>
      </div>
      <div className="silver">
        <div className="name">Silver: </div>
        <div className="value"></div>
      </div>

      <div className="eq">
        <h2 className="name">Equipement</h2>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </CharacterSheetWrapper>
  );
};

export default CharacterSheet;
