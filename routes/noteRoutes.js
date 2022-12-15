const router = require("express").Router();
const { response } = require("express");
let db = require("../db/db.json");
const { readFromFile, readAndAppend, readAndRemove } = require("../helpers/fsUtils")
console.log(db);

//post: api/notes
router.get('/', (req, res) => {
    console.info(`${req.method} request received for tips`);
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
});

router.get("/notes", (req, res) => res.json(db));

router.post("/notes", (req, res) => {
    if (req) {
    db = readAndAppend(req.body, "./db/db.json");
    res.status(200).json();
    } else {
    res.status(501).json("no work my guy dude man bro");
    }
})

router.delete("/notes/:id", (req, res) => {
    db = readAndRemove(req.params.id, "./db/db.json")
    res.status(200).json()
})

//delete: api/notes/id

module.exports = router;