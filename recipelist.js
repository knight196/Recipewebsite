function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector('.navtop').classList.toggle('show');
  }



getRandomMeal();

const favorite = document.getElementById('favorite');

const serachterm = document.getElementById('searchterm');
const search = document.getElementById('search');

const mealpopup = document.getElementById('mealpopup');

const popupclose = document.getElementById('closepopup');

const mealinfo = document.getElementById('mealinfo');

async function getRandomMeal(){
const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');

const respData = await resp.json();

const randomMeal = respData.meals[0];


addMeal(randomMeal, true);

}

async function getMealsBySearch(term){
 const resp = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + term);

 const respData = await resp.json();
 const meals = respData.meals;

 return meals;

}
function addMeal(mealData){
    const meal = document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML = `  
    <ul class="meal-body">
    <li>
    <img src="${mealData.strMealThumb}">
    <h3>${mealData.strMeal}</h3>
        </li>
    
    </ul>
    `;

meal.querySelector('.meal-body').addEventListener('click', () => {
    showMealInfo(mealData);
   
});

favorite.appendChild(meal);
}



search.addEventListener('click', async () => {

    favorite.innerHTML ="";
    
const search = searchterm.value;

const meals = await getMealsBySearch(search);

if(meals){
meals.forEach((meal) => {
    addMeal(meal);
    var meal = document.querySelectorAll('.meal-body');
    var foodcard = document.querySelectorAll('.card');
    for(var i=0; i<meal.length; i++){
        meal[i].style.display="block";
        foodcard[i].style.display="none";
    }
});
}
});


popupclose.addEventListener('click', () => {
mealpopup.classList.add('hidden');
});

function showMealInfo(mealData){
    mealinfo.innerHTML = "";
    const mealInfoel = document.createElement('div');

    mealInfoel.innerHTML = `
    <h1>${mealData.strMeal}</h1>
    <img src="${mealData.strMealThumb}">

    <p>${mealData.strInstructions}</p>

    <div class="ingredients">
    <h3>Ingredients</h3>
    <ol>
    <li>${mealData.strIngredient1}</li>
    <li>${mealData.strIngredient2}</li>
    <li>${mealData.strIngredient3}</li>
    <li>${mealData.strIngredient4}</li>
    <li>${mealData.strIngredient5}</li>
    <li>${mealData.strIngredient6}</li>
    <li>${mealData.strIngredient7}</li>
    <li>${mealData.strIngredient8}</li>
    <li>${mealData.strIngredient9}</li>
    </ol>
    </div>
`

    mealinfo.appendChild(mealInfoel);

    mealpopup.classList.remove('hidden');
}