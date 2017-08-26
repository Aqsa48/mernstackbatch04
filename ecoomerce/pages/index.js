import React from 'react';
import Link from 'next/link';

export default class extends React.Component{
    render(){
        return(
            <main>
                <p>Click here to <Link href='/user'><a> User Signup</a></Link></p>
                <p>Click here to <Link href='/admin'><a>Admin Signup</a></Link></p>
                <p>Click here to <Link href='/webmaster'><a>WebMaster Signup</a></Link></p>
           
            </main>
        )
    }
}