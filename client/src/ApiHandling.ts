import { Color } from "./types";
import axios from "axios";

export const fetchRandomColors = async (
  e: React.FormEvent<HTMLFormElement>,
  inputValue: string,
  setApiData: React.Dispatch<React.SetStateAction<Color[]>>,
  setInputValue: React.Dispatch<React.SetStateAction<string>>
): Promise<void> => {
  try {
    e.preventDefault();
    const response = await axios.get<Color[]>(
      `http://localhost:3000/colors/${inputValue}`
    );

    setApiData(response.data);
    setInputValue("");
  } catch (error) {
    console.error(`Unexpected error: ${error}`);
  }
};

export const fetchAllColors = async (
  setApiData: React.Dispatch<React.SetStateAction<Color[]>>
): Promise<void> => {
  try {
    const response = await axios.get<Color[]>("http://localhost:3000/colors");
    setApiData(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(`Unexpected error: ${error}`);
  }
};

export const fetchArandomColor = async (
  setApiData: React.Dispatch<React.SetStateAction<Color[]>>
): Promise<void> => {
  try {
    const response = await axios.get<Color[]>(
      "http://localhost:3000/colors/random"
    );
    console.log(response.data);
    setApiData(response.data);
  } catch (error) {
    console.error(`Unexpected error: ${error}`);
  }
};

export const fetchColorsFromGroup = async (
  e: React.FormEvent<HTMLFormElement>,
  setApiData: React.Dispatch<React.SetStateAction<Color[]>>,
  selectValue: string
): Promise<void> => {
  try {
    e.preventDefault();
    const response = await axios.get<Color[]>(
      `http://localhost:3000/colors/group?color=${selectValue}`
    );
    console.log(response.data);
    setApiData(response.data);
  } catch (error) {
    console.error(`Unexpected error: ${error}`);
  }
};
