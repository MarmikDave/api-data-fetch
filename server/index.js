let express = require("express");
let mongoose = require("mongoose");
let axios = require("axios");
let cors = require("cors");

const { initializeDatabase } = require("./controller/prodController.js");
const route = require("./routes/prodroute");

const PORT = 5000;
let app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/rox-task")
  .then(async () => {
    console.log("Database connected successfully");
    try {
      await initializeDatabase();
      console.log("Database initialized with Seed data");
    } catch (error) {
      console.error("Error initializing database:", error);
    }
  })
  .catch((error) => {
    console.log("Database Connection Failed:", error);
  });

app.use("/", route);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
