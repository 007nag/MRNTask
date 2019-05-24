/*var MongoClient = require('mongodb').MongoClient;
var url = " mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
  if (err) 
  {
    console.log(err); return;
  } 
  console.log("Database created!");
  db.close();
});*/
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://nag007:7777777!@cluster0-wiohs.mongodb.net/test?retryWrites=true";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) 
  {
    console.log(err);return;
  }
  var dbo = db.db("quiz");
  dbo.collection("que").find({}).toArray(function(err, result) {
    if (err) 
  {
    console.log(err);return;
  }

    console.log(result);
    db.close();
  });
}); 


