const client = require('./connection.js');
const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log("Server s now running at port 3000")
})

client.connect();

app.get("/users", (req,res) => {
    client.query('Select * from users', (err,result) =>{
        if(!err){
            res.send(result.rows)
        }
    })
    client.end;
})
