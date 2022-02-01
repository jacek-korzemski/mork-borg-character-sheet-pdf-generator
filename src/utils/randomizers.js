export const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

export const randomElementFromArray = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};