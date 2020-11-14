// Make a get request to our api route that will return every book
$.get("/api/all-tasks", data => {
  // For each book that our server sends us back
  for (let i = 0; i < data.length; i++) {
    // Create a parent div to hold book data
    const viewSection = $("<div>");
    // Add a class to this div: 'well'
    viewSection.addClass("well");
    // Add an id to the well to mark which well it is
    viewSection.attr("id", "task-well-" + i);
    // Append the well to the well section
    $("#view-section").append(viewSection);

    // Now  we add our book data to the well we just placed on the page
    $("#book-well-" + i).append(
      "<h2>" + (i + 1) + ". " + data[i].name + "</h2>"
    );
    $("#task-well-" + i).append("<h5>Description: " + data[i].desc + "</h5>");
    $("#task-well-" + i).append("<h5>Genre: " + data[i].duedate + "</h5>");
    $("#task-well-" + i).append("<h5>Reminder: " + data[i].email + "</h5>");
  }
});
