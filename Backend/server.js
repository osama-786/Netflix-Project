const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.get('/', (req, res) => {
     res.send('Hello from Express!')
    },

app.use(cors({
    origin:['https://netflix-clone-oorg.onrender.com']
})));

app.use(express.json());

mongoose
  .connect("mongodb+srv://osamafarooqui786:Osama%40786786@cluster0.hmro6bx.mongodb.net/?authMechanism=DEFAULT", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
