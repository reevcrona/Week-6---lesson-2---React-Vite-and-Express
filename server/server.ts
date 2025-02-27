import express from "express";
import cors from "cors";
import {
  getAllColors,
  getRandomColors,
  getARandomColor,
  getColorsFromGroup,
} from "./ColorUtils.js";

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173"],
};
const port = 3000;

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

app.get("/colors/group", (req, res) => {
  const reqColor = req.query.color;

  if (typeof reqColor === "string") {
    res.json(getColorsFromGroup(reqColor));
  } else {
    res.status(400).json({ error: "Color query parameter must be a string" });
  }
});
app.get("/colors/random", (req, res) => {
  res.json(getARandomColor());
});
app.get("/colors", (req, res) => {
  res.json(getAllColors());
});

app.get("/colors/:quantity", (req, res) => {
  const reqQuantity = parseInt(req.params.quantity);
  res.json(getRandomColors(reqQuantity));
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
