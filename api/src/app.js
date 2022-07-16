import express from "express";
import cors from "cors";
import user from "../data/users.js"

const app = express();
const PORT = 4000;

app.use(cors());

app.get("/api/users", (req, res) => {
  res.send(user);
});

app.listen(PORT, () => console.log(`Running app in port: ${PORT}`));