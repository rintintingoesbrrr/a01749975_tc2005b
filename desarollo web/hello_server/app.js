"use strict"

import express  from "express"; 

const app = express();


app.get(
    "/name", (req, res) => {
        const salute = "hello from server"
        res.status(200).send(salute)
    }
);

app.get("/helo/:name",(req, res)=>{
    console.log(req.params);
    const salute = "hello" + req.params.name 
    res.status(200).send(salute)
})



app.listen(3000, ()=> {
    console.log("running on port 3000")
})