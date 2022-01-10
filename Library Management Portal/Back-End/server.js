const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require("dotenv").config();
const cors = require("cors");


const router = require("./routers");
app.use(router);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.disable("etag");

app.listen("4000", () => {
  console.log("Back-End Running at port 4000");
});
