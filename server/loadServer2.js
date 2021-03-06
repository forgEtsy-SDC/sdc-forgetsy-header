const compression = require("compression");
const express = require('express')
const cors = require("cors");
const app = express();


app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3003;

const db = require("../database/mysqldb2");




app.get("/api/initialproducts", (req, res) => {
    db.findTenRandomProducts()
      .then(product => {
        return res.send(product)
      })
      .catch(err => {
        res.status(400).send("couldnt return those records");
      });
  });
  
  app.get("/api/products/:searchterm", (req, res) => { 
  const searchterm = req.params.searchterm;
    db.findProducts(searchterm)
      .then(products => res.send(products))
      .catch(err => {
        res.status(400).send("couldnt find that record");
      });
  });
  

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
  