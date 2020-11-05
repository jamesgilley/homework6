var buttonSub = document.getElementById("submit")
var cityDiv = document.getElementById("cityStor")
cityStor()
console.log("loaded")
function myFunction(event) {
event.preventDefault();
userInput = document.getElementById('cityName').value;
//console.log(e)
console.log(userInput);
localStorage.setItem("city", userInput)
cityStor()
}


function cityStor(){
var previosCity = localStorage.getItem("city")
//push previos city into an array define globally, append arrey,use jsonparse and json strinafy so you can take out and loop through
//unit 4 activity 28 
cityDiv.append(previosCity)

}

//unit 4 web apis activity 11
buttonSub.addEventListener("click", myFunction)

