import * as React from 'react'
import './headerButton.sass'

export default function HeaderButton({ text, click }) {
    return (
        <button className="headerButton" onClick={click}>
            {text}
        </button>
    )
}
