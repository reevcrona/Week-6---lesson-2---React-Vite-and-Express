import colors from "./colors.json" with { type: "json" };
import { Color } from "./serverTypes";
const fakeColorsDb:Color[] = colors.colors;

export const getRandomColors = (quantity:number):Color[] => {
  let tempSet:Set<Color> = new Set();
  while (tempSet.size < quantity) {
    const randomColor:Color =
      fakeColorsDb[Math.floor(Math.random() * fakeColorsDb.length)];
    tempSet.add(randomColor);
  }
  const colorsArray:Color[] = [...tempSet];
  return colorsArray;
};
export const getARandomColor = ():Color[] => {
  let colorsArray:Color[] = [];
  const randomColor:Color =
    fakeColorsDb[Math.floor(Math.random() * fakeColorsDb.length)];
  colorsArray.push(randomColor);
  return colorsArray;
};
export const getAllColors = ():Color[] => {
  return fakeColorsDb;
};
export const getColorsFromGroup = (colorGroup:string):Color[] => {
  const colorGroupArray:Color[] = fakeColorsDb.filter(
    (color) => color.colorGroup.toLowerCase() === colorGroup.toLowerCase()
  );
  return colorGroupArray;
};
