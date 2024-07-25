const sequelize = require("./config/database");
const Category = require("./models/Category");
const Item = require("./models/Item");

const seed = async () => {
  await sequelize.sync({ force: true });

  const categories = await Category.bulkCreate([
    { name: "Electronics", description: "Gadgets and devices" },
    { name: "Furniture", description: "Home and office furniture" },
    { name: "Clothing", description: "Men and women clothing" },
  ]);

  const items = await Item.bulkCreate([
    {
      name: "Laptop",
      description: "A high-performance laptop",
      price: 1200.0,
      categoryId: categories[0].id,
    },
    {
      name: "Sofa",
      description: "A comfortable leather sofa",
      price: 700.0,
      categoryId: categories[1].id,
    },
    {
      name: "T-Shirt",
      description: "A cotton T-shirt",
      price: 20.0,
      categoryId: categories[2].id,
    },
  ]);

  console.log("Dummy data added");
  process.exit();
};

seed();
