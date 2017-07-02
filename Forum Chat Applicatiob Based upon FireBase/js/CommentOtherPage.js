var database=firebase.database();
//var id;
var p=0;
var input; 
var hash = location.hash.split('#')[1];

Render();

function Logout(){

window.location='index.html';
}

function GoBack(){
     window.location='otherpage.html#'+p;}

function AddComment(){
  
	console.log("__________"+hash);
 input=document.getElementById('addComment').value

if (input!='') {  
    
  database.ref('comment/'+hash).push(
  input)
   input='';

}

Render();

}
function  Render(){

var container1=document.getElementById('mymain');
container1.innerHTML="<h2> Topic :"+ hash+"</h2>";
var container=document.getElementById('commentContainerTopic');

database.ref('comment/'+hash).once('value').then(function(snapshot){
 console.log(snapshot.val());    
for(i in snapshot.val())
     {
       container.innerHTML+= snapshot.val()[i]+"<br />";  
       p++;	  
      }
   });

    container.innerHTML='';
 }



// function AddComment(){

//  input=document.getElementById('addComment');

// var container=document.getElementById('commentContainerTopic');
// container.innerHTML=input.value;

// console.log(id);
// }