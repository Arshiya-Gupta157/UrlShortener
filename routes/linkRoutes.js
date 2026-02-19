const express = require('express');
const {handleGetId, createShortLink, analytics} = require('../controller/linkController')
const router = express.Router();

router.get("/:id", handleGetId);
router.post("/", createShortLink);
router.get("/url/analytics/:id", analytics);

module.exports = router;