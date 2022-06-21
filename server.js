const express = require("express");
const mongoose = require('mongoose')
const app = express();

/// database
const DB_URI = 'mongodb://localhost:27017/urlshortner'

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})



// routes

app.use(
  express.json({
    extended: false,
  })
);
app.use("/", require("./routes/redirect"));
app.use("/api/url", require("./routes/url"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Shortening URL's on port ${PORT}🍒`));
