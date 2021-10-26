var mongoose =  require('mongoose');



const Fruitschema = new mongoose.Schema({
    name: String, 
    price: Number
});


const Fruit =  new mongoose.model('Fruit', Fruitschema); 

module.exports = { Fruit };