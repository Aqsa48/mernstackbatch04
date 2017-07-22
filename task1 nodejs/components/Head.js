import React from 'react';
import Head from 'next/head';

export default class extends React.Component{
    render(){
        return (
            <Head>
                <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' />
                <link rel='stylesheet' href='static/style.css' />
            </Head>
        );
    }
}