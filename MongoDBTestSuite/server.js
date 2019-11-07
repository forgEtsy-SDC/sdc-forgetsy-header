var faker = require('faker')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('connected')
})

const productSchema = new mongoose.Schema({
    listing_id: {
      // <-- product id
      type: Number,
      unique: true
    },
    title: String
  });



  const Products = mongoose.model("Products", productSchema);
  var count = 0

  


// function addMilliion (counter) {
//     let array = []
//     let previous = counter - 99999
//     for(var i = previous; i <= counter; i++){
//         let obj = {
//             listing_id: i,
//             title: faker.commerce.product()
//         }
//         array.push(obj);
//       }

//   productsSave(array)
//   array = [];
// }

// addMilliion(counter);
// console.log('done')


function generateAllLetters (char) {
  let storage = '['
  storage += `{
    "listing_id": ${count},
    "title": "${char}"
  }, `
  count++
  function generateLetter (string) {
    if(string.length < 5){
      storage += `{
        "listing_id": ${count},
        "title": "${string + 'a'}"
      }, `
    count++
    generateLetter(string + 'a')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'b'}"
    }, `
    count++
    generateLetter(string + 'b')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'c'}"
    }, `
    count++
    generateLetter(string + 'c')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'd'}"
    }, `
    count++
    generateLetter(string + 'd')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'e'}"
    }, `
    count++
    generateLetter(string + 'e')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'f'}"
    }, `
    count++
    generateLetter(string + 'f')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'g'}"
    }, `
    count++
    generateLetter(string + 'g')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'h'}"
    }, `
    count++
    generateLetter(string + 'h')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'i'}"
    }, `
    count++
    generateLetter(string + 'i')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'j'}"
    }, `
    count++
    generateLetter(string + 'j')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'k'}"
    }, `
    count++
    generateLetter(string + 'k')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'l'}"
    }, `
    count++
    generateLetter(string + 'l')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'm'}"
    }, `
    count++
    generateLetter(string + 'm')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'n'}"
    }, `
    count++
    generateLetter(string + 'n')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'o'}"
    }, `
    count++
    generateLetter(string + 'o')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'p'}"
    }, `
    count++
    generateLetter(string + 'p')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'q'}"
    }, `
    count++
    generateLetter(string + 'q')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'r'}"
    }, `
    count++
    generateLetter(string + 'r')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 's'}"
    }, `
    count++
    generateLetter(string + 's')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 't'}"
    }, `
    count++
    generateLetter(string + 't')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'u'}"
    }, `
    count++
    generateLetter(string + 'u')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'v'}"
    }, `
    count++
    generateLetter(string + 'v')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'w'}"
    }, `
    count++
    generateLetter(string + 'w')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'x'}"
    }, `
    count++
    generateLetter(string + 'x')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'y'}"
    }, `
    count++
    generateLetter(string + 'y')
    storage += `{
      "listing_id": ${count},
      "title": "${string + 'z'}"
    }, `
    count++
    generateLetter(string + 'z')
    }
  }
  generateLetter(char)
  storage = storage.replace(/, $/, ' ]')
  return storage;
  }
  
  // console.log(JSON.parse(generateAllLetters('a')))
  
  function aplhabetSeed1 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed2(generateAllLetters('b'), 'b')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed2 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed3(generateAllLetters('c'), 'c')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed3 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed4(generateAllLetters('d'), 'd')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed4 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed5(generateAllLetters('e'), 'e')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed5 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed6(generateAllLetters('f'), 'f')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed6 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed7(generateAllLetters('g'), 'g')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed7 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed8(generateAllLetters('h'), 'h')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed8 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed9(generateAllLetters('i'), 'i')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed9 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed10(generateAllLetters('j'), 'j')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed10 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed11(generateAllLetters('k'), 'k')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed11 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed12(generateAllLetters('l'), 'l')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed12 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed13(generateAllLetters('m'), 'm')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed13 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed14(generateAllLetters('n'), 'n')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed14 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed15(generateAllLetters('o'), 'o')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed15 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed16(generateAllLetters('p'), 'p')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed16 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed17(generateAllLetters('q'), 'q')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed17 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed18(generateAllLetters('r'), 'r')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed18 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed19(generateAllLetters('s'), 's')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed19 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed20(generateAllLetters('t'), 't')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed20 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed21(generateAllLetters('u'), 'u')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed21 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed22(generateAllLetters('v'), 'v')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed22 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed23(generateAllLetters('w'), 'w')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed23 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed24(generateAllLetters('x'), 'x')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed24 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed25(generateAllLetters('y'), 'y')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed25 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          products = []
          aplhabetSeed26(generateAllLetters('z'), 'z')
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
  function aplhabetSeed26 (products, char) {
    products = JSON.parse(products)
      Products.insertMany(products, { ordered: false, bypassDocumentValidation: true })
        .then(data => {
          console.log(char);
          return data;
        })
        .catch(err => {
          console.log("...product saving err... ");
        });
    };
   
  
  
  
  function seedAlphabet () {
    aplhabetSeed1(generateAllLetters('a'), 'a')
  }
  
  seedAlphabet()