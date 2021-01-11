const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());

const SELECT_ALL = "SELECT * FROM webdata";

const connection = mysql.createConnection({
    user:'root',
    password: '',
    server: 'localhost',
    database: 'nodejs'
});

connection.connect(err=>{
    if(err)
    {
        return err;
    }
});

app.get('/dataquery', function(req, res){
    connection.query(SELECT_ALL, (err, results)=>{
        if(err){
            return res.send(err);
        }else{
            return res.json({
                data: results
            });
        }
    });
});

app.listen(4000, ()=>{
    console.log("Listening on Port 4000");
});