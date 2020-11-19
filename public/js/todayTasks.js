/* eslint-disable vars-on-top */
/* eslint-disable no-var */

<<<<<<< HEAD
$.get("/api/todayTask/:day", data => {
=======
$.get("/api/todayTasks", data => {
>>>>>>> main
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
  }
});
