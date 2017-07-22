import React from 'react'; //var React = require('react');
import Link from 'next/link';

import Head from '../components/Head';

export default class extends React.Component{
    render(){
        return (


            <div  className="col-md-12 Maindiv"  >

                <Head />                

               <div className="col-md-2 div1">

                <h3>20</h3>
                <h4> new followers added this year </h4>


               </div>


               <div className="col-md-2 div1">

                <h3>$1580</h3>
                <h4>average monthly income</h4>


               </div>

               <div className="col-md-2 div1">

                <h3>$ 13890</h3>
                <h4> average yearly icome</h4>

               </div>


         <div  className="col-md-3 div2">
            <h2>18  <br / > Paris</h2>
                
           </div>

        <div  className="col-md-7 div3">
        
            <div  className="col-md-12 inner">

            <div className="col-md-4   inner1">
             <h5  >15080 <br /> shortview </h5>
            </div>

            <div className="col-md-4   inner1">
             <h5  >12000<br /> likes </h5>
            </div>

            <div className="col-md-4   inner1">
             <h5  >51000 <br /> Comments </h5>
            </div>

            </div>    
           </div>

        <div  className="col-md-3  div4">
                <h2>new visitors <br /> 1.5K</h2>
        </div>
     
       <div  className="col-md-3  div5">
         
        <h3 id='id4'>$ new visitors<br /> 1.5K</h3>               
         </div>
       <div  className="col-md-7  div6">


        <div  className="col-md-12 inner">

            <div className="col-md-4   inner1">
             <h5  >15080 <br /> shortview </h5>
            </div>

            <div className="col-md-4   inner1">
             <h5  >12000<br /> likes </h5>
            </div>

            <div className="col-md-4   inner1">
             <h5  >51000 <br /> Comments </h5>
            </div>
            </div>     
        </div>

     <div  className="col-md-3  div7">
        <h3 id='id4'> $ 50% <br /> bounces rates</h3>
       </div>

     <div  className="col-md-3  div8">  
        <h3 id='id4'>$ serach<br /> 28%</h3>
         </div>




         </div>
        );
    }
}