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
            <Layout className={'mylayout'} style={{height:'500px'}}>
                <Header/>
                <Content/>
                <Footer/>
            </Layout>
            <div>第二个例子</div>
            <Layout className={'mylayout'} style={{height:'500px'}}>
                <Header/>
                <Layout className={'mylayout'} style={{height:'500px'}}>
                    <Aside/>
                    <Content/>
                </Layout>
                <Footer/>
            </Layout>
            <div>第三个例子</div>
            <Layout className={'mylayout'} style={{height:'500px'}}>
                <Header/>
                <Layout className={'mylayout'} style={{height:'500px'}}>
                    <Content/>
                    <Aside/>
                </Layout>
                <Footer/>
            </Layout>
            <div>第四个例子</div>
            <Layout className={'mylayout'} style={{height:'500px'}}>
                <Aside/>
                <Layout className={'mylayout'} style={{height:'500px'}}>
                    <Header/>
                    <Content/>
                    <Footer/>
                </Layout>
            </Layout>
        </div>



    )
}
