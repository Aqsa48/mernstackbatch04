import React from 'react';
import Link from 'next/link';
import axios from 'axios';


export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = {user:[]}
    }
    
    componentDidMount(){
        axios.get('/userinfo').then((response)=>{
            this.setState({user:JSON.parse(response.data)})
            console.log(this.state.user.accType);
            
            if(this.state.user.accType === 'user1' || this.state.user.accType === 'web'){
            
              
            //  <p><Link href='/addadmin ' className='i'><a>Add Admin </a></Link></p>
                document.getElementById('adminbtn').disabled=true;
                document.getElementById('webmasterbtn').disabled=true;
             
            }
             <style>{`
                 .i {
                       border: 2px solid red;
                       color:yellow;
                     
                }
               
             `}</style>


        })
      
   var myDate = new Date();
    var hrs = myDate.getHours();
        if (hrs <= 12)
      this.setState({ greet:'Good Morning'});
       else if (hrs>= 12 && hrs <= 17) 
      this.setState({ greet:'Good Noon'});
        else if (hrs >= 17 && hrs <= 24)
      this.setState({ greet:'Good Evening'});

    }


    render(){
        return(
            <main>


                <div className='topbar'><div className='innertopbar '> <p> WELCOME USER   ::    
                   {this.state.user.username}    </p> 
                   <h4> {this.state.greet}    </h4>  

                   </div>
                    
                <div className='adding'> <p>  <Link href='/desboard'><a>Deshboard</a></Link></p>
                  {/* how to disable links ???????? */}
                      {/* <p><Link href='/addadmin'><a>Add Admin </a></Link></p> */}
                       {/* <p> <Link href='/addwebmaster'><a>Add WebMaster </a></Link></p> */}

                   <form action='/addAdmin'>
                        <button type='submit' id='adminbtn'>Add Admin</button>
                    </form>
                    <br></br>
                    <form action='/addWebmaster'>
                        <button type='submit' id='webmasterbtn'>Add Webmaster</button>
                    </form>               
                  </div>
                      
                     </div> 
              
                
                <div  className='logout'><Link href='/logout'><a>Logout</a></Link></div>
            
           <style>{`
                .topbar
               {
                border: 2px solid red;
                height:100px;
               }              
                .innertopbar
               {
                border: 2px solid blue;
                height:100%;
                }

                .logout
               {
                border: 2px solid red;
                margin-top :140px;
               } 
                .disable {
                       border: 2px solid red;
                     
                }
               
             `}</style>



            </main>
        );
      


    }
}