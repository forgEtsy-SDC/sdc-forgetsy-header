var faker = require('faker')
var fs = require('fs');


var writeStream = fs.createWriteStream('./output.txt')
function addMilliion () {
    let array = []
    let next = 10000000
    for(var i = 0; i <= 10000000; i++){
        let obj = {
            listing_id: i,
            title: faker.commerce.product()
        }
        array.push(obj)
        if(i === next){
            console.log(next)
            writeStream.write(JSON.stringify(array))
            array = [];
            next += 10000000;
        }
    }
}
addMilliion();
writeStream.end()
console.log('done')