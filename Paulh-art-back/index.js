

const express = require("express");
require('dotenv').config();
const connection = require("./connection");
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
const cors = require('cors')
app.use(cors());

app.get("/sculpture", (req, res)=> {
  connection.query("SELECT * FROM sculpture", (err, results)=> {
    if (err) {
      res.status(500).send({error: " bad request"});
  
    }
    else {
      res.status(200).json(results);
    }
  });
});

app.get("/exhibition", (req, res)=> {
  connection.query("SELECT * FROM exhibition WHERE category = 'Exposition' ", (err, results)=> {
    if (err) {
      res.status(500).send({error: " bad request"});
  
    }
    else {
      res.status(200).json(results);
    }
  });
});


app.listen(port, (err) => {
  if (err) {
    console.error("Warning", err);
  } else {
    console.log("Server running on", port);
  }
});

