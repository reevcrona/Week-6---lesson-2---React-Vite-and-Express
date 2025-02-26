import express from "express";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173"],
};
const port = 3000;

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json([
    { name: "blue", hexcode: "#414151" },
    { name: "red", hexcode: "#414123123" },
  ]);
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
