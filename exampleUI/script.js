$("#run-search").on("click", () => {
  $.ajax({
    url:
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=0frYwJBhc2xWZE7feiXgfbS89kzGKeSE",
    method: "GET"
  }).then(response => {
    console.log(response.results);
    for (let i = 1; i < 5; i++) {
      const article = response.results[i];
      const $articleList = $("<ul>");
      $articleList.addClass("list-group");
      $("#today-cont").append($articleList);
      const $articleListItem = $(
        "<li class='list-group-item articleHeadline'>"
      );
      $articleListItem.append(
        "<a href='" + article.url + "'>" + article.url + "</a>"
      );
      console.log(article.web_url);
      $articleList.append($articleListItem);
    }
  });
});

//Weather logic
const dayOf = document.getElementById("to-Day");
const dateOf = document.getElementById("to-Date");
const formatDay = moment().format("dddd");
const formatDate = moment().format("MMMM Do YYYY");

function getDay() {
  dayOf.textContent = formatDay;
  dateOf.textContent = formatDate;
}
getDay();

const APIKey = "1d885c7bf9c1a3c6f39c0d44c2182d2f";

let queryUV = "";

const city = document.getElementById("city");
let longi = 0;
let lati = 0;

function currentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      lati = position.coords.latitude;
      longi = position.coords.longitude;

      const queryURL =
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lati +
        "&lon=" +
        longi +
        "&appid=" +
        APIKey;
      queryUV =
        "https://api.openweathermap.org/data/2.5/uvi?appid=" +
        APIKey +
        "&lat=" +
        lati +
        "&lon=" +
        longi;
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(response => {
        city.textContent = response.name;
        console.log(response.name);
        $("#temperature").text(
          "Temperature: " +
            Math.floor((response.main.temp - 273.15) * 1.8 + 32) +
            " F"
        );

        $("#humidity").text("Humidity: " + response.main.humidity + "%");
        $("#wind").text(
          "Wind: " + Math.floor(response.wind.speed * 2.237) + " mph"
        );
      });
      $.ajax({
        url: queryUV,
        method: "GET"
      }).then(response => {
        const ultra = response.value;
        console.log(response);
        $("#vally").text(ultra);
      });
    });

    // 4-Day forecast
  }
}

currentLocation();
