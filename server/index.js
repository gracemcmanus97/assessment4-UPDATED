const express = require("express");
const cors = require("cors");

const app = express();

const {getCompliment, getFortune, getInspiration, getColor, getSong} = require('./controller')

app.use(cors());

app.use(express.json());

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.get("/api/inspiration", getInspiration);

app.get("/api/color", getColor);

app.get("/api/song", getSong);

app.post("/api/fortune", addFortune);

app.listen(4000, () => console.log("Server running on 4000"));
