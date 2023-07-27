import * as React from 'react'
import './searchbar.sass'

export default function Searchbar({ searchValue, searchTitle }) {
    return (
        <div id="searchbar">
            <input
                placeholder="Nach Titel|Ort|Npc|Technik suchen"
                value={searchValue ? searchValue : ''}
                onChange={(e) => searchTitle(e.target.value)}
            ></input>
        </div>
    )
}
