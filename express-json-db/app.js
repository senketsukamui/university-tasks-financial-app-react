const express = require("express");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const adapter = new FileSync("db.json");
const db = low(adapter);

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });
db.defaults({ data: {} }).write();

app.post("/api/post_category", jsonParser, (req, res) => {
  console.log("check");
  console.log(req.body);
  let { title } = req.body;
  db.get("data")
    .push({ title: {} })
    .write();
  res.status(200).json({});
});

app.post("/api/post_finance", (req, res) => {
  let { title, price, category } = req.body;
  db.get("data")
    .get("category")
    .push({ title: title, price: price })
    .write();
});
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
