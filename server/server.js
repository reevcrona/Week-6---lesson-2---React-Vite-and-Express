import express from "express";
import cors from "cors";
import { getRandomColors } from "./randomColors.js";

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173"],
};
const port = 3000;

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json(getRandomColors());
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
