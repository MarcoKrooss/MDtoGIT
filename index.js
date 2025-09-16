import express from "express";
const app = express()
const port = 3000;

let index = 0;

app.get("/", (req, res) => {
  res.send(`Visit-Counter: ${index += 1}`);
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`express-app running on http://localhost:${port}`);
});
