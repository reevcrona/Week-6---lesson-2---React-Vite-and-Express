import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Color } from "./types";
import ColorList from "./Components/ColorList";
import FormElements from "./Components/FormElements";
function App() {
  const [apiData, setApiData] = useState<Color[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("Red");

  useEffect(() => {
    fetchArandomColor();
  }, []);

  const fetchRandomColors = async (
    e: React.FormEvent<HTMLFormElement>
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

  const fetchAllColors = async (): Promise<void> => {
    try {
      const response = await axios.get<Color[]>("http://localhost:3000/colors");
      setApiData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(`Unexpected error: ${error}`);
    }
  };

  const fetchArandomColor = async (): Promise<void> => {
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

  const fetchColorsFromGroup = async (
    e: React.FormEvent<HTMLFormElement>
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

  return (
    <div className="main-container">
      <FormElements
        fetchRandomColors={fetchRandomColors}
        fetchAllColors={fetchAllColors}
        fetchColorsFromGroup={fetchColorsFromGroup}
        fetchArandomColor={fetchArandomColor}
        inputValue={inputValue}
        setInputValue={setInputValue}
        selectValue={selectValue}
        setSelectValue={setSelectValue}
      />
      <div
        className={
          apiData && apiData.length > 5
            ? "color-container-column"
            : "color-container"
        }
      >
        <ColorList apiData={apiData} />
      </div>
    </div>
  );
}

export default App;
