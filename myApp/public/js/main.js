
window.onload=signForm;

var request= new XMLHttpRequest();

var modal = document.getElementById('id01');
var mycontainer = document.getElementById('cont');
var mycontainer1 = document.getElementById('cont1');
var mycontainer2 = document.getElementById('cont2');
var showUserData = document.getElementById('showUserData');

var DATA=[];
var name,Password,occuption,Eductaion,Role;
var inputUser,inputPass;
var name1;
var addInput;
var check=true;
var InputDATA=[];
var myCheck=false;
var p=0;

load();
function myClick()
{
  
  inputUser=document.getElementById('user').value;
  inputPass=document.getElementById('pass').value;    
  console.log(inputUser); 
  console.log(inputPass); 
 for( p=0; p<DATA.length; p++){
  if(DATA[p].username==inputUser && DATA[p].userPass==inputPass)
   {
      myData();
     save();
 
        check=false;
        myCheck=true;
  }}

function myData()
{

  for(var p=0; p<DATA.length; p++){
    showUserData.innerHTML="<div id='Display' class='col-md-8 col-md-offset-2'>"+
     "\nName------------------ "+DATA[p].username+ "<br />"
     +"\nOccupation-----------"+DATA[p].userOccuption +"<br />"+"\nEducation-------------"+DATA[p].userEducation+"<br />"+"\nRole------------------- "+DATA[p].userRole+
     "<BR />To Do list-----------"+DATA[p].todoDATA+
     " <br /><input type='text' id='addInput' placeholder='Insert Item' />"+
        "<button  onclick='onmyclickbutton()' type='submit' class='signupbtn' id='signUp'>SignUp</button>"+ "</div>";
}
}

 if(check==true)
   {
    alert("LOGIN Failed");
  }
signupForm();
}

function SignUp(){

 
   name=document.getElementById('signEmail').value;  
   occuption=document.getElementById('signOcc').value;
   Eductaion=document.getElementById('signEdu').value;  
   Role=document.getElementById('signRole').value;
   Password=document.getElementById('signPass').value;  

    console.log("Password"+Password);
    console.log("Name"+name);
    
    DATA.push({username : name, userPass : Password ,userOccuption: occuption, userEducation :Eductaion,userRole: Role,myTodo: InputDATA  });

     save();
}

function onmyclickbutton()
{
  addInput=document.getElementById('addInput').value; 
   InputDATA.push(addInput);
   showHTML();
   

if(myCheck){
    DATA.push({username : name, userPass : Password ,userOccuption: occuption, userEducation :Eductaion,userRole: Role,myTodo: InputDATA});
      save();
      }
      save();  
  }
  function showHTML(){
  var myContainer = document.getElementById('showCont');
  myContainer.innerHTML = '';
  for(var i in InputDATA){
    myContainer.innerHTML += "<div id="+i+"><input onclick='removeTodo(this.parentNode.id)' type='checkbox'/>"+InputDATA[i]+"<button onclick='myClickbtn()' >Edit</button ><label></label></div>";
  }
}

function myClickbtn()
{
   

alert("hey");
}

function signForm(){

  mycontainer.innerHTML= "<div class='container1'>"+"<h1>Login Form</h1>"+" <input type='text' placeholder='USER ' id='user' > <br>"+
  " <br><input type='text' placeholder='Password' id='pass' > <br>" 
 +" <button id='mybtn' type='submit' onclick='myClick()'>LOGIN </button>" + "</div>";
signupForm();
}

function signupForm(){
mycontainer1.innerHTML= "<form class='modal-content animate'>"+ "<div class='container'>"+"<label><b>Email</b> </label><br>"+" <input type='text' placeholder='Enter Email' id='signEmail'  required> <br>"+
"<label><b>Password</b></label>"+ "<br><input  id ='signPass'type='text' placeholder='Enter Password' name='psw' required>"
    
     +"<br> <label><b>Occupattion</b></label>"
     + "<br><input type='text' placeholder='occupation'  id='signOcc'  required>"
     +"<br><label><b>Eductaion</b></label>"
     +"<br><input type='text' placeholder='Education'id='signEdu'  required>"
     + "<br> <label><b>Role</b></label>"
     + "<br><input type='text' placeholder='Role'  id='signRole'  required>"
     +" <p>By creating an account you agree to our <a href='#''>Terms & Privacy</a>.</p>"+
      "</div>"+"</form>"+ " <button type='button' onclick='model' class='cancelbtn'>Cancel</button>"+
        "<button  onclick='SignUp()' type='submit' class='signupbtn' id='signUp'>SignUp</button>"+ "</div>";
}
function save(){
  request.open("POST","https://nodedatastore.herokuapp.com/app3");
  request.setRequestHeader("Content-Type","application/json");
  request.send(JSON.stringify(DATA));
}

function load(){
  request.open("GET","https://nodedatastore.herokuapp.com/app3");
  request.onload = function(){
    if(DATA == ''){
      DATA = JSON.parse(request.responseText);
    }
    //SignUp();
   //showHTML();
  }
  request.send();
}


function removeTodo(Id){
  var listDiv = document.getElementById(Id);
  listDiv.parentNode.removeChild(listDiv);
 var dataIndex = DATA.indexOf(listDiv.childNodes[1].innerText);
  DATA.splice(dataIndex,1);
  save();
}











