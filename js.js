function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector('.navtop').classList.toggle('show');
    document.querySelector('main').classList.toggle('show');
  }


var foodtitle = document.querySelector('#foodtitle');

var foodimg = document.querySelector('#foodimg');

var fooddescription = document.querySelector('#description');

var foodlist = [
  food1 ={
    name:'chicken curry',
    images:'./images/chickencurry.jpg',
    clipArt:'chickencurry.jpg',
    description1:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit quod incidunt...',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit quod incidunt minima eligendi aut maiores ratione nisi tempora alias, cupiditate ab quia quisquam dicta, repellendus sint consectetur quam quibusdam voluptas!',
  },
  food2 ={
    name:'springroll',
    images:'./images/springroll.jpg',
    clipArt:'springroll.jpg',
    description1:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit quod incidunt...',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit quod incidunt minima eligendi aut maiores ratione nisi tempora alias, cupiditate ab quia quisquam dicta, repellendus sint consectetur quam quibusdam voluptas!'
  },
  food3 ={
    name:'chicken fried rice',
    images:'./images/chickenfriedrice.jpg',
    clipArt:'chickenfriedrice.jpg',
    description1:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit quod incidunt...',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit quod incidunt minima eligendi aut maiores ratione nisi tempora alias, cupiditate ab quia quisquam dicta, repellendus sint consectetur quam quibusdam voluptas!'
  },
  food4 ={
    name:'chocolatecake',
    images:'./images/chocolatecake.jpg',
    clipArt:'chocolatecake.jpg',
    description1:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit quod incidunt...',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit quod incidunt minima eligendi aut maiores ratione nisi tempora alias, cupiditate ab quia quisquam dicta, repellendus sint consectetur quam quibusdam voluptas!'
  }
]

function loadfood(foodlist){
foodimg.src ="./images/" + foodlist.clipArt;
foodtitle.textContent = foodlist.name;
fooddescription.textContent = foodlist.description;
}



let food = document.querySelector('.toppickgrid').children;

for(var i=0; i<food.length; i++){

food[i].textContent = foodlist[i].name;
food[i].setAttribute('id',i);


const img = document.createElement('IMG');

const p = document.createElement('P');

const button = document.createElement('BUTTON');

var t = document.createTextNode("Read More");

img.classList=(img);

img.src=foodlist[i].images;

p.textContent=foodlist[i].description1;


button.appendChild(t);


food[i].appendChild(img);
food[i].appendChild(p);
food[i].appendChild(button);


food[i].addEventListener('click', function() {
  loadfood(foodlist[this.id]);
  document.querySelector('.foodcontainer').classList.add('show');

  var closecontainer = document.querySelector('.closecontainer');
  closecontainer.addEventListener('click', () => {
document.querySelector('.foodcontainer').classList.remove('show');
  });
})
}

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

        
      
      
    
    
  
  
  






