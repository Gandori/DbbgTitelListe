import Title from '@/components/title'

import '@/styles/titles.sass'
import React from 'react'

const Titles = ({ data }) => {
    return (
        <div id="titles">
            {data.map((title, key) => (
                <Title key={key} title={title}></Title>
            ))}
        </div>
    )
}

export default Titles
