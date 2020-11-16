var APIKey = "0frYwJBhc2xWZE7feiXgfbS89kzGKeSE";
var queryURL = "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=0frYwJBhc2xWZE7feiXgfbS89kzGKeSE";



function getNews(results) {
  
   

}

$("#run-search").on("click", function (response) {
    
    $.ajax({
        url: "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=0frYwJBhc2xWZE7feiXgfbS89kzGKeSE",
        method: "GET"
    }).then(response => {
    console.log(response.results);
    for (var i = 1; i < 5; i++) {

        var article = response.results[i];
        var $articleList = $("<ul>");
        $articleList.addClass("list-group");
        $("#today-cont").append($articleList);
        var $articleListItem = $("<li class='list-group-item articleHeadline'>");
        $articleListItem.append("<a href='" + article.url + "'>" + article.url + "</a>");
        console.log(article.web_url);
        $articleList.append($articleListItem);
    }
    })
});


//Weather logic
var dayOf = document.getElementById("to-Day");
var dateOf = document.getElementById("to-Date");
var formatDay = moment().format('dddd');
var formatDate = moment().format("MMMM Do YYYY");

function getDay() {
    dayOf.textContent = formatDay;
    dateOf.textContent = formatDate;
};
getDay();

var APIKey = "1d885c7bf9c1a3c6f39c0d44c2182d2f";
var queryURL = "";
var queryUV ="";

var city = document.getElementById("city");
var longi = 0;
var lati = 0;

function currentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lati = position.coords.latitude; 
            longi = position.coords.longitude;

            queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lati + "&lon=" + longi + "&appid=" + APIKey;
            queryUV = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey +
        "&lat=" + lati + "&lon=" + longi;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            city.textContent = response.name;
            console.log(response.name);
            $("#temperature").text("Temperature: " + Math.floor((response.main.temp - 273.15) * 1.8 + 32) + " F");
            $("#humidity").text("Humidity: " + response.main.humidity + "%");
            $("#wind").text("Wind: " + Math.floor(response.wind.speed * 2.237) + " mph");
            
        })
        $.ajax({
            url: queryUV,
            method: "GET"
          }).then(function(response){
              var ultra = response.value;
              console.log(response);
            $("#vally").text(ultra); 
          });

        })

        // 4-Day forecast
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + lati + "&lon=" + longi + "&exclude=minutely,hourly&appid=1d885c7bf9c1a3c6f39c0d44c2182d2f",
            method: "GET"
        }).then(function(response) {
            //console.log(response.daily[2].wind.speed)
            for (var i = 1; i < 5; i++) {
                $("#forecast"+i+" #foredate").text(new Date(response.daily[i].dt * 1000).toLocaleDateString("en-US"));
                $("#forecast"+i+" #foretemperature").text("Temeperature: " + Math.floor((response.daily[i].temp.max - 273.15) * 1.8 + 32) + "F");
                $("#forecast"+i+" #forehumidity").text("Humidity: " + response.daily[i].humidity + "%");
                $("#forecast"+i+" #foredesc").html('<img src="http://openweathermap.org/img/wn/' + response.daily[i].weather[0].icon + '@2x.png">');
            }
        })

    } else {
        city.textContent = "location unknown.";
    }
}
currentLocation();