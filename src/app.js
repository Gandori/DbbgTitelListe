import Searchbar from '@/components/searchbar'
import Titles from '@/components/titles'
import '@/styles/app.sass'
import React, { useEffect, useState } from 'react'
import filterTitles from './components/filterTitles'

import npcTitles from '@/data/npcTitles'
import otherTitles from '@/data/otherTitles'
import techTitles from '@/data/techTitles'

const App = () => {
    const [filter, setFilter] = useState('all')
    const [searchValue, setSearchValue] = useState(null)
    const [data, setData] = useState([])
    const titles = {
        all: npcTitles.concat(otherTitles).concat(techTitles),
        npc: npcTitles,
        tech: techTitles,
        other: otherTitles,
    }

    useEffect(() => {
        filterTitles(filter, setData, titles)
    }, [filter])

    return (
        <div id="app">
            <h1>DBBG Titel-Liste</h1>
            <Searchbar
                searchValue={searchValue}
                setData={setData}
                setSearchValue={setSearchValue}
                titles={titles}
            ></Searchbar>
            <label>
                Titel Anzahl: <b>{data.length}</b>
            </label>
            <Titles data={data}></Titles>
        </div>
    )
}

export default App
