import { generateRandomPlayer } from "../utils/generators.js";
import { weapons } from "../data/weapons";
import { equipement } from "../data/equipement";
import { armor } from "../data/armor";

/*
    TESTING:
    Function generating players and their stats
    @generateRandomPlayer()
*/

var testPlayers = [];
for (let i = 0; i <= 100; i++) {
    testPlayers.push(generateRandomPlayer(armor, weapons, equipement, 3, 6));
}

test("Should generate players with valid stats.", () => {
    for (let i = 0; i < testPlayers.length; i++) {
        expect(testPlayers[i].str).toBeLessThanOrEqual(3);
        expect(testPlayers[i].str).toBeGreaterThanOrEqual(-3);
        expect(testPlayers[i].agl).toBeLessThanOrEqual(3);
        expect(testPlayers[i].agl).toBeGreaterThanOrEqual(-3);
        expect(testPlayers[i].tgh).toBeLessThanOrEqual(3);
        expect(testPlayers[i].tgh).toBeGreaterThanOrEqual(-3);
        expect(testPlayers[i].hp).toBeLessThanOrEqual(10);
        expect(testPlayers[i].hp).toBeGreaterThanOrEqual(1);
        expect(testPlayers[i].omens).toBeLessThanOrEqual(2);
        expect(testPlayers[i].omens).toBeGreaterThanOrEqual(1);
    }
});

test("Should generate players with valid items", () => {
    for (let i = 0; i < testPlayers.length; i++) {
        expect(weapons).toContain(testPlayers[i].weapon);
        expect(armor).toContain(testPlayers[i].armor);
        for (let j = 0; j < testPlayers[i].equipement.length; j++) {
            expect(equipement).toContain(testPlayers[i].equipement[j]);
        }
    }
});

test("Should generate player without armor if no armor are given", () => {
    let newTestPlayers = [
        generateRandomPlayer([], weapons, equipement, 3, 6),
        generateRandomPlayer(undefined, weapons, equipement, 3, 6),
        generateRandomPlayer(null, weapons, equipement, 3, 6),
        generateRandomPlayer(false, weapons, equipement, 3, 6),
        generateRandomPlayer(0, weapons, equipement, 3, 6),
        generateRandomPlayer(),
    ];

    for (let i = 0; i < newTestPlayers.length; i++) {
        expect(newTestPlayers[i].armor).toBe("-");
    }
});

test("Should generate player without weapon if no weapons are given", () => {
    let newTestPlayers = [
        generateRandomPlayer(armor, [], equipement, 3, 6),
        generateRandomPlayer(armor, undefined, equipement, 3, 6),
        generateRandomPlayer(armor, null, equipement, 3, 6),
        generateRandomPlayer(armor, false, equipement, 3, 6),
        generateRandomPlayer(armor),
    ];

    for (let i = 0; i < newTestPlayers.length; i++) {
        expect(newTestPlayers[i].weapon).toBe("-");
    }
});

test("Should generate player without items if no equipement are given", () => {
    let newTestPlayers = [
        generateRandomPlayer(armor, weapons, [], 3, 6),
        generateRandomPlayer(armor, weapons, undefined, 3, 6),
        generateRandomPlayer(armor, weapons, null, 3, 6),
        generateRandomPlayer(armor, weapons, 0, 3, 6),
        generateRandomPlayer(armor, weapons, "", 3, 6),
        generateRandomPlayer(armor, weapons),
    ];

    for (let i = 0; i < newTestPlayers.length; i++) {
        expect(newTestPlayers[i].equipement[0]).toBe("-");
    }
});

test("Should generate players with no more than 6 and no less than 3 items", () => {
    for (let i = 0; i < testPlayers.length; i++) {
        expect(testPlayers[i].equipement.length).toBeGreaterThanOrEqual(3);
        expect(testPlayers[i].equipement.length).toBeLessThanOrEqual(6);
    }
});

test("Should generate players with only items from given array", () => {
    for (let i = 0; i < testPlayers.length; i++) {
        for (let j = 0; j < testPlayers[i].equipement.length; j++) {
            expect(equipement).toContain(testPlayers[i].equipement[j]);
        }
    }
});
