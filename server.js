"use strict";

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
// app.use("/",students);

app.get("/", (req, res)=>{
    res.send("Shalome in the home.");
})

// runs the server
app.listen(port, ()=> console.log(`listening on port: http://localhost:${port}`));