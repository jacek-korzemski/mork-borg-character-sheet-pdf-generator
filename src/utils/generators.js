import { armor as initialArmor } from "data/armor";
import { weapons as initialWeapons } from "data/weapons";
import { randomInt, randomElementFromArray } from "utils/randomizers";

export const generateCharacter = (armorList, weaponList) => {
    const armor = armorList ? [...armorList] : [...initialArmor];
    const weapons = weaponList ? [...weaponList] : [...initialWeapons];

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