const Word = require("../models/Word.js");

const index = (req, res) => {};

const show = (req, res) => {};

const create = async (req, res) => {
  if (req.body.word.length !== 5) {
    return res.json("Word must be exactly 5 letters long. Please try again.");
  } else {
    let word = await req.body.word.toLowercase();
    let url = await `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.title) {
          return res.json(
            "Word must be in the english dictionary! Please try again"
          );
        } else {
          let newWord = Word.create(req.body);

          return res.json(newWord.word);
        }
      });
  }
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
