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
  fetchRandomColors: (
    e: React.FormEvent<HTMLFormElement>,
    inputValue: string,
    setApiData: React.Dispatch<React.SetStateAction<Color[]>>,
    setInputValue: React.Dispatch<React.SetStateAction<string>>
  ) => Promise<void>;
  fetchAllColors: (
    setApiData: React.Dispatch<React.SetStateAction<Color[]>>
  ) => Promise<void>;
  fetchArandomColor: (
    setApiData: React.Dispatch<React.SetStateAction<Color[]>>
  ) => Promise<void>;
  fetchColorsFromGroup: (
    e: React.FormEvent<HTMLFormElement>,
    setApiData: React.Dispatch<React.SetStateAction<Color[]>>,
    selectValue: string
  ) => Promise<void>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  selectValue: string;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
  setApiData: React.Dispatch<React.SetStateAction<Color[]>>;
}
