import colors from "./colors.json" assert { type: "json" };

const fakeColorsDb = colors.colors;

export const getRandomColors = (quantity) => {
  let tempSet = new Set();
  while (tempSet.size < quantity) {
    const randomColor =
      fakeColorsDb[Math.floor(Math.random() * fakeColorsDb.length)];
    tempSet.add(randomColor);
  }
  const colorsArray = [...tempSet];
  return colorsArray;
};

console.log(getRandomColors());
