function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector('.navtop').classList.toggle('show');
    document.querySelector('main').classList.toggle('show');
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

document.querySelector('.favorite').classList.add('show');
});
}
});


popupclose.addEventListener('click', () => {
mealpopup.classList.add('hidden');
});

function showMealInfo(mealData){
    mealinfo.innerHTML = "";
    const mealInfoel = document.createElement('div');

    const ingredients = [];

    for(let i=1; i<=20; i++){
        if(mealData['strIngredient'+i]){
            ingredients.push(`${mealData['strIngredient' + i]} - ${mealData['strMeasure' + i]}`)
        }else{
            break;
        }
    }

    mealInfoel.innerHTML = `
    <h1>${mealData.strMeal}</h1>
    <img src="${mealData.strMealThumb}">
    <p>${mealData.strInstructions}</p>
    <div class="ingredients">
    <h3>Ingredients</h3>
    <ol>
    ${ingredients.map((ing) => `<li>${ing}</li>`).join('')}
    </ol>
    </div>
`

    mealinfo.appendChild(mealInfoel);

    mealpopup.classList.remove('hidden');
}
