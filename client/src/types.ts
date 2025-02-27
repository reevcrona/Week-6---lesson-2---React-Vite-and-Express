export interface Color {
  name: string;
  hex: string;
  rgb: string;
  hsl: string;
  cmyk: string;
  textColor: string;
  colorGroup: string;
}
export interface ColorListProps {
  apiData: Color[];
}
export interface FormElementsProps {
  fetchRandomColors: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  fetchAllColors: () => Promise<void>;
  fetchArandomColor: () => Promise<void>;
  fetchColorsFromGroup: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  selectValue: string;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
}
