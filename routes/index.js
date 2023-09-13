const router = require("express").Router()
const { v4: uuidv4 } = require("uuid")
const { readFromFile, writeToFile, readAndAppend, readAndDelete } = require("../helpers/fsUtils")

router.get("/notes", (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

module.exports = router;