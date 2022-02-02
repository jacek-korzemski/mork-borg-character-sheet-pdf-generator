export const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomElementFromArray = (array) => {
    if (array.length === 0) {
        return "-";
    }
    return array[Math.floor(Math.random() * array.length)];
};

export const nRandomElementsFromArray = (array, n) => {
    return [...array].sort(() => 0.5 - Math.random()).slice(0, n);
};
