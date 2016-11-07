// REQUIREMENTS
var express = require('express'),
  app = express();

//DATA (temporary until we know how to use databases)
var burgers = [
  'Hamburger',
  'Cheese Burger',
  'Vegetable Burger'
];

var tacos = [
  'Soft Taco',
  'Crunchy Taco',
  'Super Taco'
];

// ROUTES
app.get("/", function (request, response) {
  response.send("Hello World");
});

app.get("/api/burgers", function (request, response) {
  //send all the burgers
  response.json(burgers);
});

app.get("/api/tacos", function (request, response) {
  //send all the tacos
  response.json(tacos);
});


//say hello to anyone
app.get("/greet/:name", function (request, response) {
  response.send( "Hello, " + request.params.name );
});
//pick a color
app.get('/pick-a-color/:choice', function(request, response){
  var choice = request.params.choice; //gets our color
  response.send('Your color is: ' + choice);
});

//say thanks to a name by thanks?name= 'whatever name you want'
app.get("/thank", function (request, response) {
  console.log(request.query);
  var name = request.query.name;
  response.send('Thank you, ' + name + '!');
});

//takes in two numbers and multiplies them
app.get("/mult", function (request, response) {
  console.log(request.query);
  var x = request.query.x;
  var y = request.query.y;
  var total = x*y;
  response.send(total + ' is the result');
});

//takes in two numbers and adds them
app.get("/add", function (request, response) {
  console.log(request.query);
  var a = request.query.a;
  var b = request.query.b;
  //use parseInt so it doesnt just combined them as if they were strings
  var sum = parseInt(a)+parseInt(b);
  response.send(sum + ' is the result');
});

//selects a single element in the 'taco' array rather than all of them
app.get('/api/tacos/:id', function(request, response){
  var index = request.params.id;
  var selection = tacos[index] || "Sorry, that's not a taco option";
  response.json( selection );
});




// SERVER START
app.listen(3000, function () {
  console.log("HTTP server listening at localhost:3000");
});
