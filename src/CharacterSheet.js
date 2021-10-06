import React from "react";
import styled from "styled-components";
import { names } from "./data/names";

const CharacterSheetWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  .character-name {
    margin: 4px 0;
    text-align: center;
  }
  .params {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 4px;
    .box {
      width: 80px;
      height: 80px;
      border: 1px solid black;
      position: relative;
      .name {
        position: absolute;
        bottom: 4px;
        font-size: 20px;
        left: 0px;
        width: 100%;
        border-top: 1px solid black;
        text-align: center;
        font-weight: bold;
        font-family: "Metal Mania", cursive;
      }
      .param {
        position: absolute;
        top: 0px;
        left: 4px;
        opacity: 0.2;
      }
      .line {
        position: absolute;
        width: 42px;
        height: 1px;
        background: black;
        transform: rotate(-45deg);
        top: 15px;
        left: -5px;
        opacity: 0.2;
      }
    }
  }

  .middle {
    padding: 4px;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0 0;
    grid-template-areas:
      ". ."
      ". .";
    width: calc(100% -8px);
    height: 140px;
    .health,
    .armor,
    .omens,
    .weapon {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .name {
        position: absolute;
        bottom: 4px;
        left: 0;
        font-size: 18px;
        width: 100%;
        text-align: center;
        font-family: "Metal Mania", cursive;
      }
    }
    .health {
      border-right: 1px solid black;
      border-bottom: 1px solid black;
    }
    .armor {
      margin-top: -1px;
      margin-left: -1px;
      border-top: 1px solid black;
      border-left: 1px solid black;
    }
  }
  .silver {
    margin-top: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    .name {
      font-family: "Metal Mania", cursive;
      font-size: 20px;
      margin-right: 10px;
    }
    .value {
      width: 60px;
      height: 24px;
      border: 1px solid black;
    }
  }
  .eq {
    padding-top: 30px;
    margin-top: 10px;
    padding-left: 8px;
    padding-right: 8px;
    position: relative;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 5px 5px;
    grid-template-areas:
      ". ."
      ". ."
      ". ."
      ". ."
      ". ."
      ". .";
    width: calc(100% - 16px);
    height: 100px;
    .name {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      text-align: center;
      font-family: "Metal Mania", cursive;
      margin: 0;
    }
    div {
      border-bottom: 1px solid black;
      height: 20px;
    }
  }
`;

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
