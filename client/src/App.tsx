import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { color } from "./types";
function App() {
  const [apiData, setApiData] = useState<color[] | null>(null);
  const [inputValue, setInputValue] = useState("");
  const fetchApi = async () => {
    try {
      const response = await axios.get<color[]>(
        `http://localhost:3000/colors/${inputValue === "" ? "4" : inputValue}`
      );
      console.log(response.data);
      setApiData(response.data);
    } catch (error) {
      console.error(`Unexpected error: ${error}`);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchApi();
    setInputValue("");
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const renderData = () => {
    if (apiData && apiData.length > 0) {
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
    }
  };

  return (
    <div className="main-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="number"
          placeholder="Amount of colors"
          value={inputValue}
          min="1"
          max="25"
          required
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Get Colors</button>
      </form>
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
