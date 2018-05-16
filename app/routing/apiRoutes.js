'use strict';
var path = require("path");
// Data
// The data sources hold arrays of friends info
// 
var friendData = require("../data/friends");

// console.log(friendData);

// Routin'
//
module.exports = function(app) {
    // API GET requests
    // This code handles when users visit a page
    // Users show JSON of the data in the table
    // Return friends.js as JSON
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
        // return res.json(friendData);
        // res.json({title: "Hello World!"})
        // res.end();
    });


    // Put form data into friends table
    // 
    app.post("/api/friends", function(req, res) {
        
        // var newHottieAnswers = req.body.answers;
        console.log(req.body.answers);
        var answersArray = [];
        var bestMatch = 0;

        for (let i=0; i<friendData.length; i++) {
            let answersDif = 0
            // for (h = 0; h < newHottieAnswers.length; h++) {
            for (let h = 0; h < req.body.answers.length; h++) {
                answersDif += Math.abs(parseInt(friendData[i].answers[h]) - parseInt(req.body.answers[h]));
            }
            console.log(answersDif);
            // Push the answers to the answers array
            answersArray.push(answersDif);
        }

        // Compare to find a match
        for(let f = 0; f < answersArray.length; f++) {
            if (answersArray[f]
            <= answersArray[bestMatch]) {
                bestMatch = f;
            }
        }
        console.log(bestMatch);

        // Return bestMatch data
        var hottie = friendData[bestMatch];
        res.json(hottie);

        // push form data to the friendData array
        friendData.push(req.body);

    });
};



// Heed this advice now: "A humble learner is the most ready learner."






////=========================////
// Old code //
//
    // app.get("/api/lineup", function(req, res) {
    //     res.json(tableData);
    // });

    // API POST requests
    // Submit data to server from user form submittal
    // form data is a JSON object
    // the JSoN is pushed to the JavaScript array
    //

    // PsuedoCode below to compare the user form data with the lineup of previous entries
    //
    // app.post("/api/friends", function(req, res) {
        // Perhaps subtracting the form data answers from individual lineup entries, then if the difference is less than 20points, the lineup entry is a match
     //   if (friendData.length - lineupData[i].length < 20) {
     //   friendData.push(req.body);
     //   res.json(true)
    // }
        // else return no matches if no matches
        // else {
            // res.json(false);
        // })


        //app.post("/api/friends", function(req, res) {
        // Push the form data to the lineup table with req.body using body-parser middleware
        // lineup.push(req.body);
        // Inform user on form submittal
        // res.json(true);
    //});