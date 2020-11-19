/* eslint-disable no-var */
// Make a get request to our api route that will return every book
$.get("/api/allTasks", data => {
  console.log(data);
  // For each book that our server sends us back
  for (let i = 0; i < data.length; i++) {
    // Create a parent div to hold book data
    // eslint-disable-next-line vars-on-top
    var taskSection = $("<div>");
    // Add a class to this div: 'well'
    taskSection.addClass("tasker");
    // Add an id to the well to mark which well it is
    taskSection.attr("id", "task-well-" + i);
    // Append the well to the well section
    $("#task-section").append(taskSection);

    // Now  we add our book data to the well we just placed on the page
    $("#task-well-" + i).append(
      "<h2>" + (i + 1) + ". " + data[i].name + "</h2>"
    );
    $("#task-well-" + i).append(
      "<h5>Description: " + data[i].description + "</h5>"
    );
    $("#task-well-" + i).append("<h5>Due: " + data[i].dueDate + "</h5>");
    $("#task-well-" + i).append("<h5>Reminder: " + data[i].sendMail + "</h5>");
    // eslint-disable-next-line prettier/prettier
    $("#task-well-" +i).append("<button type=\"button\" id=\"delete\">Delete</button>");
  }
});

$("#delete").on("click", event => {
  event.preventDefault();
  $.delete("/api/allTasks/:id");
});
