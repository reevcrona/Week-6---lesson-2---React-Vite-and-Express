import { FormElementsProps } from "../types";

function FormElements({
  fetchAllColors,
  fetchArandomColor,
  fetchColorsFromGroup,
  fetchRandomColors,
  inputValue,
  setInputValue,
  selectValue,
  setSelectValue,
  setApiData,
}: FormElementsProps) {
  return (
    <>
      <div className="buttons-container">
        <form
          onSubmit={(e) =>
            fetchRandomColors(e, inputValue, setApiData, setInputValue)
          }
        >
          <input
            type="number"
            placeholder="Amount of colors"
            className="form-input"
            value={inputValue}
            min="1"
            max="59"
            required
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button className="api-button" type="submit">
            Get random Colors
          </button>
        </form>
        <form
          onSubmit={(e) => fetchColorsFromGroup(e, setApiData, selectValue)}
        >
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
        <button
          className="api-button"
          onClick={() => fetchAllColors(setApiData)}
          type="button"
        >
          Get all colors
        </button>
        <button
          className="api-button"
          onClick={() => fetchArandomColor(setApiData)}
          type="button"
        >
          Get a random color
        </button>
      </div>
    </>
  );
}

export default FormElements;
