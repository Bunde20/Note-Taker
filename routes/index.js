const router = require("express").Router()
const { v4: uuidv4 } = require("uuid")
const { readFromFile, writeToFile, readAndAppend, readAndDelete } = require("../helpers/fsUtils")

module.exports = router;