"use strict";

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // converts body & params to JSON

app.use(express.static("./public")); // allows access to public directory which has front-end business

// currently the res.send is overwritten by the express.static
app.get("/", (req, res)=>{
    res.send("Shalome in the home.");
})


// runs the server
app.listen(port, ()=> console.log(`listening on port: http://localhost:${port}`));