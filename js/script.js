const $location = $('#location');
const $temp = $('#temp');
const $feels = $('#feels');
const $weather = $('#weather');
const $input = $('input[type="text"]');
let userInput;

$("form").on("submit", handleGetData)

function handleGetData(event) {
    event.preventDefault()
    userInput = $input.val();
    $.ajax({
        url: `http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=1&appid=8f795061fa1c7a09f92221bad59a9faa`
    }).then(
        (data) => {
            lat = data[0]['lat']
            lon = data[0]['lon']
            apply();
        },
        (error) => {
            console.log("bad request", error)
        }
    )
}

function render() {
    $weather.text(`Weather: ${mainWeather}`)
    $feels.text(`Feels Like: ${feelsLike} F`)
    $temp.text(`Temperature: ${tempNow} F`)
    $location.text(`Weather For: ${userInput}`)
}