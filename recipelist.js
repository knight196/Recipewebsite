function myFunction(x){
    x.classList.toggle('change');
    document.querySelector('.navtop').classList.toggle('show');
    document.querySelector('main').classList.toggle('show');
}

const api ="https://www.themealdb.com/api/json/v1/1/search.php?s=fish";

var container2 = document.querySelector('.container2');

function getfoods(url){

fetch(url).then(res => res.json()).then(data => {
    container2.innerHTML = "";

    if(data.meals){
        data.meals.forEach(meal => {

            const ingredients = [];

            for(let i=1; i<=20; i++){
                if(meal['strIngredient' + i]){
                    ingredients.push(`${meal['strIngredient'+ i]} - ${meal['strMeasure' + i]}`)
                }else{
                    break;
                }
            }

        var card = `
        <div class="card">

        <img class="img" src="${meal.strMealThumb}">
        <p>${meal.strMeal}</p>

        <div class="info">

        <div class="infoshow">
            <img  src="${meal.strMealThumb}">
            </div>

            <div>
            <h2>${meal.strMeal}</h2>
            </div>

            <div>

            <p>${meal.strInstructions}</p>
            </div>

            <div>
            <ol>
            ${ingredients.map((ing) => `<li>${ing}</li>`).join('')}
            </ol>
            </div>

            <div>
            <button class="btn">Close</button>
            </div>

        </div>

        </div>
        
        `
        
        container2.innerHTML += card;

        const questions = document.querySelectorAll('.card');

        questions.forEach(function (question){
            
        const btn = question.querySelector('.img');

        
        const btn2 = question.querySelector('.btn')

        
        btn.addEventListener('click', function(){

    question.querySelector('.info').classList.toggle('show');
        
        })
        
        btn2.addEventListener('click', function(){
        
                question.querySelector('.info').classList.remove('show');
            })
        
        
        })
    
        });
    }
});
}
getfoods(api);

const api2 = 'https://www.themealdb.com/api/json/v1/'


const input2 = document.getElementById('input2');

var form = document.getElementById('btn')

form.addEventListener('click', (e) => {

e.preventDefault();

const searchTerm = input2.value;

if(searchTerm){
    getfoods(api2 + '1/search.php?s='+searchTerm)
        document.body.style.background="coral";
        document.querySelector('.container').style.background="darkcyan";
}else{
    document.body.style.background="darkcyan";
    document.querySelector('.container').style.background="coral";
    getfoods(api);
}

})










