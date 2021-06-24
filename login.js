function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector('.navtop').classList.toggle('show');
  }

  var signup = document.querySelector('#signup');

  signup.addEventListener('click', () => {
  
    var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var passwordcheck = document.getElementById("passwordcheck").value;
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(email =='')
      {
        alert("please enter email.");
      }
      else if(password=='')
      {
            alert("enter the password");
      }
      else if(!filter.test(email))
      {
        alert("Enter valid email id.");
      }
      else if(password.length < 6)
      {
        alert("Password min is 6.");
      }
      else if (password !== passwordcheck){
        alert('Check the password again');
      }
      else{
     alert('Thank you for Sign Up');
  
   if(email && password){
     localStorage.setItem(email,password);
   }
        }
  
      });

      var login = document.querySelector('#login');

  login.addEventListener('click', () => {
  
    var email2 = document.getElementById("email2").value;
      var password2 = document.getElementById("password2").value;
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(email2 =='')
      {
        alert("please enter email.");
      }
      else if(password2 =='')
      {
            alert("enter the password");
      }
      else if(!filter.test(email2))
      {
        alert("Enter valid email id.");
      }
      else if(password2.length < 6)
      {
        alert("Password min is 6.");
      }
      else{
     alert('Thank you for Login');
  
   if(email2 && password2){
     localStorage.setItem(email2,password2);
   }
        }
  
      });

     
      

      function pwdcheck() {
        var x = document.querySelectorAll(".pwd");
        for(var i=0; i< x.length; i++){
        if (x[i].type === "password") {
          x[i].type = "text";
        } else {
          x[i].type = "password";
        }
      }
      }
      
      function pwdcheck1() {
        var x = document.querySelector(".pwd1");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }
      
      
      
var createac = document.querySelector('#createnewpage');
var loginpage = document.querySelector('#loginpage');

createac.addEventListener('click', () => {
    if(createac === createac){
        document.querySelector('.createac').style.display="block";
        document.querySelector('.login').style.display="none";
    }
});

loginpage.addEventListener('click', () => {
    if(loginpage === loginpage){
        document.querySelector('.createac').style.display="none";
        document.querySelector('.login').style.display="block";
    }
});
