const express = require("express");
const events = require("./events");

const app = express();

app.get("/events", (req, res) => {
  res.send(Object.entries(events).map(([k, v]) => v));
});

app.listen(3000, () => console.log("runtrack backend listening on port 3000"));
