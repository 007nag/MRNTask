var express=require('express');
var app=express();
app.get('/',function(req,res)
{
    console.log('fff');
res.send('Hello World!');

});
app.route('/Node',get(function(req,res)
{
    console.log('dd');
    res.send("Tutorial on Node");
}));

var server=app.listen(3001,function() {});
