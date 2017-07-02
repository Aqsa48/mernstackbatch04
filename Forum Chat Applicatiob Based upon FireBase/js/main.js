var firstname,lastname,pass,address,contact,User,Pass;
var myfname,mylname,mypassword,myaddress,mycontact;
var i=0;
var checkPass,checkUser;
var database = firebase.database();

function Signup(){

firstname=document.getElementById('fname').value;
lastname=document.getElementById('lname').value;
pass=document.getElementById('password').value;
address=document.getElementById('address').value;
contact=document.getElementById('contact').value;

$(document).ready(function(){ 
  database.ref('firebaseAppliation/'+ firstname ).set({
    myfname: firstname ,
    mylname: lastname,
    mypassword: pass,
    myaddress :address,
    mycontact:contact
   }) 
})
  
}

function Login(){

 User=document.getElementById('User').value;
 Pass=document.getElementById('Pass').value;

 if(User=='' && Pass=='')
    {
      console.log("Please! Enter Email and Password");
    }
else 
  {
    database.ref('firebaseAppliation/'+User).once('value').then(function(snapshot){
  checkUser=snapshot.val().myfname;
   checkPass=snapshot.val().mypassword;
    console.log(checkUser);
   console.log(checkPass);
   if(User==checkUser && Pass==checkPass)
      { 
      alert('WelCome'+ User );
       window.location="otherpage.html#"+User;

      }
   else
    { 
      alert('Doesnot Exist');
    }

  })

   }
}
