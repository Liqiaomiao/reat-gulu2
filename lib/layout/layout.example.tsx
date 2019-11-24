import React from 'react';
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Aside from "./aside";
import Layout from "./layout";
export default function(){
    return (
        <div>
            <div>第一个例子</div>
            <Layout style={{'color':'red'}}>
                <Header/>
                <Aside/>
                <Content/>
                <Footer/>
            </Layout>
        </div>



    )
}
