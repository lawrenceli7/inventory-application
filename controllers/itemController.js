const Item = require("../models/Item");

exports.list = async (req, res) => {
  const items = await Item.findAll();
  res.render("items/list", { items });
};

exports.detail = async (req, res) => {
  const item = await Item.findByPk(req.params.id);
  res.render("items/detail", { item });
};

exports.create = async (req, res) => {
  await Item.create(req.body);
  res.redirect("/items");
};

exports.update = async (req, res) => {
  await Item.update(req.body, { where: { id: req.params.id } });
  res.redirect("/items");
};

exports.delete = async (req, res) => {
  await Item.destroy({ where: { id: req.params.id } });
  res.redirect("/items");
};
