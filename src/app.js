import GokuImage from '@/assets/sonGoku.png'
import Header from '@/components//header/header'
import Info from '@/components/info/info'
import Section from '@/components/section/section'
import Titles from '@/components/titles/titles'
import * as React from 'react'
import './app.sass'

function viewPage(page) {
    switch (page) {
        case 'info':
            return <Section content={<Info></Info>}></Section>
        case 'title':
            return <Section content={<Titles></Titles>}></Section>
    }
}

export default function App() {
    const [page, setPage] = React.useState('info')

    return (
        <div id="app">
            <Header setPage={setPage}></Header>
            <img id="bgImage" src={GokuImage}></img>
            {viewPage(page)}
        </div>
    )
}
