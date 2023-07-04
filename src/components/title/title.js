import * as React from 'react'
import './title.sass'

export default function Title({ title }) {
    return (
        <div className="title">
            <b>Titel</b>
            <label style={{ color: title.color }}>{title.name}</label>

            {title.ort == 'keinen' || (
                <>
                    <b>Ort</b>
                    <label>{title.ort}</label>
                </>
            )}

            <b>Anforderung</b>
            <label>{title.requirement}</label>
        </div>
    )
}
