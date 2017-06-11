var data;
var user;
var pUser;
var pUser = document.getElementById('pUser');
var pPass=document.getElementById('pPass');

var dUser = document.getElementById('dUser');
var dPass=document.getElementById('dPass');

var sUser = document.getElementById('sUser');
var sPass=document.getElementById('sPass');

var cont=document.getElementById('patientcont');
var cont1=document.getElementById('doctorcont');
var cont2=document.getElementById('staffcont');

var i;
var q;
var patient=[{ patient_name : "fiza",password:"123", father_name: "Muhammad ",last_checkup : "14-6-2017",  diagnosed_illness: "fever",medicines: "panadol,burfan"},
{ patient_name : "eman", father_name:"Muhammad Afsar ", password:"123",last_checkup : "13-6-2017",  diagnosed_illness: "cough",medicines: "arinik,hydrill"},
{ patient_name : "bakh", father_name:"Ali ", password:"123",last_checkup : "15-6-2017",  diagnosed_illness: "fever cough",medicines: "caflan"},
{ patient_name : "rahool", father_name: "Fahad ",password:"1233",last_checkup : "16-6-2017",  diagnosed_illness: "thoart pain",medicines: "burfen tablet"},
{ patient_name : "zehra", father_name: "Muhammad Talha ",password:"1233",last_checkup : "17-6-2017",  diagnosed_illness: "flu",medicines: "burfan"},
{ patient_name : "aun", father_name: "farooq",password:"1233",last_checkup : "18-6-2017",  diagnosed_illness: "headache",medicines: "panadol"}
]


var doctor=[{d_name : "irfan",password:"123",contact: "033212334", last_checkup : "14-6-2017", patient_n: "fiza"},
{d_name : "Dr Zara Umar",password:"123",contact: "033212334", last_checkup : "15-6-2017", patient_n: "Eman"},
{d_name : "Dr Pawan Kumar",password:"123",contact: "033212334", last_checkup : "16-6-2017", patient_n: "Bakh"},
{d_name : "Dr Ravi",password:"123",contact: "033212334", last_checkup : "17-6-2017", patient_n: "Rahool"},
{d_name : "Dr Billal",password:"123",contact: "033212334", last_checkup : "18-6-2017", patient_n: "zehra"},
{d_name : "Dr mehtab",password:"123",contact: "033212334", last_checkup : "19-6-2017", patient_n: "Anu"}

]

var staff =[{ d_name : "asad",password:"123",contact: "033212334", last_checkup : "15-6-2017", dr_n: "Dr Irfan, Dr Zara umar",pat_av: " Dr irfan treated Bakh,Rubab and <br>Dr Zara Umar treated Aalia", },
{ d_name : "khan",password:"123",contact: "033212334", last_checkup : "15-6-2017", dr_n: "Dr Pawan Kumar, Dr Zara umar",pat_av: " Dr Pawan treated zehra and Annu Dr Zara Umar treated Eman", },
{ d_name : "fahad",password:"123",contact: "033212334", last_checkup : "15-6-2017", dr_n: "Dr Ravi, Dr Pawan Kumar",pat_av: " Dr irfan treated Bakh and Rubab  Dr Zara Umar treated Aalia", },
{ d_name : "gul ",password:"123",contact: "033212334", last_checkup : "15-6-2017", dr_n: "Dr Bilal, Dr Zara umar",pat_av: " Dr Bilal treated Fiza" },
{ d_name : "zubair",password:"123",contact: "033212334", last_checkup : "15-6-2017", dr_n: "Dr Mehtab , De Ravi",pat_av: " Dr Mehtab treated Bakh and Rubab\n Dr Ravi treated Aalia", },
{ d_name : "Rabia",password:"123",contact: "033212334", last_checkup : "15-6-2017", dr_n: "Dr Irfan, Dr Zara umar",pat_av: " Dr irfan treated Bakh and Rubab\n Dr Zara Umar treated Aalia", },
]

//var  doctor=[{patient_name : "fiza",password:"123",contact: "033212334", last_checkup : "14-6-2017", patient_n: patient[i].patient_name}]

  	//console.log("You've Logged-In : "+doctor[i].patient_n)
 
  	// console.log("You've Logged-In : "+doctor[i].patient_name)

//var teacher=[{ t_id : "12", course_n: course[i++].course_name}]

var value= false;
 function patientLogin(){


if(paUser.value==='' || pPass.value===''){
	alert("Please,Enter User and Password !!");
}else
{
 //container.innerHTML = '';	 
for( i in patient)
{

 if(patient[i].patient_name==pUser.value && patient[i].password==pPass.value){
 	  cont.innerHTML =  "\nName   ------------------       "+patient[i].patient_name+ "<br />"+"\nFather Name       ----------           "+patient[i].father_name +"<br />"+"\nLast Checkup      --------           "+patient[i].last_checkup+"<br />"+"\nDiagnosed_Illness -----            "+patient[i].diagnosed_illness+"<br />"+"\nMedicines         ------           "+patient[i].medicines;
  	console.log("You've Logged-In : "+patient[i].patient_name)
     console.log("\nName              ::           "+patient[i].patient_name+ "\nFather Name       ::           "+patient[i].father_name +"\nLast Checkup      ::           "+patient[i].last_checkup+"\nDiagnosed_Illness ::            "+patient[i].diagnosed_illness+"\nMedicines         ::           "+patient[i].medicines);
    	value=true;
   }
}
  if(value==false)	{
alert("No, Record Found !");
  console.log("Not Exist!");
  }

}
}
function doctorLogin(){

if(dUser.value==='' || dPass.value===''){
	alert("Please,Enter User and Password !!");
}else

// doctor=[{d_name : "fiza",password:"123",contact: "033212334", last_checkup : "14-6-2017", patient_n: patient[0].patient_name}]

for( i in doctor)
{
 if(doctor[i].d_name==dUser.value && doctor[i].password==dPass.value){
 	 cont1.innerHTML ="\nName             ------------------           "+doctor[i].d_name+"<br />"+ "\nContact          ------------             "+doctor[i].contact +"<br />"+"\nLast Checkup      ------------             "+staff[i].last_checkup+"<br />"+"\nPatient Name     -------------            "+doctor[i].patient_n;

  	console.log("You've Logged-In : "+doctor[i].d_name	);
    console.log("\nName            ::           "+doctor[i].d_name+ "\nContact         ::           "+doctor[i].contact +"\nLast Checkup    ::            "+staff[i].last_checkup+"\nPatient Name    ::            "+doctor[i].patient_n);
  	value=true;
   }
}
 if(value==false)	{
	alert("No, Record Found !");

    console.log("Not Exist!");
   } 
}
	function staffLogin(){

if(sUser.value==='' || sPass.value===''){
	alert("Please,Enter User and Password !!");
}else
{
for( i in staff)
{
 if(staff[i].d_name==sUser.value && staff[i].password==sPass.value){
  	
// cont1.innerHTML ="\nName             ------------------           "+doctor[i].d_name+"<br />"+ "\nContact          ------------             "+doctor[i].contact +"<br />"+"\nLast Checkup      ------------             "+staff[i].last_checkup+"<br />"+"\nPatient Name     -------------            "+doctor[i].patient_n;
   cont2.innerHTML="\nName   --------------- "+staff[i].d_name+"<br />"+ "\nContact -------------"+staff[i].contact +"<br />"+"\nLast Checkup -----"+staff[i].last_checkup+"<br />"+"\ndoctor Availble     -----       "+staff[i].dr_n+"<br />"+"\nLast Dr: Treated patient --"+"<br />"+staff[i].pat_av;

  	console.log("You've Logged-In : "+staff[i].d_name	);
    console.log("\nName            ::           "+staff[i].d_name+ "\nContact         ::           "+staff[i].contact +"\nLast Checkup    ::            "+staff[i].last_checkup+"\ndoctor Availble    ::            "+staff[i].dr_n+"\nLast Dr: Treated patient    ::            "+staff[i].pat_av);
  	value=true;  	  }
}
 if(value==false)	{
alert("No, Record Found !");
console.log("Not Exist!");
   }

}
}