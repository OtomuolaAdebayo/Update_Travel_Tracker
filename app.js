const express = require("express");
const mongoose = require("mongoose")
const app = express()
app.use(express.json());


const expensesRoute = require('./routes/expensesRoutes')
const tripRoute = require("./routes/tripRoutes");
const userRoute = require("./routes/userRoutes");

app.use('/user', userRoute);
// app.use("/usertest", userRoute)
app.use("/trip", tripRoute);
app.use("/expenses", expensesRoute);

// app.use(express.urlencoded({extended: false}))


app.get("/", (req, res) => {
  res.send("Hello Travel Tracker App with MongoDB")
})


mongoose.connect(
  "mongodb+srv://traveltrackerAPI:71tI8nv7hzRpdziZ@cluster0.o0bowvl.mongodb.net/API?retryWrites=true&w=majority&appName=Cluster0"
).then(() => {
  // connect first to DB before app runs
  console.log("Connected to MongoDB");
  app.listen(5000, (req, res) => {
    console.log("App is listening at 5000");
  });
}).catch((error) => {
  console.log(error)
});