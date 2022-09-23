const express = require("express");
const cors = require("cors");
const path = require("path")
require("dotenv").config();
const mongoose = require("mongoose");
const todoRouter = require("./src/routes/todo/todo.routes");

const PORT = process.env.PORT || 8000;

const MONGO_URL = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/test";

const app = express();

app.use(express.json());
app.use(cors());



app.use("/todo", todoRouter);

mongoose.connection.once("open", () => {
  console.log("mongoDB connection ready!");
});
mongoose.connection.on("error", (err) => {
  console.error(err);
});

     app.use(express.static('client/build'));
     app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


async function main() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}
main();
