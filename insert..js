var MongoClient = require('mongodb').ongoClient;
var url = " mongodb://127.0.0.1:27017/";

MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {
    if (err)
    {
        console.log(err);
        return;
    }
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err)
  {
      console.log(err);
      return;
  }
    console.log("1 document inserted");
    db.close();
  });
}); 