require("./connection.js");
const Word = require("../models/Word.js");

Word.deleteMany({})
  .then(() => {
    console.log("Seeds.js started");
    return Word.insertMany([
      { word: "three" },
      { word: "later" },
      { word: "sound" },
      { word: "extra" },
      { word: "clown" },
    ]).then((words) => {
      console.log(words);
    });
  })

  .catch((err) => console.error(err))
  .finally(() => {
    process.exit();
  });
