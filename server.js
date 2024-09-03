const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
var http = require("http");
require("./models");
require("dotenv").config();
const shortid = require("shortid");

// Apply CORS Middleware Once
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000", 
      "http://localhost:5000", 
      "https://digital-agency-backend.onrender.com/"
    ],
  })
);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something broke!' });
});



app.use(express.json());
app.use(cookieParser());
app.use("/api/v1", routes);

// Port initializing
const port = 5000;

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Static image folder
app.use("/images", express.static("images"));

// Main route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Catch-all route for handling API not found
app.use((req, res, next) => {
  res.status(404).json({ error: "API not found" });
});

const server = http.createServer(app);

// Listening server
server.listen(port, () =>
  console.log(`Server is listening at http://localhost:${port}`)
);
