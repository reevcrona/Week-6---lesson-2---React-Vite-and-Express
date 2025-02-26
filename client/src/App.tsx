import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { color } from "./types";
function App() {
  const [apiData, setApiData] = useState<color[] | null>(null);

  const fetchApi = async () => {
    try {
      const response = await axios.get<color[]>(
        "http://localhost:3000/colors/4"
      );
      console.log(response.data);
      setApiData(response.data);
    } catch (error) {
      console.error(`Unexpected error: ${error}`);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const renderData = () => {
    if (apiData && apiData.length > 0) {
      return apiData.map((item, index) => {
        return (
          <div
            className="color-column"
            style={{ backgroundColor: item.hex, color: item.textColor }}
            key={index}
          >
            {item.name}
          </div>
        );
      });
    }
  };

  return (
    <div className="main-container">
      <form>
        <input type="text" />
      </form>
      <div className="color-container">{renderData()}</div>
    </div>
  );
}

export default App;
