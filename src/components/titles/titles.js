import * as React from 'react'
import './titles.sass'

import Searchbar from '@/components/searchbar/searchbar'
import Title from '@/components/title/title'
import npcTitles from '@/data/npcTitles'
import otherTitles from '@/data/otherTitles'
import techTitles from '@/data/techTitles'

export default function Titles() {
    const [filter, setFilter] = React.useState('all')
    const [searchValue, setSearchValue] = React.useState(null)
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        setSearchValue(null)
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

    const searchTitle = (value) => {
        setSearchValue(value)
        let newData = []
        if (!value) {
            return
        }
        npcTitles
            .concat(otherTitles)
            .concat(techTitles)
            .forEach((title) => {
                if (
                    title.name.startsWith(value) ||
                    `${title.name.charAt(0).toLowerCase()}${title.name.slice(
                        1
                    )}`.startsWith(value) ||
                    title.ort.startsWith(value) ||
                    `${title.ort.charAt(0).toLowerCase()}${title.ort.slice(
                        1
                    )}`.startsWith(value) ||
                    title.requirement.startsWith(value) ||
                    `${title.requirement
                        .charAt(0)
                        .toLowerCase()}${title.requirement.slice(
                        1
                    )}`.startsWith(value)
                ) {
                    newData.push(title)
                }
            })
        setData(newData)
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

            <label>
                Titel Anzahl: <b>{data.length}</b>
            </label>

            <Searchbar
                data={data}
                searchValue={searchValue}
                searchTitle={searchTitle}
            ></Searchbar>

            <main id="titlesContent">
                {data && (
                    <>
                        {data.map((title, key) => (
                            <Title key={key} title={title}></Title>
                        ))}
                    </>
                )}
            </main>
        </div>
    )
}
