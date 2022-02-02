import React, { useContext } from 'react';
import Sidebar from 'styled-components/Sidebar';
import ButtonSelect from "styled-components/ButtonSelect";
import { armor as initialArmor } from "data/armor";
import { weapons as initiialWeapons } from "data/weapons";
import { AppContext } from "App";

const Configuration = (props) => {
    const app = useContext(AppContext);

    const toggleArmor = (elem) => {
        let newArmor = []
        if (app.armor.includes(elem)) {
            newArmor = [...app.armor].filter((find) => {
                return find !== elem;
            })
        } else {
            newArmor = [...app.armor, elem];
        }
        app.setArmor(newArmor)
    }

    const toggleWeapons = (elem) => {
        let newWeapons = []
        if (app.weapons.includes(elem)) {
            newWeapons = [...app.weapons].filter((find) => {
                return find !== elem;
            })
        } else {
            newWeapons = [...app.weapons, elem];
        }
        app.setWeapons(newWeapons)
    }

    return <Sidebar open={props.open}>
        <h2>Configuration</h2>
        <h3>Availible weapons</h3>
        {initiialWeapons.map((elem, index) => (
            <ButtonSelect
                key={index}
                selected={app.weapons.includes(elem)}
                onClick={() => toggleWeapons(elem)}
            >
                {elem}
            </ButtonSelect>
        ))}
        <h3>Availible Armor</h3>
        {initialArmor.map((elem, index) => (
            <ButtonSelect
                key={index}
                selected={app.armor.includes(elem)}
                onClick={() => toggleArmor(elem)}
            >
                {elem}
            </ButtonSelect>
        ))}
        <h3>The magic button</h3>
        {props.children}
    </Sidebar>
}

export default Configuration;