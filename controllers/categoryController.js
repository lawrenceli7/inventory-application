const Category = require("../models/Category");
const Item = require("../models/Item");

exports.list = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.render("categories/list", { categories });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.detail = async (req, res) => {
  const category = await Category.findByPk(req.params.id);
  const items = await Item.findAll({ where: { categoryId: req.params.id } });
  res.render("categories/detail", { category, items });
};

exports.create = async (req, res) => {
  try {
    const { name, description } = req.body;
    await Category.create({ name, description });
    res.redirect("/categories");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

exports.update = async (req, res) => {
  await Category.update(req.body, { where: { id: req.params.id } });
  res.redirect("/categories");
};

exports.delete = async (req, res) => {
  await Category.destroy({ where: { id: req.params.id } });
  res.redirect("/categories");
};
