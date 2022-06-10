// express
const express = require("express");

// cors
const cors = require("cors");

// router
const router = require("./src/routes");

// app
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api/v1/", router);

app.get("/", (req, res) => {
  res.send("Tools App Back End Running on Heroku");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
