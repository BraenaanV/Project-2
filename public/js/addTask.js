/* eslint-disable no-var */
// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", event => {
  event.preventDefault();

  // Make a newBook object
  // eslint-disable-next-line vars-on-top
  var newTask = {
    name: $("#name")
      .val()
      .trim(),
    description: $("#desc")
      .val()
      .trim(),
    dueDate: $("#duedate")
      .val()
      .trim(),
    sendMail: $("#email")
      .val()
      .trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/addtasks", newTask)
    // On success, run the following code
    .then(data => {
      // Log the data we found
      console.log(data);
      alert("Task added! Check all tasks!");
    });

  // Empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#description").val("");
  $("#duedate").val("");
  $("#email").val("");
});
