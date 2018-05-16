// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
// var PORT = 3000;
var PORT = process.env.PORT || 3000


// Sets up the Express app to handle data parsing
//

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.json({ type: "application/json" }));


// Routes
//

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);
  

// Starts the server to begin listening
//
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });









// Questions: //
// How do I console log a test so I know my Routin' pages are workin'?
// How do I console log the JSON data from friends.js?
// In htmlRoutes.js, can the address bar be refreshed when returned to home?


// Issues: //
// The logic for comparing friends not working.  Always returns the first object in friends array
// Form isn't submitting Name and Pic data.  Question values do get pushed to friends array.
// Getting 500 error on submit


// Resolved Issues: //
// Need to add the logic for comparing the friends data; Perhaps subtracting the form data answers from individual lineup entries, then if the difference is less than 20points, the lineup entry is a match.  
// Clicking the Friend List (api/friends) link on the homepage doesn't return a page with JSON data.  Found the issue with the htmlRoutes.js file by commenting out the routes.  Also used res.json({title: "Hello World!"}) instead of calling the friendsData array
// Route to the survey page wasn't working.  Fixed by matching exactly /survey on server.js to /survey on home.html
// After pushing html routes from server.js to htmlRoutes.js page, rec'd error: TypeError: require(...) is not a function.  Corrected the htmlRoutes.js path by removing /app
// Error: Cannot find module '.routing/htmlRoutes.' Corrected by adding the correct path ./app


// Stretch Goals: //
// Have an admin page to delete user data
// Return about page with the matched friends answers after modal popup