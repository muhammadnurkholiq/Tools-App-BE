// express
const express = require("express");

// cors
const cors = require("cors");

// app
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Tools App Back End Running on Heroku");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
