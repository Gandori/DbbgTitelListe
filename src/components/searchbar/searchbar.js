import * as React from 'react'
import './searchbar.sass'

export default function Searchbar({ searchValue, searchTitle }) {
    return (
        <div id="searchbar">
            <input
                placeholder="zum suchen Titel|Ort|Npc|Technik eingeben"
                value={searchValue ? searchValue : ''}
                onChange={(e) => searchTitle(e.target.value)}
            ></input>
        </div>
    )
}
