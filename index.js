var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "75fc2b2f4395da84252dd473bbe61a3a"
function conversion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function()
{
    https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())
    .then(data=> 
    {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempature = data['main']['temp']
        var windspeed = data['wind']['speed']

        city.innerHTML="Weather of "+nameval
        descrip.innerHTML="Description: "+descrip
        temp.innerHTML="Temperature: "+conversion(tempature)+' C'
        wind.innerHTML="Wind Speed: "+windspeed+" m/s"
    })
    .catch(err => alert('You entered wrong city name'))
})