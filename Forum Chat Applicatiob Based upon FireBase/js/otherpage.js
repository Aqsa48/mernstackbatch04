var database = firebase.database(); 
var q=0;
var topic;
var containerTopic;
var container;
var DATA2;
var myid=location.hash;
var myname;
var cmt;
var create;
var count=0;  
var myhash = location.hash.split('#')[1];

render();


function Logout(){
window.location='index.html';
}



function add()
{
topic=document.getElementById('topic').value;

if (topic!='') {  
 //DATA.push(topic);
 database.ref('chat1/').push(
  topic)
}
 render();
}

function render(){
	my();
container = document.getElementById('containerTopic');

database.ref('chat1/').once('value').then(function(snapshot){

for(var i in snapshot.val())
    {
container.innerHTML+= "<div   id='myDiv'>"+ "<a href='CommentOtherPage.html#"+snapshot.val()[i]+"'>"+"<label>"+snapshot.val()[i]+"</label>"+"</a>" +"<div id='cmt'> </div>"+"<br />"+"</div>" ;    
   console.log(snapshot.val()[i]);
 cmt = document.getElementById('cmt');	
 create= document.getElementById('created');	

 database.ref('comment/'+snapshot.val()[i] ).once('value').then(function(snapshot){
 
 for(var p in snapshot.val())
     { 
     	count++; 
      }
cmt.innerHTML+= "<div id='comment'>"+"<p> Comments "+count+" </p>" +"<br/ >"+"<br/ >"+"</div>";


   count=0;      
  });
}});
container.innerHTML='';
}

function my(){

	database.ref('firebaseAppliation/'+myhash).once('value').then(function(snapshot){

for(var i in snapshot.val())
    {
if (myhash==snapshot.val()[i])
  alert(snapshot.val()[i]);
create.innerHTML+= "<div id='comment1'>"+"<p> Comments "+count+" </p>" +"<br/ >"+"<br/ >"+"</div>";

}});
}