const express = require("express");
const path = require("path");
const progress = require("./modules/progressModule");

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const PORT = 5005;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// define routes
app.get("/start", (req, res) => {
  console.log(`progress: start request received`);
  progress.startProgress();
  res.send(`start received: server`);
});

app.get("/stop", (req, res) => {
  console.log(`progress: stop request received`);
  progress.stopProgress();
  res.send(`stop received: server`);
});
