// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/allTasks", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/tasks");
    }
    res.sendFile(path.join(__dirname, "../public/allTasks.html"));
  });

  app.get("/t", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/tasks2");
    }
    res.sendFile(path.join(__dirname, "../public/todayTasks.html"));
  });

  app.get("/addtasks", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/addtasks");
    }
    res.sendFile(path.join(__dirname, "../public/addtasks.html"));
  });

  app.get("/logout", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/logout");
    }
    res.sendFile(path.join(__dirname, "../public/logout.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
};
