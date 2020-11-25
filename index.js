const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const database = require("./config/database");

const app = express();

const indexRouter = require("./routes/index");
const shopRouter = require("./routes/shop");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

app.use("/", indexRouter);
app.use("/shop", shopRouter);

app.listen(process.env.PORT || 5000);
console.log("Listening on port 5000");