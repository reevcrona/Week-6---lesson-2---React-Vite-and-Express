import colors from "./colors.json" with { type: "json" };
const fakeColorsDb = colors.data;
export const getRandomColors = (quantity) => {
    let tempSet = new Set();
    while (tempSet.size < quantity) {
        const randomColor = fakeColorsDb[Math.floor(Math.random() * fakeColorsDb.length)];
        tempSet.add(randomColor);
    }
    const colorsArray = [...tempSet];
    return colorsArray;
};
export const getARandomColor = () => {
    let colorsArray = [];
    const randomColor = fakeColorsDb[Math.floor(Math.random() * fakeColorsDb.length)];
    colorsArray.push(randomColor);
    return colorsArray;
};
export const getAllColors = () => {
    return fakeColorsDb;
};
export const getColorsFromGroup = (colorGroup) => {
    const colorGroupArray = fakeColorsDb.filter((color) => color.colorGroup.toLowerCase() === colorGroup.toLowerCase());
    return colorGroupArray;
};
