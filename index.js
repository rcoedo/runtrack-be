const express = require("express");
const events = require("./events");

const app = express();

app.get("/events", (req, res) => {
  res.send(Object.entries(events).map(([k, v]) => v));
});

app.get("/events/:eventId", (req, res) => {
  if (events[req.params.eventId]) {
    res.send(events[req.params.eventId]);
  } else {
    res.status(404);
    res.send({});
  }
});

app.post("/events/:eventId/join", (req, res) => {
  if (events[req.params.eventId]) {
    events[req.params.eventId].users += 1;
    res.status(200);
    res.send(events[req.params.eventId]);
  } else {
    res.status(404);
    res.send({});
  }

});

app.listen(process.env.PORT || 3000, () => console.log("runtrack backend listening on port 3000"));
