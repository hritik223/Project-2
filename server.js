const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// DB connect
mongoose.connect("mongodb+srv://viritik345_db_user:<db_password>@cluster0.xd45rex.mongodb.net/?appName=Cluster0")
.then(()=> console.log("DB Connected"))
.catch(err => console.log(err));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/temple", require("./routes/templeRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
