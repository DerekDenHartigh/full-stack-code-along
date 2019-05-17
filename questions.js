"use strict";

const express = require("express");
const questions = express.Router();
const questionData = require("./questionData"); // pull in questionData

questions.get("/", (req, res)=>{
    res.send(questionData);
});

// will get a specific question:
questions.get("/:id", (req, res)=>{ // : denotes a parameter w/ name "id"
    let index = req.params.id;
    if(questionData[index]){  // if this index exists
        res.send(questionData[index]);
    } else {
        res.send("Invalid Param, ERROR ERROR, You will be terminated!");
    }
});

module.exports = questions;