import React from 'react'
import Head from 'next/head'
import {Button} from 'antd'
import Header from "../components/Header";

const Home = () => (
    <div>
        <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Header/>
        <div style={{display:"flex",justifyContent:"center",padding:"4px"}}><Button>我是按钮</Button></div>
    </div>
)

export default Home
