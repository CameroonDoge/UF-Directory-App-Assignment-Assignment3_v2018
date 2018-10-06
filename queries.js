/* Add all the required libraries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    listings = require('./listings.json'),
    util = require('util');

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri);
var myModel = mongoose.model('Listing', Listing.Listing);

/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  myModel.findOne({'name' : 'Library West'}, function(err, result){
    if(err)
      throw(err);
    //debugger;
    console.log(result);
  })
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  myModel.findOneAndRemove({'code' : 'CABL'}, function(err, result){
    if(err)
      throw(err);
    console.log(result);
  })
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  // Please note, in my listings.json there doesn't actually appear to be a Phelps Memorial Hospital
  // I don't know if this is just leftover from when this activity was being updated.
  // I ended up just looking for Phelps Laboratory
  myModel.findOneAndUpdate({'code' : 'PHL'}, {'address' : 'NewAddress'}, {new : true}, function(err, result){
    if(err)
      throw(err);
    debugger;
    console.log(result);
  })
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  myModel.find({}, function(err, result){
    if(err)
      throw(err);
    // print ALL of the results
    console.log(util.inspect(result, {maxArrayLength: null}));
  })
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();