var mysql = require('mysql')
var faker = require('faker')

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Firefly69',
    database : 'dbname'
  });
  
  connection.connect();

  // function oneEntry () {
//     let fake = faker.commerce.product()
//     let queryString = `INSERT INTO products (title) VALUES ("${fake}");`
//     connection.query(queryString, [], function (error, results, fields) {
//         if (error) throw error;
//         console.log(count)
//         seedMillion();
//       });
// }

  let count = 0
  // function seedMillion () {
  //   if(count < 10000000){
  //     oneThousandsEntry()  
  //     // oneEntry()
  //       count+= 1000
  //   }
  // }

function multithread () {
  let currentPromise = 1
  while(count < 2500000){
    if(currentPromise === 1){
      oneThousandsEntryOne(count)
    }else if(currentPromise === 2){
      oneThousandsEntryTwo(count)
    }

    count += 100000
    if(currentPromise === 1){
      currentPromise = 2
    }
    else if(currentPromise === 2){
      currentPromise = 1
    }
  }
}

function oneThousandsEntryOne (newCount) {
  let inputString = `(\"${faker.commerce.product()}\"), `;
  for (var i = 1; i < 100000; i++){
    if(i === 99999){
      inputString += `(\"${faker.commerce.product()}\") `
    }else{
    inputString += `(\"${faker.commerce.product()}\"), `
    }
  }
  let queryString = 'INSERT INTO products (title) VALUES ' + inputString + ';'
  connection.query(queryString, [], function (error, results, fields) {
      if (error) throw error;
      console.log(newCount)
    });
}

function oneThousandsEntryTwo (newCount) {
  let inputString = `(\"${faker.commerce.product()}\"), `;
  for (var i = 1; i < 100000; i++){
    if(i === 99999){
      inputString += `(\"${faker.commerce.product()}\") `
    }else{
    inputString += `(\"${faker.commerce.product()}\"), `
    }
  }
  let queryString = 'INSERT INTO products (title) VALUES ' + inputString + ';'
  connection.query(queryString, [], function (error, results, fields) {
      if (error) throw error;
      console.log(newCount)
    });
}


multithread()