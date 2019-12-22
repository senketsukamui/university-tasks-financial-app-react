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
db.defaults({
  data: {}
}).write();

app.post("/api/post_category", jsonParser, (req, res) => {
  const {
    title
  } = req.body;

  const prefix = ['data', title].join('.')
  const alreadyExist = Object.keys(db.getState().data).find(key => key === title)
  if (alreadyExist) {
    res.status(403).json({});
  } else {
    db.set(prefix, []).write()
  }

  res.status(200).json({});
});

app.post("/api/post_finance", (req, res) => {
  const {
    title,
    price,
    category
  } = req.body;
  const prefix = ['data', category].join('.');
  const categoryExist = Object.keys(db.getState().data).find(key => key === category);
  if (categoryExist) {
    db.get(prefix).push({
      title: title,
      price: price
    }).write();
    res.status(200).json({});
  }
})

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});