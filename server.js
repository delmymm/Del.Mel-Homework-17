const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger("dev"));

app.use(require("./routes/home"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout", 
{ 
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to db'))
.catch(err=> console.error('An error occured', err));

app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT);
});