const express = require("express");
require('dotenv').config();
const connection = require("./connection");
const port = process.env.PORT || 5000;
const app = express();
const router = express.Router();

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


app.get("/experience", async (req, res)=> {
const stage = connection.query("SELECT * FROM exhibition WHERE category = 'Stage' ORDER BY date");
   
const emploi = connection.query("SELECT * FROM exhibition WHERE category = 'Emploi' ORDER BY date");
    
const formation= connection.query("SELECT * FROM exhibition WHERE category = 'Formation' ORDER BY date");
  
const concours = connection.query("SELECT * FROM exhibition WHERE category = 'Concours' ORDER BY date");

const residence =connection.query("SELECT * FROM exhibition WHERE category = 'Résidence' ORDER BY date");

const [
  stageData,
  emploiData,
  formationData,
  concoursData,
  residenceData,
]= await Promise.all([
  stage,
  emploi,
  formation,
  concours,
  residence,
]);

return res.json({
  stageData,
  emploiData,
  formationData,
  concoursData,
  residenceData,

});

});

app.listen(port, (err) => {
  if (err) {
    console.error("Warning", err);
  } else {
    console.log("Server running on", port);
  }
});

