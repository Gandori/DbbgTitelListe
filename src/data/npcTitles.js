const npcTitles = [
    {
        name: 'Tierfreund',
        ort: 'Wald',
        requirement: 'Tiger 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Jäger',
        ort: 'Wald',
        requirement: 'Tiger 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Reißzahn',
        ort: 'Wald',
        requirement: 'Tiger 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Tiger',
        ort: 'Wald',
        requirement: 'Tiger 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Saurier',
        ort: 'Ebene',
        requirement: 'Pterodactyl 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Prähistorisch',
        ort: 'Ebene',
        requirement: 'Pterodactyl 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Forscher',
        ort: 'Ebene',
        requirement: 'Pterodactyl 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Pterodactyl',
        ort: 'Ebene',
        requirement: 'Pterodactyl 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Pterodactyl-Nemesis',
        ort: 'Ebene',
        requirement: 'Pterodactyl 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Brummig',
        ort: 'Bergweg',
        requirement: 'Bärendieb 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Langfinger',
        ort: 'Bergweg',
        requirement: 'Bärendieb 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Bär',
        ort: 'Bergweg',
        requirement: 'Bärendieb 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Bärendieb',
        ort: 'Bergweg',
        requirement: 'Bärendieb 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Bärendieb-Nemesis',
        ort: 'Bergweg',
        requirement: 'Bärendieb 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Menschenjäger',
        ort: 'Das Verlassene Dorf',
        requirement: 'Dorfbewohner 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Quäler',
        ort: 'Das Verlassene Dorf',
        requirement: 'Dorfbewohner 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Sadist',
        ort: 'Das Verlassene Dorf',
        requirement: 'Dorfbewohner 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Dorfbewohner',
        ort: 'Das Verlassene Dorf',
        requirement: 'Dorfbewohner 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Dorfbewohner-Nemesis',
        ort: 'Das Verlassene Dorf',
        requirement: 'Dorfbewohner 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Schwein',
        ort: 'Das Verlassene Dorf',
        requirement: 'Oger 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Räuber',
        ort: 'Das Verlassene Dorf',
        requirement: 'Oger 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Kidnapper',
        ort: 'Das Verlassene Dorf',
        requirement: 'Oger 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Oger',
        ort: 'Das Verlassene Dorf',
        requirement: 'Oger 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Oger-Nemesis',
        ort: 'Das Verlassene Dorf',
        requirement: 'Oger 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Horn',
        ort: 'Das Verlassene Dorf',
        requirement: 'Stier 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Metzger',
        ort: 'Das Verlassene Dorf',
        requirement: 'Stier 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Torero',
        ort: 'Das Verlassene Dorf',
        requirement: 'Stier 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Stier',
        ort: 'Das Verlassene Dorf',
        requirement: 'Stier 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Stier-Nemesis',
        ort: 'Das Verlassene Dorf',
        requirement: 'Stier 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Niedlich',
        ort: 'Wüste',
        requirement: 'Pool 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Unschuld',
        ort: 'Wüste',
        requirement: 'Pool 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Verwandlung',
        ort: 'Wüste',
        requirement: 'Pool 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Katze',
        ort: 'Wüste',
        requirement: 'Pool 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Katzen-Nemesis',
        ort: 'Wüste',
        requirement: 'Pool 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Jung',
        ort: 'Wüste',
        requirement: 'Wüstenbandit-Yamchu 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Casanova',
        ort: 'Wüste',
        requirement: 'Wüstenbandit-Yamchu 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Playboy',
        ort: 'Wüste',
        requirement: 'Wüstenbandit-Yamchu 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Wüstenbandit',
        ort: 'Wüste',
        requirement: 'Wüstenbandit-Yamchu 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Wüstenbandit-Nemesis',
        ort: 'Wüste',
        requirement: 'Wüstenbandit-Yamchu 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Karotte',
        ort: 'Die Pilzstadt',
        requirement: 'Karottenmonster 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Zauber',
        ort: 'Die Pilzstadt',
        requirement: 'Karottenmonster 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Mond',
        ort: 'Die Pilzstadt',
        requirement: 'Karottenmonster 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Häschen',
        ort: 'Die Pilzstadt',
        requirement: 'Karottenmonster 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Häschen-Nemesis',
        ort: 'Die Pilzstadt',
        requirement: 'Karottenmonster 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Untergebener',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Shu 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Anhänger',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Shu 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Mitläufer',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Shu 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Hund',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Shu 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Hunde-Nemesis',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Shu 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Diener',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Mai 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Helfer',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Mai 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Unterworfene',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Mai 499-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Unterworfener',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Mai 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Handlanger',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Mai 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Handlanger-Nemesis',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Mai 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Klein',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Pilaf 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Komplex',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Pilaf 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Reich',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Pilaf 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Herrscherin',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Pilaf 999-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Herrscher',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Pilaf 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Prinzen-Nemesis',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Pilaf 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Schuft',
        ort: 'Brown Country',
        requirement: 'Lunch 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Bandit',
        ort: 'Brown Country',
        requirement: 'Lunch 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Schurke',
        ort: 'Brown Country',
        requirement: 'Lunch 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Bad',
        ort: 'Brown Country',
        requirement: 'Lunch 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Diebin-Nemesis',
        ort: 'Brown Country',
        requirement: 'Lunch 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Bowlingkugel',
        ort: 'Trainingsinsel',
        requirement: 'Kid Krillin 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Kid',
        ort: 'Trainingsinsel',
        requirement: 'Kid Krillin 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Glatzkopf',
        ort: 'Trainingsinsel',
        requirement: 'Kid Krillin 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Shaolin',
        ort: 'Trainingsinsel',
        requirement: 'Kid Krillin 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Shaolin-Nemesis',
        ort: 'Trainingsinsel',
        requirement: 'Kid Krillin 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Kiemen',
        ort: 'Trainingsinsel',
        requirement: 'Hai 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Fischschuppe',
        ort: 'Trainingsinsel',
        requirement: 'Hai 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Haiflosse',
        ort: 'Trainingsinsel',
        requirement: 'Hai 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Haizahn',
        ort: 'Trainingsinsel',
        requirement: 'Hai 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Alter Knochen',
        ort: 'Trainingsinsel',
        requirement: 'T-Rex 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Scharfzahn',
        ort: 'Trainingsinsel',
        requirement: 'T-Rex 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Archäologe',
        ort: 'Trainingsinsel',
        requirement: 'T-Rex 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Tyranno',
        ort: 'Trainingsinsel',
        requirement: 'T-Rex 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Widerlich',
        ort: 'Trainingsinsel',
        requirement: 'Bakterian 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Stinkend',
        ort: 'Papayainsel',
        requirement: 'Bakterian 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Gestank',
        ort: 'Papayainsel',
        requirement: 'Bakterian 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Bakterian',
        ort: 'Papayainsel',
        requirement: 'Bakterian 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Gestank-Nemesis',
        ort: 'Papayainsel',
        requirement: 'Bakterian 1000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Frischling',
        ort: 'Papayainsel',
        requirement: 'Startnummer 69 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Start',
        ort: 'Papayainsel',
        requirement: 'Startnummer 69 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Nummer',
        ort: 'Papayainsel',
        requirement: 'Startnummer 69 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: '69',
        ort: 'Papayainsel',
        requirement: 'Startnummer 69 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Nr.69-Nemesis',
        ort: 'Papayainsel',
        requirement: 'Startnummer 69 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Berüchtigt',
        ort: 'Papayainsel',
        requirement: 'Gilian 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Stratege',
        ort: 'Papayainsel',
        requirement: 'Gilian 100-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Klaue',
        ort: 'Papayainsel',
        requirement: 'Gilian 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Drache',
        ort: 'Papayainsel',
        requirement: 'Gilian 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Drachen-Nemesis',
        ort: 'Papayainsel',
        requirement: 'Gilian 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Turban',
        ort: 'Papayainsel',
        requirement: 'Nam 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Ehrenhaft',
        ort: 'Papayainsel',
        requirement: 'Nam 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Mönch',
        ort: 'Papayainsel',
        requirement: 'Nam 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Buddha',
        ort: 'Papayainsel',
        requirement: 'Nam 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Mönch-Nemesis',
        ort: 'Papayainsel',
        requirement: 'Nam 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Verkleidet',
        ort: 'Papayainsel',
        requirement: 'Jackie Chun 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Schildkröte',
        ort: 'Papayainsel',
        requirement: 'Jackie Chun 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Lehrer',
        ort: 'Papayainsel',
        requirement: 'Jackie Chun 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Meister',
        ort: 'Papayainsel',
        requirement: 'Jackie Chun 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Meister-Nemesis',
        ort: 'Papayainsel',
        requirement: 'Jackie Chun 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Schlagfertig',
        ort: 'Wüsten-Stützpunkt',
        requirement: 'Oberst Silver 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Zweite Chance',
        ort: 'Wüsten-Stützpunkt',
        requirement: 'Oberst Silver 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Armee',
        ort: 'Wüsten-Stützpunkt',
        requirement: 'Oberst Silver 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Silver',
        ort: 'Wüsten-Stützpunkt',
        requirement: 'Oberst Silver 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Infanterist',
        ort: 'Jingledorf',
        requirement: 'RR Soldaten 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Streiter',
        ort: 'Jingledorf',
        requirement: 'RR Soldaten 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Waffennarr',
        ort: 'Jingledorf',
        requirement: 'RR Soldaten 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Soldat',
        ort: 'Jingledorf',
        requirement: 'RR Soldaten 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Android',
        ort: 'Muskelturm',
        requirement: 'Leutnant Metallic 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Leutnant',
        ort: 'Muskelturm',
        requirement: 'Leutnant Metallic 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Metallic',
        ort: 'Muskelturm',
        requirement: 'Leutnant Metallic 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: ' Terminator',
        ort: 'Muskelturm',
        requirement: 'Leutnant Metallic 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Schattenkrieger',
        ort: 'Muskelturm',
        requirement: 'Ninja Lila 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Saboteur',
        ort: 'Muskelturm',
        requirement: 'Ninja Lila 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Lila',
        ort: 'Muskelturm',
        requirement: 'Ninja Lila 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Ninja',
        ort: 'Muskelturm',
        requirement: 'Ninja Lila 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: '',
        ort: 'Muskelturm',
        requirement: 'Ninja Lila 5000-mal besiegen',
        color: '',
    },
    {
        name: 'Geiselnehmer',
        ort: 'Muskelturm',
        requirement: 'General White 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Schwächenfinder',
        ort: 'Muskelturm',
        requirement: 'General White 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'White',
        ort: 'Muskelturm',
        requirement: 'General White 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'General',
        ort: 'Muskelturm',
        requirement: 'General White 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Boxsack',
        ort: 'Westliche Hauptstadt',
        requirement: 'Straßenboxer 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: '100.000 Zeni',
        ort: 'Westliche Hauptstadt',
        requirement: 'Straßenboxer 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: ' Sparringspartner',
        ort: 'Westliche Hauptstadt',
        requirement: 'Straßenboxer 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: '?',
        ort: 'Westliche Hauptstadt',
        requirement: 'Straßenboxer 1000-mal besiegen',
        color: '',
    },
    {
        name: '?',
        ort: 'Westliche Hauptstadt',
        requirement: 'Straßenboxer 10000-mal besiegen',
        color: '',
    },
    {
        name: 'Programmiert',
        ort: 'Piratenhöhle',
        requirement: 'Piraten-Roboter 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Gebaut',
        ort: 'Piratenhöhle',
        requirement: 'Piraten-Roboter 100-mal besiegen',
        color: '',
    },
    {
        name: 'Roboter',
        ort: 'Piratenhöhle',
        requirement: 'Piraten-Roboter 500-mal besiegen',
        color: '',
    },
    {
        name: 'Pirat',
        ort: 'Piratenhöhle',
        requirement: 'Piraten-Roboter 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Meeresbewohner',
        ort: 'Piratenhöhle',
        requirement: 'Octopapa 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Rauch',
        ort: 'Piratenhöhle',
        requirement: 'Octopapa 100-mal besiegen',
        color: '',
    },
    {
        name: 'Tentakel',
        ort: 'Piratenhöhle',
        requirement: 'Octopapa 500-mal besiegen',
        color: '',
    },
    {
        name: 'Oktopus',
        ort: 'Piratenhöhle',
        requirement: 'Octopapa 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Verfolger',
        ort: 'Piratenhöhle',
        requirement: 'General Blue 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Befehlshaber',
        ort: 'Piratenhöhle',
        requirement: 'General Blue 100-mal besiegen',
        color: '',
    },
    {
        name: 'Vorgesetzter',
        ort: 'Piratenhöhle',
        requirement: 'General Blue 500-mal besiegen',
        color: '',
    },
    {
        name: 'Blue',
        ort: 'Piratenhöhle',
        requirement: 'General Blue 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Apparat',
        ort: 'Pinguinhausen',
        requirement: 'Arale 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Robotik',
        ort: 'Pinguinhausen',
        requirement: 'Arale 100-mal besiegen',
        color: '',
    },
    {
        name: 'Mechanisch',
        ort: 'Pinguinhausen',
        requirement: 'Arale 500-mal besiegen',
        color: '',
    },
    {
        name: 'Spaßcharakter',
        ort: 'Pinguinhausen',
        requirement: 'Arale 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Aggressiv',
        ort: 'Quittenwald',
        requirement: 'Oberst Yellow 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Humanoid',
        ort: 'Quittenwald',
        requirement: 'Oberst Yellow 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Yellow',
        ort: 'Quittenwald',
        requirement: 'Oberst Yellow 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Oberst',
        ort: 'Quittenwald',
        requirement: 'Oberst Yellow 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Schnurrbart',
        ort: 'Quittenwald',
        requirement: 'Tao BaiBai 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Söldner',
        ort: 'Quittenwald',
        requirement: 'Tao BaiBai 100-mal besiegen',
        color: '',
    },
    {
        name: 'Assasine',
        ort: 'Quittenwald',
        requirement: 'Tao BaiBai 500-mal besiegen',
        color: '',
    },
    {
        name: 'Profikiller',
        ort: 'Quittenwald',
        requirement: 'Tao BaiBai 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Assistent',
        ort: 'RR-Hauptquartier',
        requirement: 'Adjutant Black 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Offizier',
        ort: 'RR-Hauptquartier',
        requirement: 'Adjutant Black 100-mal besiegen',
        color: '',
    },
    {
        name: 'Black',
        ort: 'RR-Hauptquartier',
        requirement: 'Adjutant Black 500-mal besiegen',
        color: '',
    },
    {
        name: 'Adjutant',
        ort: 'RR-Hauptquartier',
        requirement: 'Adjutant Black 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Maschine',
        ort: 'RR-Hauptquartier',
        requirement: 'Adjutant Black (Rüstung) 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Metallisch',
        ort: 'RR-Hauptquartier',
        requirement: 'Adjutant Black (Rüstung) 100-mal besiegen',
        color: '',
    },
    {
        name: 'Rechte Hand',
        ort: 'RR-Hauptquartier',
        requirement: 'Adjutant Black (Rüstung) 500-mal besiegen',
        color: '',
    },
    {
        name: 'Rüstung',
        ort: 'RR-Hauptquartier',
        requirement: 'Adjutant Black (Rüstung) 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Unauffällig',
        ort: 'Uranai Babas Palast',
        requirement: 'Inkognito 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Verschwunden',
        ort: 'Uranai Babas Palast',
        requirement: 'Inkognito 100-mal besiegen',
        color: '',
    },
    {
        name: 'Unsichtbar',
        ort: 'Uranai Babas Palast',
        requirement: 'Inkognito 500-mal besiegen',
        color: '',
    },
    {
        name: 'Ikognito',
        ort: 'Uranai Babas Palast',
        requirement: 'Inkognito 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Blutsauger',
        ort: 'Uranai Babas Palast',
        requirement: 'Dracula 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Vampir',
        ort: 'Uranai Babas Palast',
        requirement: 'Dracula 100-mal besiegen',
        color: '',
    },
    {
        name: 'Gräfin',
        ort: 'Uranai Babas Palast',
        requirement: 'Dracula 499-mal besiegen',
        color: '',
    },
    {
        name: 'Graf',
        ort: 'Uranai Babas Palast',
        requirement: 'Dracula 500-mal besiegen',
        color: '',
    },
    {
        name: 'Dracula',
        ort: 'Uranai Babas Palast',
        requirement: 'Dracula 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Bandage',
        ort: 'Uranai Babas Palast',
        requirement: 'Die Mumie 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Langschläfer',
        ort: 'Uranai Babas Palast',
        requirement: 'Die Mumie 100-mal besiegen',
        color: '',
    },
    {
        name: 'Horror',
        ort: 'Uranai Babas Palast',
        requirement: 'Die Mumie 500-mal besiegen',
        color: '',
    },
    {
        name: 'Mumie',
        ort: 'Uranai Babas Palast',
        requirement: 'Die Mumie 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Forke',
        ort: 'Uranai Babas Palast',
        requirement: 'Akkuman 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Strahler',
        ort: 'Uranai Babas Palast',
        requirement: 'Akkuman 100-mal besiegen',
        color: '',
    },
    {
        name: 'Höllenwesen',
        ort: 'Uranai Babas Palast',
        requirement: 'Akkuman 500-mal besiegen',
        color: '',
    },
    {
        name: 'Teufel',
        ort: 'Uranai Babas Palast',
        requirement: 'Akkuman 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Unbekannt',
        ort: 'Uranai Babas Palast',
        requirement: 'Der maskierte Mann 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Mysteriös',
        ort: 'Uranai Babas Palast',
        requirement: 'Der maskierte Mann 100-mal besiegen',
        color: '',
    },
    {
        name: 'Opa',
        ort: 'Uranai Babas Palast',
        requirement: 'Der maskierte Mann 500-mal besiegen',
        color: '',
    },
    {
        name: 'Maskiert',
        ort: 'Uranai Babas Palast',
        requirement: 'Der maskierte Mann 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Bunt',
        ort: 'Stadtstraße',
        requirement: 'Pilafs Maschine 10-mal besiegen',
        color: '',
    },
    {
        name: 'Einheit',
        ort: 'Stadtstraße',
        requirement: 'Pilafs Maschine 100-mal besiegen',
        color: '',
    },
    {
        name: 'Kombiniert',
        ort: 'Stadtstraße',
        requirement: 'Pilafs Maschine 500-mal besiegen',
        color: '',
    },
    {
        name: 'Geheimwaffe',
        ort: 'Stadtstraße',
        requirement: 'Pilafs Maschine 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Afro',
        ort: 'Papayainsel',
        requirement: 'King Chapa 10-mal besiegen',
        color: '',
    },
    {
        name: 'Eingebildet',
        ort: 'Papayainsel',
        requirement: '',
        color: 'King Chapa 100-mal besiegen',
    },
    {
        name: '8-Hand',
        ort: 'Papayainsel',
        requirement: 'King Chapa 500-mal besiegen',
        color: '',
    },
    {
        name: 'König',
        ort: 'Papayainsel',
        requirement: 'King Chapa 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Kämpfer',
        ort: 'Papayainsel',
        requirement: 'Pamput 10-mal besiegen',
        color: '',
    },
    {
        name: 'Muay Thai',
        ort: 'Papayainsel',
        requirement: 'Pamput 100-mal besiegen',
        color: '',
    },
    {
        name: 'Unaufhaltbar',
        ort: 'Papayainsel',
        requirement: 'Pamput 500-mal besiegen',
        color: '',
    },
    {
        name: 'Filmstar',
        ort: 'Papayainsel',
        requirement: 'Pamput 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Mensch',
        ort: 'Papayainsel',
        requirement: 'Krillin (Turnier) 10-mal besiegen',
        color: '',
    },
    {
        name: 'Bester Freund',
        ort: 'Papayainsel',
        requirement: 'Krillin (Turnier) 100-mal besiegen',
        color: '',
    },
    {
        name: 'Turnierkämpfer',
        ort: 'Papayainsel',
        requirement: 'Krillin (Turnier) 500-mal besiegen',
        color: '',
    },
    {
        name: 'Rivale',
        ort: 'Papayainsel',
        requirement: 'Krillin (Turnier) 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Zauberer',
        ort: 'Papayainsel',
        requirement: 'Chiaotzu (Kranich-Schule) 10-mal besiegen',
        color: '',
    },
    {
        name: 'Magier',
        ort: 'Papayainsel',
        requirement: 'Chiaotzu (Kranich-Schule) 100-mal besiegen',
        color: '',
    },
    {
        name: 'Telekinese',
        ort: 'Papayainsel',
        requirement: 'Chiaotzu (Kranich-Schule) 500-mal besiegen',
        color: '',
    },
    {
        name: 'Telepath',
        ort: 'Papayainsel',
        requirement: 'Chiaotzu (Kranich-Schule) 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Student',
        ort: 'Papayainsel',
        requirement: 'Tenshinhan (Kranich-Schule) 10-mal besiegen',
        color: '',
    },
    {
        name: 'Kranich',
        ort: 'Papayainsel',
        requirement: 'Tenshinhan (Kranich-Schule) 100-mal besiegen',
        color: '',
    },
    {
        name: 'Flieger',
        ort: 'Papayainsel',
        requirement: 'Tenshinhan (Kranich-Schule) 500-mal besiegen',
        color: '',
    },
    {
        name: 'Kranich-Schule',
        ort: 'Papayainsel',
        requirement: 'Tenshinhan (Kranich-Schule) 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Lieferant',
        ort: 'Yajirobis Prärie',
        requirement: 'Yajirobi 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Katzenliebhaber',
        ort: 'Yajirobis Prärie',
        requirement: 'Yajirobi 100-mal besiegen',
        color: '',
    },
    {
        name: 'Unterstützer',
        ort: 'Yajirobis Prärie',
        requirement: 'Yajirobi 500-mal besiegen',
        color: '',
    },
    {
        name: 'Samurai',
        ort: 'Yajirobis Prärie',
        requirement: 'Yajirobi 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Loyal',
        ort: 'Yajirobis Prärie',
        requirement: 'Zimbel 10-mal besiegen',
        color: '',
    },
    {
        name: 'Gemein',
        ort: 'Yajirobis Prärie',
        requirement: 'Zimbel 100-mal besiegen',
        color: '',
    },
    {
        name: 'Mutation',
        ort: 'Yajirobis Prärie',
        requirement: 'Zimbel 500-mal besiegen',
        color: '',
    },
    {
        name: 'Zimbel',
        ort: 'Yajirobis Prärie',
        requirement: 'Zimbel 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Gargoyle',
        ort: 'Yajirobis Prärie',
        requirement: 'Tamburin 10-mal besiegen',
        color: '',
    },
    {
        name: 'Schlächter',
        ort: 'Yajirobis Prärie',
        requirement: 'Tamburin 100-mal besiegen',
        color: '',
    },
    {
        name: 'Mutiert',
        ort: 'Yajirobis Prärie',
        requirement: 'Tamburin 500-mal besiegen',
        color: '',
    },
    {
        name: 'Tamburin',
        ort: 'Yajirobis Prärie',
        requirement: 'Tamburin 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Böse Hälfte',
        ort: 'Yajirobis Prärie',
        requirement: 'Oberteufel Piccolo (Alt) 10-mal besiegen',
        color: '',
    },
    {
        name: 'Besessen',
        ort: 'Yajirobis Prärie',
        requirement: 'Oberteufel Piccolo (Alt) 100-mal besiegen',
        color: '',
    },
    {
        name: 'Anführerin',
        ort: 'Yajirobis Prärie',
        requirement: 'Oberteufel Piccolo (Alt) 499-mal besiegen',
        color: '',
    },
    {
        name: 'Anführer',
        ort: 'Yajirobis Prärie',
        requirement: 'Oberteufel Piccolo (Alt) 500-mal besiegen',
        color: '',
    },
    {
        name: 'Oberteufel',
        ort: 'Yajirobis Prärie',
        requirement: 'Oberteufel Piccolo (Alt) 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Schatten',
        ort: 'Eislabyrinth',
        requirement: 'Muten Roshi (Finsternis) 10-mal besiegen',
        color: '',
    },
    {
        name: 'Nacht',
        ort: 'Eislabyrinth',
        requirement: 'Muten Roshi (Finsternis) 100-mal besiegen',
        color: '',
    },
    {
        name: 'Dunkelheit',
        ort: 'Eislabyrinth',
        requirement: 'Muten Roshi (Finsternis) 500-mal besiegen',
        color: '',
    },
    {
        name: 'Finsternis',
        ort: 'Eislabyrinth',
        requirement: 'Muten Roshi (Finsternis) 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Frosch',
        ort: 'King Castle',
        requirement: 'Trommel 10-mal besiegen',
        color: '',
    },
    {
        name: 'Grünhaut',
        ort: 'King Castle',
        requirement: 'Trommel 100-mal besiegen',
        color: '',
    },
    {
        name: 'Trommler',
        ort: 'King Castle',
        requirement: 'Trommel 500-mal besiegen',
        color: '',
    },
    {
        name: 'Schlagzeuger',
        ort: 'King Castle',
        requirement: 'Trommel 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Erfrischt',
        ort: 'King Castle',
        requirement: 'Oberteufel Piccolo (Jung) 10-mal besiegen',
        color: '',
    },
    {
        name: 'Dämonisch',
        ort: 'King Castle',
        requirement: 'Oberteufel Piccolo (Jung) 100-mal besiegen',
        color: '',
    },
    {
        name: 'Chaos',
        ort: 'King Castle',
        requirement: 'Oberteufel Piccolo (Jung) 500-mal besiegen',
        color: '',
    },
    {
        name: 'Dämonin',
        ort: 'King Castle',
        requirement: 'Oberteufel Piccolo (Jung) 999-mal besiegen',
        color: '',
    },
    {
        name: 'Dämon',
        ort: 'King Castle',
        requirement: 'Oberteufel Piccolo (Jung) 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Höflich',
        ort: 'Gottespalast',
        requirement: 'Mr. Popo 10-mal besiegen',
        color: '',
    },
    {
        name: 'Gärtner',
        ort: 'Gottespalast',
        requirement: 'Mr. Popo 100-mal besiegen',
        color: '',
    },
    {
        name: 'Aufpasser',
        ort: 'Gottespalast',
        requirement: 'Mr. Popo 500-mal besiegen',
        color: '',
    },
    {
        name: 'Entität',
        ort: 'Gottespalast',
        requirement: 'Mr. Popo 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Köchin',
        ort: 'Papayainsel',
        requirement: 'Chichi 9-mal besiegen',
        color: '',
    },
    {
        name: 'Koch',
        ort: 'Papayainsel',
        requirement: 'Chichi 10-mal besiegen',
        color: '',
    },
    {
        name: 'Nörgeltante',
        ort: 'Papayainsel',
        requirement: 'Chichi 100-mal besiegen',
        color: '',
    },
    {
        name: 'Verliebt',
        ort: 'Papayainsel',
        requirement: 'Chichi 500-mal besiegen',
        color: '',
    },
    {
        name: 'Mutter',
        ort: 'Papayainsel',
        requirement: 'Chichi 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Teilnehmer',
        ort: 'Papayainsel',
        requirement: 'Tenshinhan (Turnier) 10-mal besiegen',
        color: '',
    },
    {
        name: 'Hybrid',
        ort: 'Papayainsel',
        requirement: 'Tenshinhan (Turnier) 100-mal besiegen',
        color: '',
    },
    {
        name: 'Triclops',
        ort: 'Papayainsel',
        requirement: 'Tenshinhan (Turnier) 500-mal besiegen',
        color: '',
    },
    {
        name: 'Finalist',
        ort: 'Papayainsel',
        requirement: 'Tenshinhan (Turnier) 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Namekianer',
        ort: 'Papayainsel',
        requirement: 'Piccolo (Reinkarnation) 10-mal besiegen',
        color: '',
    },
    {
        name: 'Rücksichtslos',
        ort: 'Papayainsel',
        requirement: 'Piccolo (Reinkarnation) 100-mal besiegen',
        color: '',
    },
    {
        name: 'Reinkarnation',
        ort: 'Papayainsel',
        requirement: 'Piccolo (Reinkarnation) 500-mal besiegen',
        color: '',
    },
    {
        name: 'Jr',
        ort: 'Papayainsel',
        requirement: 'Piccolo (Reinkarnation) 1000-mal besiegen',
        color: '',
    },
]

export default npcTitles
