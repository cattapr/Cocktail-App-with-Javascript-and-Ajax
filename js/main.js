//global variabel, get inputvalue despite of it changing 
const searchCocktail = document.getElementById('searchCocktail');

searchCocktail.addEventListener('change', () => {
    const searchValue = searchCocktail.value;
    getCocktailByName(searchValue);
})



//function calling API to get random cocktail 
function getrandomCocktail() {

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then((response) => response.json())
        .then((cocktailData) => {
            displayrandomCocktail(cocktailData)
            console.log(cocktailData)
        })
        .catch((error) => {
            console.log(error)
        })
}

//function calling API to search cocktail by name 
function getCocktailByName(cocktail) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
        .then((response) => response.json())
        .then((cocktailData) => {
            displayinputvalue(cocktailData)
        })
        .catch((error) => {
            if (document.getElementById("searchCocktail").value == "") {
                showErrMsg(error)
            } else {
                hideErrMsg(error)
            };
        })
}


//Function that prints out cocktailinfo when clicking on moodbuttons
function displayrandomCocktail(cocktailData) {
    const { drinks } = cocktailData;
    const cocktailpictureElement = document.getElementById('cocktailPicture');
    let cocktailPicture = `
    <img class="drinkThumb" src= "${drinks[0].strDrinkThumb}">
  `;

    cocktailpictureElement.innerHTML = cocktailPicture;

    const cocktailInfoElement = document.getElementById('cocktailInfo');
    let result = '';
    for (var i = 1; i <= 15; i++) {


        let measures = 'strMeasure' + i;
        let ingridients = 'strIngredient' + i;
        if ((drinks[0][measures]) && (drinks[0][ingridients]) !== " ") {
            result = drinks[0][measures] + ' ' + drinks[0][ingridients];

            let info = `<li>${drinks[0][measures]} ${drinks[0][ingridients]}</li>`

            cocktailInfoElement.innerHTML = info;


            console.log(result)
        };
    }

    /*let cocktailInfo = `
    <h4 class="cocktailName"> ${drinks[0].strDrink} </h4>
    <p>Type of glass: <br> ${drinks[0].strGlass}</p>
    <p>How to make:</p>
    <p>${drinks[0].strMeasure1} ${drinks[0].strIngredient1}<br>
    ${drinks[0].strMeasure2} ${drinks[0].strIngredient2}<br>
    ${drinks[0].strMeasure3} ${drinks[0].strIngredient3}<br>
    <br>${drinks[0].strInstructions}</p>
    `;
*/


}


//Function that prints out cocktailinfo by input value
function displayinputvalue(cocktailData) {
    const { drinks } = cocktailData;
    const cocktailpictureElement = document.getElementById('cocktailPicture');
    let cocktailPicture = `
    <img class="drinkThumb" src= "${drinks[0].strDrinkThumb}">
  `;

    cocktailpictureElement.innerHTML = cocktailPicture;

    const cocktailInfoElement = document.getElementById('cocktailInfo');
    let cocktailInfo = `
    <h4 class="cocktailName"> ${drinks[0].strDrink} </h4>
    <p>Type of glass: <br> ${drinks[0].strGlass}</p>
    <p>How to make:</p>
    <p>${drinks[0].strMeasure1} ${drinks[0].strIngredient1}<br>
    ${drinks[0].strMeasure2} ${drinks[0].strIngredient2}<br>
    ${drinks[0].strMeasure3} ${drinks[0].strIngredient3}<br>
    <br>${drinks[0].strInstructions}</p>
    `;

    cocktailInfoElement.innerHTML = cocktailInfo;

}

//Button shake
$(document).ready(function() {
    $("#shakebutton").click(function() {
        $("#shakebutton").effect("shake", { times: 3 }, 450);
    });
});


//Error display when searchvalue is empty and shake button has been clicked

function showErrMsg(error) {
    const errorDivElement = document.getElementById('errormsg');
    const errormsg = `<p class="errormsg">You haven't told me what you want to drink.</p>`
    errorDivElement.innerHTML = errormsg;
};

function hideErrMsg(error) {
    const errorDivElement = document.getElementById('errormsg');
    errorDivElement.innerHTML = "";
};