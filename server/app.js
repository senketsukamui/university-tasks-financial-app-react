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

app.use(function(req, res, next) {
  var origins = ["http://localhost:3000"];

  for (var i = 0; i < origins.length; i++) {
    var origin = origins[i];

    if (
      req.headers.hasOwnProperty("origin") &&
      req.headers.origin.indexOf(origin) > -1
    ) {
      res.header("Access-Control-Allow-Origin", req.headers.origin);
    }
  }

  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/api/post_category", jsonParser, (req, res) => {
  const { title } = req.body;

  const prefix = ["data", title].join(".");
  const alreadyExist = Object.keys(db.getState().data).find(
    key => key === title
  );
  if (alreadyExist) {
    res.status(403).json({});
  } else {
    db.set(prefix, []).write();
  }

  res.status(200).json({});
});

app.post("/api/post_finance", jsonParser, (req, res) => {
  const { title, price, date, category } = req.body;
  const prefix = ["data", category].join(".");
  const categoryExist = Object.keys(db.getState().data).find(
    key => key === category
  );
  if (categoryExist) {
    db.get(prefix)
      .push({
        title: title,
        price: parseInt(price),
        date: date
      })
      .write();
    res.status(200).json({});
  }
  res.status(403).json({});
});

app.get("/api/get_info", (req, res) => {
  res.json(db.getState());
});

app.listen(8000, () => {
  console.log("Example app listening on port 3000!");
});
