// if (process.env.NODE_ENV !== "production") {
//     const x = require("dotenv")
//     // console.log(x);
// }

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const database = require("./database");

const app = express();

const indexRouter = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

app.use("/", indexRouter);

// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
// });
// const db = mongoose.connection;
// db.on("error", error => console.error(console.error));
// db.once("open", () => console.log("Connected to DB "));

app.listen(process.env.PORT || 5000);
console.log("Listening on port 5000");