const router = require("express").Router();
const db = require("../db/db.json");
const { readFromFile, readAndAppend } = require("../helpers/fsUtils")
console.log(db);

//post: api/notes
router.get('/', (req, res) => {
    console.info(`${req.method} request received for tips`);
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
});

router.get("/notes", (req, res) => res.json(db));

//delete: api/notes/id

module.exports = router;