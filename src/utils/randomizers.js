const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomElementFromArray = (array) => {
    if (array.length === 0) {
        return "-";
    }
    return array[Math.floor(Math.random() * array.length)];
};

const nRandomElementsFromArray = (array, n) => {
    if (!array) {
        return "-";
    }
    return [...array].sort(() => 0.5 - Math.random()).slice(0, n);
};

export { randomInt, randomElementFromArray, nRandomElementsFromArray };
