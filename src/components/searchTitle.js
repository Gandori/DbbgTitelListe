const searchTitle = (value, setData, setSearchValue, titles) => {
    setSearchValue(value)

    let newData = []

    if (!value) {
        setData(titles.all)
        return
    }

    titles.all.forEach((title) => {
        let titleName = title.name
        let titleNameLowerCase = titleName.toLowerCase()

        let titleLocation = title?.location
        let titleLocationLowerCase = titleLocation?.toLowerCase()

        let titleReq = title.requirement
        let titleReqLowerCase = titleReq.toLowerCase()

        if (
            titleName.startsWith(value) ||
            titleNameLowerCase.startsWith(value) ||
            titleLocation?.startsWith(value) ||
            titleLocationLowerCase?.startsWith(value) ||
            titleReq.startsWith(value) ||
            titleReqLowerCase.startsWith(value)
        ) {
            newData.push(title)
        }
    })
    setData(newData)
}

export default searchTitle
