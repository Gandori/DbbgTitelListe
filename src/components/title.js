import '@/styles/title.sass'
import React from 'react'

const Title = ({ title }) => {
    return (
        <div className="title">
            {title?.name && (
                <div className="titleName">
                    <b>Titel</b>
                    <label style={{ color: title.color }}>{title.name}</label>
                </div>
            )}
            {title?.planet && (
                <div className="titlePlanet">
                    <b>Planet</b>
                    <label>{title.planet}</label>
                </div>
            )}
            {title?.location && (
                <div className="titleLocation">
                    <b>Ort</b>
                    <label>{title.location}</label>
                </div>
            )}
            {title?.requirement && (
                <div className="titleRequirement">
                    <b>Anforderung</b>
                    <label>{title.requirement}</label>
                </div>
            )}
        </div>
    )
}

export default Title
