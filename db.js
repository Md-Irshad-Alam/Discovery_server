const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const config  = require('./config/config');
async function connectDatabase() {

    const result = await mongoose.connect(`mongodb+srv://${config.username}:${config.password}@cluster0.zkhcgoa.mongodb.net/?retryWrites=true&w=majority`);
    console.log(" connected")
    return result;
  }
  
  

module.exports = connectDatabase;