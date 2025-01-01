//  https://api.openweathermap.org/data/2.5/weather?q=London&appid=27e63bfd3f37cb8538164e88e7735289

let form= document.getElementById("form")
console.log(form)
form.addEventListener("submit",function(e){
e.preventDefault();
let search = document.querySelector(".SearchInput")
let city = search.value
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=27e63bfd3f37cb8538164e88e7735289`).then((res)=>{
    return res.json()
}).then((data)=>{
console.log(data)
let temps = document.querySelector(".temps")
let Humidity= document.querySelector(".Humidity")
let visibility= document.querySelector(".visibility")
let scales=document.querySelector(".scale")
temps.innerText = data.main.temp;
Humidity.innerText=data.main.humidity;
visibility.innerText=data.visibility;
scales.innerText=data.main.feels_like;
})
})







    








