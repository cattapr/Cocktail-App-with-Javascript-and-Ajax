const searchCocktail = document.getElementById('searchCocktail');

searchCocktail.addEventListener('change', () => {
  const searchValue = searchCocktail.value;
  getCocktailByName(searchValue);
})  


//function calling API to get random cocktail on click


function getrandomCocktail(){
	
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then((response) => response.json())
    .then((cocktailData) =>  {
      displayrandomCocktail(cocktailData)
      console.log(cocktailData)
    })
    .catch((error) => {
      console.log(error);
    })
}


//function calling API to search cocktail by name 
function getCocktailByName(cocktail = "Mojito"){
	fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
    .then((response) => response.json())
    .then((cocktailData) =>  {
     	displayinputvalue(cocktailData)
    })
    .catch((error) => {
      console.log(error);
    })
}


//Function that prints out cocktailinfo when clicking on moodbuttons
function displayrandomCocktail(cocktailData){
  const { drinks } = cocktailData;
  const cocktailInfoElement = document.getElementById('cocktailInfo');
  let cocktailInfo = `
    <h4 class="cocktailName"> ${drinks[0].strDrink} </h4>
    <img class="drinkThumb" src= "${drinks[0].strDrinkThumb}">
    <p>Type of glass: ${drinks[0].strGlass}</p>
    <p>How to make: </br>
    ${drinks[0].strMeasure1} of ${drinks[0].strIngredient1}<br>
    ${drinks[0].strMeasure2} of ${drinks[0].strIngredient2}<br>
    ${drinks[0].strMeasure3} of ${drinks[0].strIngredient3}<br>
    ${drinks[0].strInstructions}</p>

  `;
  cocktailInfoElement.innerHTML = cocktailInfo;
}


//Function that prints out cocktailinfo by input value
function displayinputvalue(cocktailData){
  const { drinks } = cocktailData;
  const cocktailInfoElement = document.getElementById('cocktailInfo');
  let cocktailInfo = `
    <h4 class="cocktailName"> ${drinks[0].strDrink} </h4>
    <img class="drinkThumb" src= "${drinks[0].strDrinkThumb}">
    <p>Type of glass: ${drinks[0].strGlass}</p>
    <p>How to make: </br>
    ${drinks[0].strMeasure1} of ${drinks[0].strIngredient1}<br>
    ${drinks[0].strMeasure2} of ${drinks[0].strIngredient2}<br>
    ${drinks[0].strMeasure3} of ${drinks[0].strIngredient3}<br>
    ${drinks[0].strInstructions}</p>

  `;
  cocktailInfoElement.innerHTML = cocktailInfo;
}






