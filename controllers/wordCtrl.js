const Word = require("../models/Word.js");

const index = (req, res) => {};

const show = (req, res) => {};

const create = async (req, res) => {
  let newWord = await Word.create(req.body);

  res.json(newWord);
};

const update = (req, res) => {};

const destroy = (req, res) => {};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
