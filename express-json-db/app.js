const express = require("express");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const adapter = new FileSync("db.json");
const db = low(adapter);

const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });

app.post("/api/post_category", jsonParser, (req, res) => {
  let { title } = req.body;
  db.get()
    .push({ title: {} })
    .write();
});

app.post("/api/post_finance", jsonParser, (req, res) => {
  let { title, price, category } = req.body;
  db.get(category)
    .push({ title: title, price: price })
    .write();
});
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
