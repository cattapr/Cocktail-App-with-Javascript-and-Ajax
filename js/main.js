const searchCocktail = document.getElementById('searchCocktail');

searchCocktail.addEventListener('change', () => {
  const searchValue = searchCocktail.value;
  getCocktailByName(searchValue);
})  


//function calling API to get random cocktail on click
  getrandomCocktail();

function getrandomCocktail(){

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then((response) => response.json())
    .then((cocktailData) =>  {
      console.log(cocktailData)
    })
    .catch((error) => {
      console.log(error);
    })
}


//function calling API to search cocktail by name 
getCocktailByName();

function getCocktailByName(cocktail = "Mojito"){
	fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
    .then((response) => response.json())
    .then((cocktailData) =>  {
      console.log(cocktailData)
    })
    .catch((error) => {
      console.log(error);
    })
}



