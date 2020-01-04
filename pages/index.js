import React from 'react'
import Head from 'next/head'
import {Button} from 'antd'

const Home = () => (
    <div>
        <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <div style={{display:"flex",justifyContent:"center",padding:"4px"}}><Button>我是按钮</Button></div>
    </div>
)

export default Home
