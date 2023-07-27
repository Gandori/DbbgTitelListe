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
        filterTitle()
    }, [filter])

    const changeFilter = (value) => {
        var element = document.getElementById('titlesContent')
        element.scrollTop = 0
        setFilter(value)
    }

    function filterTitle() {
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
    }

    function searchTitle(value) {
        setSearchValue(value)
        if (!value) {
            filterTitle()
            return
        }

        let newData = []
        let titles = npcTitles.concat(otherTitles).concat(techTitles)

        titles.forEach((title) => {
            let titleName = title.name
            let titleNameLowerCase = titleName.toLowerCase()

            let titleOrt = title.ort
            let titleOrtLowerCase = titleOrt.toLowerCase()

            let titleReq = title.requirement
            let titleReqLowerCase = titleReq.toLowerCase()

            if (
                titleName.startsWith(value) ||
                titleNameLowerCase.startsWith(value) ||
                titleOrt.startsWith(value) ||
                titleOrtLowerCase.startsWith(value) ||
                titleReq.startsWith(value) ||
                titleReqLowerCase.startsWith(value)
            ) {
                newData.push(title)
            }
        })
        setData(newData)
    }

    const heaaderButtons = [
        {
            text: 'Alle',
            className: 'all',
            filter: 'all',
        },
        {
            text: 'Npc',
            className: 'npc',
            filter: 'npc',
        },
        {
            text: 'Techniken',
            className: 'tech',
            filter: 'tech',
        },
        {
            text: 'Andere',
            className: 'other',
            filter: 'other',
        },
    ]

    return (
        <div id="titles">
            <header>
                {heaaderButtons.map((button, key) => (
                    <button
                        key={key}
                        className={
                            filter == button.className ? 'buttonAktiv' : null
                        }
                        onClick={() => changeFilter(button.filter)}
                    >
                        {button.text}
                    </button>
                ))}
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
