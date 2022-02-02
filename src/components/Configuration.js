import React, { useState } from 'react';
import Sidebar from 'styled-components/Sidebar';
import ButtonSelect from "styled-components/ButtonSelect";
import { armor } from "data/armor";
import { weapons } from "data/weapons";

const Configuration = (props) => {
    const [selectedArmor, setSelectedArmor] = useState([...armor]);
    const [selectedWeapons, setSelectedWeapons] = useState([...weapons]);

    const toggleArmor = (elem) => {
        let newSelectedArmor = []
        if (selectedArmor.includes(elem)) {
            newSelectedArmor = [...selectedArmor].filter((find) => {
                return find !== elem;
            })
        } else {
            newSelectedArmor = [...selectedArmor, elem];
        }
        setSelectedArmor(newSelectedArmor)
    }

    const toggleWeapons = (elem) => {
        let newSelectedWeapons = []
        if (selectedWeapons.includes(elem)) {
            newSelectedWeapons = [...selectedWeapons].filter((find) => {
                return find !== elem;
            })
        } else {
            newSelectedWeapons = [...selectedWeapons, elem];
        }
        setSelectedWeapons(newSelectedWeapons)
    }

    return <Sidebar open={props.open}>
        <h2>Configuration</h2>
        <h3>Availible weapons</h3>
        {weapons.map((elem, index) => (
            <ButtonSelect
                key={index}
                selected={selectedWeapons.includes(elem)}
                onClick={() => toggleWeapons(elem)}
            >
                {elem}
            </ButtonSelect>
        ))}
        <h3>Availible Armor</h3>
        {armor.map((elem, index) => (
            <ButtonSelect
                key={index}
                selected={selectedArmor.includes(elem)}
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