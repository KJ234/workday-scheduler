var time = moment();
$("#currentDay").text(time.format("dddd, MMMM Do YYYY, H:mm a"));

function changeColour() {
  var currentHour = moment().hours();

  $(".time-block").each(function () {
    var newHour = parseInt($(this).attr("id").split("hour")[1]);

    if (newHour < currentHour) {
      $(this).addClass("past");
    } else if (newHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
changeColour();
