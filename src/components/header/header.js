import HeaderButton from '@/components/headerButton/headerButton'
import * as React from 'react'
import './header.sass'

export default function Header({ setPage }) {
    const buttons = [
        {
            name: 'Info',
            click: () => setPage('info'),
        },
        {
            name: 'Titel',
            click: () => setPage('title'),
        },
    ]

    return (
        <header id="header">
            {buttons.map((ele, key) => (
                <HeaderButton
                    key={key}
                    text={ele.name}
                    click={ele.click}
                ></HeaderButton>
            ))}
        </header>
    )
}
