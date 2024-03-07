//  function buttonClicked(){

//     var strMeal = document.getElementById("searchData").value//get the searched value

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=[city]&appid=9fd7a449d055dba26a982a3220f32aa2=${strMeal}`)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//         // document.getElementById("strMeal").innerHTML = data.meals[0].strMeal
//         document.getElementById("strArea").innerHTML = data.meals[6].strArea
//         document.getElementById("strYoutube").innerHTML = "Watch:" + data.meals[0].strYoutube
//         document.getElementById("strMealThumb").innerHTML = data.meals[6].strMealThumb
//         document.getElementById("strInstructions").innerHTML = "Instructions" + data.meals[6].strInstructions

//     })
// }