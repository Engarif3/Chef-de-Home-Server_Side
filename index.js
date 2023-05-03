const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefs = require("./data/chefs_data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("THE CHEF RECIPE HUNTER SERVER IS RUNNING");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (id === 0) {
    res.send(chefs);
  } else {
    const chef = chefs.filter((n) => parseInt(n.id) === id);
    res.send(chef);
  }
});

app.listen(port, () => {
  console.log(`Dragon API is running on port ${port}`);
});
