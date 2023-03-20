const express = require("express");
const app = express();
const wordRoutes = require("./routes/wordRoutes");
// const userRoutes

// create middleware vars
const methodOverride = require("method-override");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

// load the env vars
require("dotenv").config();
const port = process.env.PORT || "8000";

// require database
require("./db/connection.js");

// mount middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride("_method"));

// mount routes
app.use("/word", wordRoutes);
// app.use("/user", userRoutes)

app.get("/", (req, res) => res.json("Welcome to Wordle With Friends!"));

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
