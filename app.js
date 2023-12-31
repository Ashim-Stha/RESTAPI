const express = require("express");
require("dotenv").config();
const app = express();

const cors = require("cors");
const credentials = require("./credentials");

app.use(credentials);
app.use(
  cors({
    origin: "http://localhost:3001",
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/users", require("./api/users/user.router"));

app.listen(3000, () => {
  console.log("Server running");
});
