// create shortURL 
const Url = require('../models/Url');
const shortid = require('shortid');

const shortenUrl = async (req , res) => {
  const originalUrl = req.body.originalUrl;
  if(!originalUrl){
    return res.status(404).json({
      success : false,
      message : 'URL is required!',
    });
  }

  try{
    const shortUrl = shortid.generate();
    const newUrl = new Url({originalUrl , shortUrl});
    await newUrl.save();
    res.status(201).json({
      success : true,
      message : 'Short Url created successfully!',
      originalUrl : originalUrl,
      shortUrl : shortUrl,
    });
  }
  catch(error){
    console.log(error);
    res.status(500).json({
      success : false,
      message : 'Some error occured!',
    });
  }
}

// redirect to the base route

const redirectUrl = async (req , res) => {
  const {shortUrl} = req.params;
  try{
    const url = await Url.findOne({shortUrl});
    if(!url){
      return res.status(404).json({
        success : false,
        message : 'Short Url not found!',
      });
    }

    url.clicks += 1;
    await url.save();

    res.redirect(url.originalUrl);
  }
  catch(error){
    res.status(500).json({
      success : false,
      message : 'Some error occured!',
    });
  }
}

module.exports = {
  shortenUrl , 
  redirectUrl,
};