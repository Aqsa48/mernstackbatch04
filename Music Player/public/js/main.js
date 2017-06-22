window.onlod=render;
var DATA=[];
load();
var locate ;
var heshId;

function buy(i){

    if(i==0)
     {
          alert("hellow2"); 
          window.open('https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6');
      }
    if(i==1)
     {
         window.open('https://www.amazon.com/Fearless-Enhanced-Taylor-Swift/dp/B001EYGOEM');
      
     }
    if(i==2)
     {
       window.open('https://www.amazon.com/Speak-Now-Taylor-Swift/dp/B003WTE886');
     
     }

    if(i==3)
     {
            window.open('https://www.amazon.com/Red-Taylor-Swift/dp/B008XNZMOU');
      
     }


    if(i==4)
     {

         window.open('https://www.amazon.com/1989-Taylor-Swift/dp/B00MRHANNI');
      
     }
}
 

function yo(){
  alert("kk");
console.log("jjj");

for(var i in DATA){
  console.log(DATA[i].title);

if(DATA[i].title=='Taylor Swift')
{
    
         window.location = 'https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6';

}
else if(DATA[i].title=='Fearless')
{
         
         window.location ='https://www.amazon.com/Fearless-Enhanced-Taylor-Swift/dp/B001EYGOEM';
}
else if(DATA[i].title=='Speak Now')
{
  
         window.location = 'https://www.amazon.com/Speak-Now-Taylor-Swift/dp/B003WTE886';
}
else if(DATA[i].title=='Red')
{
  
         window.location = 'https://www.amazon.com/Red-Taylor-Swift/dp/B008XNZMOU';
}

else if(DATA[i].title=='1989')
{ 
         
         window.location = 'https://www.amazon.com/1989-Taylor-Swift/dp/B00MRHANNI';
}

}
}

function render(){
	for(var i in DATA)
  {$('#dataShow').append( "<div   onclick= 'myclick("+i+")'class='col-md-12 MyMain'   id='imp'>"+"<div   class='col-md-6'  id='imp2'>"+"<img  src='"+DATA[i].image+"'  width: 120px height=100px  />"+"</div>"
    +"<div class='col-md-6'   id='imp1'>"+"<label> Song : "+DATA[i].title+"</label><br>"+"<label>  Artist : "+DATA[i].artist+"</label><br>"+
	    "<button    onclick='buy("+i+")'  type='submit'  id='myBtn'  >BUY</button><br>"+"</div>"+"</div>");
}
 }

function myclick(i){


for(var p in DATA){
  console.log(DATA[i].title);

if(DATA[p].title=='Taylor Swift')
 {
     window.location = 'otherpage.html#'+i  ;
     $('#Mydiv1').append("hellow");
 
 }

 else if(DATA[p].title=='Fearless')
{
      window.location = 'otherpage.html#'+i  ;
     $('#Mydiv1').append("hellow"); 
}
 else if(DATA[p].title=='Speak Now')
{
      window.location = 'otherpage.html#'+i ;
     $('#Mydiv1').append("hellow");
 
        
}
 else if(DATA[p].title=='Red')
{

     window.location = 'otherpage.html#'+i;
     $('#Mydiv1').append("hellow"); 
}

else if(DATA[p].title=='1989')
{

     window.location = 'otherpage.html#'+i;
      $('#Mydiv1').append("hellow");
}

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
    render();
  })
} 