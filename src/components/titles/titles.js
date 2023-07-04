import * as React from 'react'
import './titles.sass'

import Title from '@/components/title/title'
import npcTitles from '@/data/npcTitles'
import otherTitles from '@/data/otherTitles'
import techTitles from '@/data/techTitles'

export default function Titles() {
    const [filter, setFilter] = React.useState('all')
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        switch (filter) {
            case 'all':
                setData(npcTitles.concat(otherTitles).concat(techTitles))
                break

            case 'npc':
                setData(npcTitles)
                break
            case 'tech':
                setData(techTitles)
                break

            case 'other':
                setData(otherTitles)
                break
        }
    }, [filter])

    const changeFilter = (value) => {
        var element = document.getElementById('titlesContent')
        element.scrollTop = 0
        setFilter(value)
    }

    return (
        <div id="titles">
            <header>
                <button
                    className={filter == 'all' ? 'buttonAktiv' : ''}
                    onClick={() => {
                        changeFilter('all')
                    }}
                >
                    Alle
                </button>
                <button
                    className={filter == 'npc' ? 'buttonAktiv' : ''}
                    onClick={() => changeFilter('npc')}
                >
                    Npc
                </button>
                <button
                    className={filter == 'tech' ? 'buttonAktiv' : ''}
                    onClick={() => changeFilter('tech')}
                >
                    Techniken
                </button>
                <button
                    className={filter == 'other' ? 'buttonAktiv' : ''}
                    onClick={() => changeFilter('other')}
                >
                    Andere
                </button>
            </header>

            <main id="titlesContent">
                {data
                    ? data.map((title, key) => (
                          <Title key={key} title={title}></Title>
                      ))
                    : null}
            </main>
        </div>
    )
}
