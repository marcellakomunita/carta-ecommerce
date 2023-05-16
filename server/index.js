const db = require("./models");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
var corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.get("/", (req, res) => {
  res.send("Hewwwloo");
});

require("./routes/brand.routes")(app);
require("./routes/category.routes")(app);
require("./routes/product.routes")(app);

const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Server CARTA-ECOMMERCE listening on port ${PORT}`);
});
