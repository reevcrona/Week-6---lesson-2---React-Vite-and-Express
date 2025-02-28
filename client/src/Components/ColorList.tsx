import { Color, ColorListProps } from "../types";

function ColorList({ apiData }: ColorListProps) {
  const renderData = (data: Color[]) => {
    if (data && data.length > 0) {
      return data.map((item, index) => {
        return (
          <div
            className={data.length > 5 ? "color-row" : "color-column"}
            style={{ backgroundColor: item.hex, color: item.textColor }}
            key={index}
          >
            <div
              className={data.length > 5 ? "color-info-small" : "color-info"}
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
    return <p>No colors found</p>;
  };
  return <>{renderData(apiData)}</>;
}

export default ColorList;
