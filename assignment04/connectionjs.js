
window.onload=myshow;

var container =document.getElementById('result');


var input=document.getElementById('input1');

var data=[];

var myvalue='';

var num;

if(localStorage.getItem("key")===null)

{
  num='';

}
else
{
 num=localStorage.getItem("key");


}



function clear(){
alert('clear');
   
  num='';
  myvalue='';
  data=[];
  
  myshow();
}
function printValue(){

alert('hellow');
}

function printValue(){

	if(input.value===''){

alert ("You must write something on the field !");
}
else{


data.push(input.value);

show();
}
}

function show(){
container.innerHTML='';

myvalue='';
input.value='';

for(var i in data){


myvalue+= "<div   class="+"mydiv"+">"+"<input type= 'checkbox' >"  + data[i]+"             "+ 

 "<input onclick='ownclick()' id ='myid' type= 'button' value='Edit'>" +"</div>" + "<br />"; 



  // myvalue+= "<input type= 'checkbox' >"  + data[i]+"             "+ 

  //  "<input onclick='ownclick()' id ='myid' type= 'button' value='Edit'>"  + "<br />"; 

  //   // myvalue+="<input type= 'checkbox'>"  + data[i] + "<br />";


}
myshow();
}
 

 function ownclick () {

var e =document.getElementsByClassName('myid');
  if(data[i].checked===true){
  alert('show');
  }




	
/*var e=document.getElementsById('myid');
for (i=0;i<e.length;i++)
{
if (e[i].checked==true)
{

var agree=confirm('Are you sure you want to Delete !?');

if (agree)

     {
          return true; 
     }

else
     {
        return false;
     }
   }

}

alert('You must select an email address to delete');
return false;

 }*/
}
function myshow(){

     container.innerHTML=num+myvalue;

   if(container.localStorage===null){

    localStorage.setItem("key","");
    }
  else{

  	localStorage.setItem("key",container.innerHTML);
  }

}
