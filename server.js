const express = require("express");

const app = express();

/// database
const connection = require("./config/db.config");
createConnection.once("open", () => console.log("DB connected"));
// connection.on("error", () => console.log("Error"));

// routes
app.use(
  express.json({
    extended: false,
  })
);
app.use("/", require("./routes/redirect"));
app.use("/api/url", require("./routes/url"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Shortening URL's on port ${PORT}🍒`));
