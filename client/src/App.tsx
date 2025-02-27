import { useState, useEffect } from "react";
import "./App.css";
import { Color } from "./types";
import ColorList from "./Components/ColorList";
import FormElements from "./Components/FormElements";
import {
  fetchRandomColors,
  fetchAllColors,
  fetchArandomColor,
  fetchColorsFromGroup,
} from "./ApiHandling";

function App() {
  const [apiData, setApiData] = useState<Color[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("Red");

  useEffect(() => {
    fetchArandomColor(setApiData);
  }, []);

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
        setApiData={setApiData}
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
