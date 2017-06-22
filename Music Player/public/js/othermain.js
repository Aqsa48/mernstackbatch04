window.onload=myLoad;
var id;
id = location.hash;
console.log(id);

var DATA=[];
load();


function myLoad(){

console.log(id);

  if(id=='#0'){
$('#Mydiv3').append("<div id='h'>"+"<p id='P1'> "+DATA[0].artist+" </p>"+"<br><br>"+"</div>"+
"<div id='h'>"+"<p id='P2'> "+DATA[0].title+" </p>"+"</div>");
$('#Mydiv4').append( "<img  src='"+DATA[0].image+"'  width: 300px height=300px  />");
$('#Mydiv5').append("<div  onclick='myBtnClick()' id='btnDiv'>"+"<p id='pDiv'> Buy  </p>"+"</div>");

 }


 if(id=='#1'){
$('#Mydiv3').append("<div id='h'>"+"<p id='P1'> "+DATA[1].artist+" </p>"+"<br><br>"+"</div>"+
"<div id='h'>"+"<p id='P2'> "+DATA[1].title+" </p>"+"</div>");
$('#Mydiv4').append( "<img  src='"+DATA[1].image+"'  width: 300px height=300px  />");
$('#Mydiv5').append("<div  onclick='myBtnClick()' id='btnDiv'>"+"<p id='pDiv'> Buy  </p>"+"</div>");

 }

if(id=='#2'){
$('#Mydiv3').append("<div id='h'>"+"<p id='P1'> "+DATA[2].artist+" </p>"+"<br><br>"+"</div>"+
"<div id='h'>"+"<p id='P2'> "+DATA[2].title+" </p>"+"</div>");
$('#Mydiv4').append( "<img  src='"+DATA[2].image+"'  width: 300px height=300px  />");
$('#Mydiv5').append("<div  onclick='myBtnClick()' id='btnDiv'>"+"<p id='pDiv'> Buy  </p>"+"</div>");

 }


if(id=='#3'){
$('#Mydiv3').append("<div id='h'>"+"<p id='P1'> "+DATA[3].artist+" </p>"+"<br><br>"+"</div>"+
"<div id='h'>"+"<p id='P2'> "+DATA[3].title+" </p>"+"</div>");
$('#Mydiv4').append( "<img  src='"+DATA[3].image+"'  width: 300px height=300px  />");
$('#Mydiv5').append("<div  onclick='myBtnClick()' id='btnDiv'>"+"<p id='pDiv'> Buy  </p>"+"</div>");

 }

if(id=='#4'){
$('#Mydiv3').append("<div id='h'>"+"<p id='P1'> "+DATA[4].artist+" </p>"+"<br><br>"+"</div>"+
"<div id='h'>"+"<p id='P2'> "+DATA[4].title+" </p>"+"</div>");
$('#Mydiv4').append( "<img  src='"+DATA[4].image+"'  width: 300px height=300px  />");
$('#Mydiv5').append("<div  onclick='myBtnClick()' id='btnDiv'>"+"<p id='pDiv'> Buy  </p>"+"</div>");
 
 }


}

function myBtnClick(){

 
if(id=='#0')
{
    
         window.location = 'https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6';

}
else if(id=='#1')
{
         
         window.location ='https://www.amazon.com/Fearless-Enhanced-Taylor-Swift/dp/B001EYGOEM';
}
else if(id=='#2')
{
  
         window.location = 'https://www.amazon.com/Speak-Now-Taylor-Swift/dp/B003WTE886';
}
else if(id=='#3')
{
  
         window.location = 'https://www.amazon.com/Red-Taylor-Swift/dp/B008XNZMOU';
}

else if(id=='#4')
{ 
         
         window.location = 'https://www.amazon.com/1989-Taylor-Swift/dp/B00MRHANNI';
}

}

function save(){
  $.ajax({
    type: "GET",
    url: "http://rallycoding.herokuapp.com/api/music_albums",
    contentType:"application/json",
    data: JSON,
    success:function(data){
      alert("done");
    DATA.push(data)
    }
 })
}

function load(){
  $.get('http://rallycoding.herokuapp.com/api/music_albums',function(response){
    DATA = response;
    myLoad();
   
  })
} 