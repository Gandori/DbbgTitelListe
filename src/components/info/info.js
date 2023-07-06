import DBBGImage from '@/assets/dbbg.png'

import TitelListeImage from '@/assets/titelListe.png'
import * as React from 'react'
import './info.sass'

export default function Info() {
    return (
        <div id="info">
            <header id="infoHeader">
                <a href="https://db-bg.de" target="_blank">
                    <img src={DBBGImage}></img>
                </a>
                <img src={TitelListeImage}></img>
            </header>

            <main id="infoMain">
                <h1>Du willst helfen die Liste zu Komplettieren?</h1>
                <p>
                    Dann schreib mir doch Ingame eine PM mit Folgenden Infos vom
                    Titel
                </p>
                <div id="titleRequirements">
                    <b>Name des Titels</b>
                    <b>Farbe vom Titel</b>
                    <b>Die Titel anforderung</b>
                    <b>Den Ort vom Titel</b>
                </div>
            </main>

            <footer id="infoFooter">
                <b>made by Gandori</b>
            </footer>
        </div>
    )
}
