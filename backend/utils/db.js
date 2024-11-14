const mongoose = require('mongoose');

const connectToDB = async (req , res) => {
  try{
    await mongoose.connect(process.env.URI);
    console.log('MongoDB connected successfully!');
  }
  catch(error){
    console.log('MongoDB connection failed' , error);
  }
}

module.exports = connectToDB;