"use strict";
const express = require("express");
const router = express.Router();

router.post("http://localhost:7777/api/send-email", (req, res) => {
    const formData = req.body;
    console.log("Mottaget formulärdata: ", formData);
    // res.send(data);
    res.json({ message: 'Formulärdata mottaget!' });
})

module.exports = router;