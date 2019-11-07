var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : '',
  password : '',
  database : 'dbname'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

//Try truning the response int a promised of the connection query
const findTenRandomProducts = async () => { 
  let promise1 = await new Promise ((resolve, reject) => {
  connection.query('SELECT * FROM a ORDER BY RAND() LIMIT 10;', (error, products) => {
    if(error) {return `error of ${error}`}
    else{
      resolve(products)
    }
  });
})

return promise1
};


const findProducts = async searchterm => {

let promise1 = await new Promise ((resolve, reject) => {
  connection.query(`SELECT * FROM ${searchterm[0]} WHERE (title) REGEXP '^${searchterm}' LIMIT 5;`, (error, products) => {
    if(error) {return `error of ${error}`}
    else{
      resolve(products)
    }
  });
})
  return promise1
};
  



  module.exports = {
    findProducts,
    findTenRandomProducts
  }