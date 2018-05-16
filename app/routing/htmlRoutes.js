// Dependencies
// We need to include the path package to get the correct file to our html

var path = require("path");

// Routing

module.exports = function(app) {
    //HTML GET Requests
    //  The code below handles when users visit a page
    //  In each of the code below the user is shown an HTML page of the content


    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html")); 
    });

    // When no matching route is found default to the HOME page.
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });
// ? means stuff after it is optional
   
};

// Intensity is no substitute for consisitency