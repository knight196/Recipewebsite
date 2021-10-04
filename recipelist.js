function myFunction(x){
    x.classList.toggle('change');
    document.querySelector('.navtop').classList.toggle('show');
    document.querySelector('main').classList.toggle('show');
}


var container2 = document.getElementById('container2')

function showDisplay(){

fetch("https://www.themealdb.com/api/json/v1/1/categories.php")

.then(response => response.json())
.then(data => {
  container2.innerHTML = "";
    if(data.categories){
        data.categories.forEach(meal => {

        var card = `
        <div class="card">
        <img class="img" src="${meal.strCategoryThumb}">
        <p>${meal.strCategory}</p>

        <div class="info">

        <div class="infobox">

        <div>
        <img class="infoimg" src="${meal.strCategoryThumb}">
        </div>

        <div>
        <h2>${meal.strCategory}</h2>
        </div>

        
        <div>
        <p>${meal.strCategoryDescription}</p>
        </div>

        
        </div>

        <button class="closebtn">Close</button>
        
        </div>

        </div>
        
        `
        
        container2.innerHTML += card;
        const questions = document.querySelectorAll('.card');

        questions.forEach(function (question){
            
        const btn = question.querySelector('img');

        
        const btn2 = question.querySelector('.closebtn')

        
        btn.addEventListener('click', function(){

    question.querySelector('.info').classList.toggle('show');
        
        })
        
        btn2.addEventListener('click', function(){
        
                question.querySelector('.info').classList.remove('show');
            })
        
        
        })

        

    })
}
})

}
showDisplay();



var container3 = document.querySelector('#container3');
var infobtn = document.getElementById('btn').addEventListener('click', getMeal);

function getMeal(){

    const search = document.querySelector('#input').value.trim();

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
.then(response => response.json())
.then(data => {
  container3.innerHTML = "";
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

        <div class="infobox">

        <div>
        <img class="infoimg" src="${meal.strMealThumb}">
        </div>

        <div>
        <h2>${meal.strMeal}</h2>
        </div>

        
        <div>
        <p>${meal.strInstructions}</p>
        <h2>Ingredients</h2>
        <ol>
        ${ingredients.map((ing) => `<li>${ing}</li>`).join('')}
        </ol>

        </div>

        
        </div>

        <button class="closebtn">Close</button>
        
        </div>

        </div>

        `

            container3.innerHTML += card;

            
        container2.innerHTML += card;
        const questions = document.querySelectorAll('.card');

        questions.forEach(function (question){
            
        const btn = question.querySelector('img');

        
        const btn2 = question.querySelector('.closebtn')

        
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
document.getElementById('container2').style.display="none";
document.querySelector('#container3').style.display="grid";
}









