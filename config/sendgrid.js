// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const db = require("../models");

function sendMail() {
  const currentTasks = [];

  setTasks();

  function setTasks() {
    db.Task.findAll({
      where: {
        sendMail: true
      },
      attributes: ["name"]
    })
      .then(task => {
        currentTasks.push(task);
      })
      .then(emailMe());
  }

  function emailMe() {
    const user = "taskm404@gmail.com";

    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: user, // Change to your recipient
      from: "taskm404@gmail.com", // Change to your verified sender
      subject: "Tasks for today!",
      text: "Your tasks are:",
      html:
        "<strong> Hello! Your tasks for today are:" +
        "<br></br>" +
        currentTasks[0] +
        "<br></br>" +
        currentTasks[1] +
        "<br></br>" +
        currentTasks[2] +
        "<br></br>" +
        currentTasks[3] +
        "<br></br>" +
        currentTasks[4] +
        "</strong>"
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch(error => {
        console.error(error);
      });
  }
}

module.exports = sendMail;
