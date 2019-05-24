
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://nag007:7777777!@cluster0-wiohs.mongodb.net/test?retryWrites=true";

MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {
    if (err)
    {
        console.log(err);
        return;
    }
  var dbo = db.db("quiz");
  var myobj = [
      {q:"How many colors are there in a rainbow?",a:7,t:"e",
    o1:8,o2:10,o3:20,o4:7},
    {q:"How many letters are there in the English alphabet?",a:26,t:"e",
    o1:28,o2:26,o3:17,o4:20},
    {q:"Which animal is known as the ‘Ship of the Desert?",a:"camel",t:"e",
    o1:"camel",o2:"lion",o3:"pig",o4:"dog"},
    {q:"What is a baby frog called?",a:"tadpole",t:"e",
    o1:"krikk",o2:"tadpole",o3:"cub",o4:"sime"},
    {q:"What grows quicker—hair or toenails?",a:"hair",t:"e",
    o1:"hair",o2:"toe-nails",o3:"both are equal",o4:"can't say"},
    {q:"Baby of a dog is called?",a:"puppy",t:"e",
    o1:"dunk",o2:"piglet",o3:"cub",o4:"puppy"},
    {q:"How many days are there in a normal year?",a:365,t:"e",
    o1:370,o2:102,o3:365,o4:400},
    {q:"How many days do we have in a week?",a:7,t:"e",
    o1:8,o2:6,o3:5,o4:7},
    {q:" Where does a pig live?",a:"sty",t:"e",
    o1:"kennel",o2:"sty",o3:"home",o4:"stable"},
    {q:"Which day comes after Friday?",a:"sat",t:"e",
    o1:"tue",o2:"mon",o3:"sun",o4:"sat"},
    {q:"How many consonants are there in the English alphabet?",a:21,t:"m",
    o1:25,o2:21,o3:23,o4:24},
    {q:"Which Saint’s Day is celebrated on 14th February?",a:"valentine",t:"m",
    o1:"rushmore",o2:"valentine",o3:"stooper",o4:"mander"},
    {q:"Which planet is known as the Red Planet?",a:"mars",t:"m",
    o1:"jupiter",o2:"venus",o3:"earth",o4:"mars"},
    {q:"Which of the following is not a metal: gold, resin, glass?",a:"resin",t:"m",
    o1:"resin",o2:"gold",o3:"glass",o4:"all of them"},
    {q:"What is the next number in the following sequence– 7, 14, 21, 28?",a:35,t:"m",
    o1:31,o2:32,o3:35,o4:36},
    {q:" What makes up (approx.) 80% of our brain’s volume?",a:"water",t:"m",
    o1:"co2",o2:"water",o3:"ethylene",o4:"butane"},
    {q:"Which instrument is used for measuring wind speed?",a:"anemometer",t:"m",
    o1:"anemometer",o2:"spigmamanometer",o3:"odometer",o4:"heptometer"},
    {q:"How many straight edges does a cube have?",a:12,t:"m",
    o1:10,o2:15,o3:12,o4:16},
    {q:"What is three-fifths of 50?",a:30,t:"m",
    o1:40,o2:30,o3:20,o4:10},
    {q:"What type of whale is the biggest animal in the world?",a:"blue",t:"m",
    o1:"pink",o2:"red",o3:"green",o4:"blue"},
    {q:"Can you name the country from where Parmesan cheese comes?",a:"italy",t:"h",
    o1:"america",o2:"china",o3:"india",o4:"italy"},
    {q:"What is the most popular sport throughout the world?",a:"soccer",t:"h",
    o1:"cricket",o2:"soccer",o3:"hockey",o4:"baseball"},
    {q:"What is the hottest continent on Earth?",a:"africa",t:"h",
    o1:"africa",o2:"india",o3:"china",o4:"america"},
    {q:"Which layer of planet Earth is made up of tectonic plates: Inner Core, Outer Core, Mantle, or Crust?",a:"crust",t:"h",
    o1:"inner core",o2:"outer core",o3:"mantle",o4:"crust"},
    {q:"Can you name the legendary Benedictine monk who invented champagne?",a:"dom",t:"h",
    o1:"dom",o2:"negil",o3:"john",o4:"centinel"},
    {q:"Which actress has won the most Oscars?",a:"Katherine",t:"h",
    o1:"christina",o2:"jennifer",o3:"langford",o4:"Katherine"},
    {q:"Which animal's brain is smaller than it's eye?",a:"Ostrich",t:"h",
    o1:"dog",o2:"Ostrich",o3:"mouse",o4:"raccon"},
    {q:"Which planet is the smallest: Neptune, Mars, Mercury, Saturn?",a:"mercury",t:"h",
    o1:"saturn",o2:"neptune",o3:"mercury",o4:"mars"},
    {q:"What is cube root of 1728?",a:12,t:"h",
    o1:12,o2:16,o3:14,o4:20},
    {q:"What is the immediate prime number after 31",a:37,t:"h",
    o1:39,o2:33,o3:41,o4:37},
  ];
  dbo.collection("que").insertMany(myobj, function(err, res) {
    if (err)
  {
      console.log(err);
      return;
  }
    console.log("1 document inserted");
    db.close();
  });
}); 