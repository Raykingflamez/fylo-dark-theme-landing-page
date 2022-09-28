const err = document.getElementById("err");
const email = document.getElementById("email");
const btn = document.getElementById("btn");


btn.addEventListener('click', function(){
    if(email.value == null || email.value == undefined || email.value == '' || email.value <= 0){
          err.style.display = 'block';
      }
      else{
          err.style.display = 'none';
        
      }
  })