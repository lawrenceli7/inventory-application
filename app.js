const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const categoryRoutes = require("./routes/categoryRoutes");
const itemRoutes = require("./routes/itemRoutes");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

sequelize
  .sync({ force: true })
  .then(() => console.log("Database & tables created!"))
  .catch((err) => console.log("Error: " + err));

app.use("/categories", categoryRoutes);
app.use("/items", itemRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
