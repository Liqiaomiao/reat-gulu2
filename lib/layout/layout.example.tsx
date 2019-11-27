import React from 'react';
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Aside from "./aside";
import Layout from "./layout";
import './layou.example.scss'
export default function(){
    return (
        <div>
            <div>第一个例子</div>
            <Layout className={'mylayout'}>
                <Header>header</Header>
                <Content>content</Content>
                <Footer>footer</Footer>
            </Layout>
            <div>第二个例子</div>
            <Layout className={'mylayout'}>
                <Header>header</Header>
                <Layout className={'mylayout'}>
                    <Aside>Aside</Aside>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
            <div>第三个例子</div>
            <Layout className={'mylayout'} style={{height:'500px'}}>
                <Header>Header</Header>
                <Layout className={'mylayout'} style={{height:'500px'}}>
                    <Content>Content</Content>
                    <Aside>Aside</Aside>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
            <div>第四个例子</div>
            <Layout className={'mylayout'} style={{height:'500px'}}>
                <Aside>Aside</Aside>
                <Layout className={'mylayout'} style={{height:'500px'}}>
                    <Header>header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>



    )
}
