import '@/styles/searchbar.sass'
import React from 'react'
import searchTitle from './searchTitle'

const Searchbar = ({ searchValue, setData, setSearchValue, titles }) => {
    return (
        <div id="searchbar">
            <label>
                Suche nach einem Titel, nach einem Npc, nach einem Ort oder nach
                einer Technik
            </label>
            <input
                placeholder="Suchen"
                value={searchValue ? searchValue : ''}
                onChange={(e) =>
                    searchTitle(e.target.value, setData, setSearchValue, titles)
                }
            ></input>
        </div>
    )
}

export default Searchbar
