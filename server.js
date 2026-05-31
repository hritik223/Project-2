const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// DB connect
mongoose.connect("mongodb://127.0.0.1:27017/templeDB")
.then(()=> console.log("DB Connected"))
.catch(err => console.log(err));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/temple", require("./routes/templeRoutes"));
app.post("/api/auth/login", ...);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});