import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Color } from "./types";
function App() {
  const [apiData, setApiData] = useState<Color[] | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("Red");

  useEffect(() => {
    fetchArandomColor();
  }, []);

  const fetchApi = async (): Promise<void> => {
    try {
      const response = await axios.get<Color[]>(
        `http://localhost:3000/colors/${inputValue === "" ? "4" : inputValue}`
      );
      console.log(response.data);
      setApiData(response.data);
    } catch (error) {
      console.error(`Unexpected error: ${error}`);
    }
  };

  const fetchAllColors = async (): Promise<void> => {
    try {
      const response = await axios.get<Color[]>("http://localhost:3000/colors");
      setApiData(response.data);
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    fetchApi();
    setInputValue("");
  };

  const renderData = () => {
    if (!apiData || apiData.length > 0) return <p>No colors found</p>;
    return apiData.map((item, index) => {
      return (
        <div
          className={apiData.length > 5 ? "color-row" : "color-column"}
          style={{ backgroundColor: item.hex, color: item.textColor }}
          key={index}
        >
          <div
            className={apiData.length > 5 ? "color-info-small" : "color-info"}
          >
            <h3>{item.name}</h3>
            <p>Hexcode: {item.hex}</p>
            <p>{item.rgb}</p>
            <p>{item.cmyk}</p>
            <p>{item.hsl}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="main-container">
      <div className="buttons-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="number"
            placeholder="Amount of colors"
            className="form-input"
            value={inputValue}
            min="1"
            max="25"
            required
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button className="api-button" type="submit">
            Get random Colors
          </button>
        </form>
        <form onSubmit={(e) => fetchColorsFromGroup(e)}>
          <label htmlFor="color-select"></label>
          <select
            onChange={(e) => setSelectValue(e.target.value)}
            className="form-input"
            name="color-select"
            id="color-select"
          >
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Yellow">Yellow</option>
            <option value="Cyan">Cyan</option>
            <option value="Pink">Pink</option>
            <option value="Orange">Orange</option>
            <option value="Purple">Purple</option>
            <option value="Brown">Brown</option>
            <option value="Gray">Gray</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Teal">Teal</option>
          </select>
          <button className="api-button" type="submit">
            Get colors from group
          </button>
        </form>
        <button className="api-button" onClick={fetchAllColors} type="button">
          Get all colors
        </button>
        <button
          className="api-button"
          onClick={fetchArandomColor}
          type="button"
        >
          Get a random color
        </button>
      </div>
      <div
        className={
          apiData && apiData.length > 5
            ? "color-container-column"
            : "color-container"
        }
      >
        {renderData()}
      </div>
    </div>
  );
}

export default App;
