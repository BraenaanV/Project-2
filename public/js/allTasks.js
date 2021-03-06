/* eslint-disable vars-on-top */
/* eslint-disable no-var */

$.get("/api/allTasks", data => {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    var taskSection = $("<div>");

    taskSection.addClass("tasker");

    taskSection.attr("id", "task-well-" + i);

    $("#task-section").append(taskSection);

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
