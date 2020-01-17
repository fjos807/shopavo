const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin:admin@cluster0-y9jep.azure.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri)
    .then(db => console.log("DB connected"));

module.exports = mongoose;