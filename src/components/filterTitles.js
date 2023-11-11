const filterTitles = (filter, setData, titles) => {
    switch (filter) {
        case 'all':
            setData(titles.all)
            break
        case 'npc':
            setData(titles.npcTitles)
            break
        case 'tech':
            setData(titles.techTitles)
            break
        case 'other':
            setData(titles.otherTitles)
            break
    }
}

export default filterTitles
