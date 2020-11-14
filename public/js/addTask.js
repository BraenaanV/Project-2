// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", event => {
  event.preventDefault();

  // Make a newBook object
  const newTask = {
    title: $("#name")
      .val()
      .trim(),
    description: $("#desc")
      .val()
      .trim(),
    dueDate: $("#duedate")
      .val()
      .trim(),
    setReminder: $("#email")
      .val()
      .trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newTask)
    // On success, run the following code
    .then(data => {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#description").val("");
  $("#duedate").val("");
  $("#reminder").val("");
});
