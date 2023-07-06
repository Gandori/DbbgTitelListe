import * as React from 'react'
import './searchbar.sass'

export default function Searchbar({ setSearchValue }) {
    return (
        <div id="searchbar">
            <input
                placeholder="zum suchen Titel|Ort|Npc|Technik eingeben"
                onChange={(e) => setSearchValue(e.target.value)}
            ></input>
        </div>
    )
}
