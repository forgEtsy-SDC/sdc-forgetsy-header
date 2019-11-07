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

// function multithread () {
//   let currentPromise = 1
//   while(count < 2500000){
//     if(currentPromise === 1){
//       oneThousandsEntryOne(count)
//     }else if(currentPromise === 2){
//       oneThousandsEntryTwo(count)
//     }

//     count += 100000
//     if(currentPromise === 1){
//       currentPromise = 2
//     }
//     else if(currentPromise === 2){
//       currentPromise = 1
//     }
//   }
// }

// function oneThousandsEntryOne (newCount) {
//   let inputString = `(\"${faker.commerce.product()}\"), `;
//   for (var i = 1; i < 100000; i++){
//     if(i === 99999){
//       inputString += `(\"${faker.commerce.product()}\") `
//     }else{
//     inputString += `(\"${faker.commerce.product()}\"), `
//     }
//   }
//   let queryString = 'INSERT INTO products (title) VALUES ' + inputString + ';'
//   connection.query(queryString, [], function (error, results, fields) {
//       if (error) throw error;
//       console.log(newCount)
//     });
// }

// function oneThousandsEntryTwo (newCount) {
//   let inputString = `(\"${faker.commerce.product()}\"), `;
//   for (var i = 1; i < 100000; i++){
//     if(i === 99999){
//       inputString += `(\"${faker.commerce.product()}\") `
//     }else{
//     inputString += `(\"${faker.commerce.product()}\"), `
//     }
//   }
//   let queryString = 'INSERT INTO products (title) VALUES ' + inputString + ';'
//   connection.query(queryString, [], function (error, results, fields) {
//       if (error) throw error;
//       console.log(newCount)
//     });
// }


// multithread()



function generateAllLetters (char) {
let storage = `(\"${char}\"), `
function generateLetter (string) {
  if(string.length < 5){
  storage += `(\"${string + 'a'}\"), `
  generateLetter(string + 'a')
  storage += `(\"${string + 'b'}\"), `
  generateLetter(string + 'b')
  storage += `(\"${string + 'c'}\"), `
  generateLetter(string + 'c')
  storage += `(\"${string + 'd'}\"), `
  generateLetter(string + 'd')
  storage += `(\"${string + 'e'}\"), `
  generateLetter(string + 'e')
  storage += `(\"${string + 'f'}\"), `
  generateLetter(string + 'f')
  storage += `(\"${string + 'g'}\"), `
  generateLetter(string + 'g')
  storage += `(\"${string + 'h'}\"), `
  generateLetter(string + 'h')
  storage += `(\"${string + 'i'}\"), `
  generateLetter(string + 'i')
  storage += `(\"${string + 'j'}\"), `
  generateLetter(string + 'j')
  storage += `(\"${string + 'k'}\"), `
  generateLetter(string + 'k')
  storage += `(\"${string + 'l'}\"), `
  generateLetter(string + 'l')
  storage += `(\"${string + 'm'}\"), `
  generateLetter(string + 'm')
  storage += `(\"${string + 'n'}\"), `
  generateLetter(string + 'n')
  storage += `(\"${string + 'o'}\"), `
  generateLetter(string + 'o')
  storage += `(\"${string + 'p'}\"), `
  generateLetter(string + 'p')
  storage += `(\"${string + 'q'}\"), `
  generateLetter(string + 'q')
  storage += `(\"${string + 'r'}\"), `
  generateLetter(string + 'r')
  storage += `(\"${string + 's'}\"), `
  generateLetter(string + 's')
  storage += `(\"${string + 't'}\"), `
  generateLetter(string + 't')
  storage += `(\"${string + 'u'}\"), `
  generateLetter(string + 'u')
  storage += `(\"${string + 'v'}\"), `
  generateLetter(string + 'v')
  storage += `(\"${string + 'w'}\"), `
  generateLetter(string + 'w')
  storage += `(\"${string + 'x'}\"), `
  generateLetter(string + 'x')
  storage += `(\"${string + 'y'}\"), `
  generateLetter(string + 'y')
  storage += `(\"${string + 'z'}\"), `
  generateLetter(string + 'z')
  }
}
generateLetter(char)
storage = storage.replace(/, $/, ' ')
return storage;
}



function aplhabetSeed (inputString, char) {

  let queryString = 'INSERT INTO '+ char + ' (title) VALUES ' + inputString + ';'
  connection.query(queryString, [], function (error, results, fields) {
      if (error) throw error;
      count++
      console.log(count)
    });
}


function seedAlphabet () {
  aplhabetSeed(generateAllLetters('a'), 'a')
  aplhabetSeed(generateAllLetters('b'), 'b')
  aplhabetSeed(generateAllLetters('c'), 'c')
  aplhabetSeed(generateAllLetters('d'), 'd')
  aplhabetSeed(generateAllLetters('e'), 'e')
  aplhabetSeed(generateAllLetters('f'), 'f')
  aplhabetSeed(generateAllLetters('g'), 'g')
  aplhabetSeed(generateAllLetters('h'), 'h')
  aplhabetSeed(generateAllLetters('i'), 'i')
  aplhabetSeed(generateAllLetters('j'), 'j')
  aplhabetSeed(generateAllLetters('k'), 'k')
  aplhabetSeed(generateAllLetters('l'), 'l')
  aplhabetSeed(generateAllLetters('m'), 'm')
  aplhabetSeed(generateAllLetters('n'), 'n')
  aplhabetSeed(generateAllLetters('o'), 'o')
  aplhabetSeed(generateAllLetters('p'), 'p')
  aplhabetSeed(generateAllLetters('q'), 'q')
  aplhabetSeed(generateAllLetters('r'), 'r')
  aplhabetSeed(generateAllLetters('s'), 's')
  aplhabetSeed(generateAllLetters('t'), 't')
  aplhabetSeed(generateAllLetters('u'), 'u')
  aplhabetSeed(generateAllLetters('v'), 'v')
  aplhabetSeed(generateAllLetters('w'), 'w')
  aplhabetSeed(generateAllLetters('x'), 'x')
  aplhabetSeed(generateAllLetters('y'), 'y')
  aplhabetSeed(generateAllLetters('z'), 'z')
}

seedAlphabet()