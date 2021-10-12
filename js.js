function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector('.navtop').classList.toggle('show');
    document.querySelector('main').classList.toggle('show');
  }


const api ="foodlist.json";

var container2 = document.querySelector('.toppickfoodgrid');

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
        <button class="readmore">Read More</button>

        <div class="info">

        <div class="infoshow">
        <div>
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
            <h2>Ingredients</h2>
            ${ingredients.map((ing) => `<li>${ing}</li>`).join('')}
            </ol>
            </div>

            <div>
            <button class="closebtn btn-primary">Close</button>
            </div>

        </div>

        </div>

        </div>
        
        `
        
        container2.innerHTML += card;

        const questions = document.querySelectorAll('.card');

        questions.forEach(function (question){
            
        const btn = question.querySelector('.readmore');

        
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
}
getfoods(api);
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});

var slideIndex = 1;
showSlides(slideIndex);

var timer = null;

function plusSlides(n){
    showSlides(slideIndex += n);
    clearTimeout(timer);
}

function currentSlide(n){
    showSlides(slideIndex = n);
    clearTimeout(timer);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if(n==undefined)
    {
        n= ++slideIndex
    }
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
   
    slides[slideIndex-1].style.display = "block";
    timer = setTimeout(showSlides, 4000);
}

function Food(evt, foodname) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(foodname).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

        
      
      
    
    
  
  
  






