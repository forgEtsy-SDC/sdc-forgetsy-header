require('newrelic');

const compression = require("compression");
const express = require("express");
const path = require("path");
const cors = require("cors");
const Axios = require("axios")



const app = express();

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/../build/")));

const PORT = 3001;
let serverTurn = 1;

///////////////////////////////// WORK HERE ////////////////////////////////////////////////

app.get("/api/initialproducts", (req, res) => {
  if(serverTurn === 1){
    serverTurn = 2;
    console.log('load balancer')
    Axios.get('http://localhost:3002/api/initialproducts')
      .then(product => {
        res.send(product.data)
      })
      .catch(err => {
        res.status(400).send("couldnt find that record");
      });
  }
  else if(serverTurn === 2 ){
    serverTurn = 1;
    Axios.get('http://localhost:3003/api/initialproducts')
      .then(product => {
        res.send(product.data)
      })
      .catch(err => {
        res.status(400).send("couldnt find that record");
      });
  }
  // else if(serverTurn === 3 ){
  //   serverTurn = 4;
  //   Axios.get('http://localhost:3004/api/initialproducts')
  //     .then(product => {
  //       res.send(product.data)
  //     })
  //     .catch(err => {
  //       res.status(400).send("couldnt find that record");
  //     });
  // }else if(serverTurn === 4 ){
  //   serverTurn = 1;
  //   Axios.get('http://localhost:3005/api/initialproducts')
  //     .then(product => {
  //       res.send(product.data)
  //     })
  //     .catch(err => {
  //       res.status(400).send("couldnt find that record");
  //     });
  // }
    //Error generated here
  // db.findTenRandomProducts()
  //   .then(product => res.send(product))
  //   .catch(err => {
  //     res.status(400).send("couldnt return those records");
  //   });
});

app.get("/api/products/:searchterm", (req, res) => {
  
  const searchterm = req.params.searchterm;
  // console.log(searchterm)
  if(serverTurn === 1){
    // serverTurn = 2;
  Axios.get(`http://localhost:3002/api/products/${searchterm}`)
  .then(products => {
    return res.send(products.data)
  })
  .catch(err => {
    res.status(400).send("couldnt find that record");
  });
}
// else if(serverTurn === 2 ){
//   serverTurn = 3;
//   Axios.get(`http://localhost:3003/api/products/${searchterm}`)
//   .then(products => {
//     return res.send(products.data)
//   })
//   .catch(err => {
//     res.status(400).send("couldnt find that record");
//   });
// }else if(serverTurn === 3 ){
//   serverTurn = 4;
//   Axios.get(`http://localhost:3004/api/products/${searchterm}`)
//   .then(products => {
//     return res.send(products.data)
//   })
//   .catch(err => {
//     res.status(400).send("couldnt find that record");
//   });
// }else if(serverTurn === 4 ){
//   serverTurn = 1;
//   Axios.get(`http://localhost:3005/api/products/${searchterm}`)
//   .then(products => {
//     return res.send(products.data)
//   })
//   .catch(err => {
//     res.status(400).send("couldnt find that record");
//   });
// }
  // db.findProducts(searchterm)
  //   .then(products => res.send(products))
  //   .catch(err => {
  //     res.status(400).send("couldnt find that record");
  //   });
});


///////////////////////////////// STOP HERE ////////////////////////////////////////////////

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../build/index.html"));
});

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
