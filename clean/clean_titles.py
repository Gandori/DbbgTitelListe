import os
import sqlite3


def create_tables(cursor: sqlite3.Cursor) -> None:
    locations_table: str = """
        CREATE TABLE IF NOT EXISTS `places` (
            `id` int(11) NOT NULL,
            `name` varchar(90),
            `image` varchar(255),
            `description` longtext,
            `planet` varchar(90),
            `actions` longtext NOT NULL,
            `items` longtext NOT NULL,
            `npcs` longtext NOT NULL,
            `x` int(4) NOT NULL,
            `y` int(4) NOT NULL,
            `travelable` tinyint(1) NOT NULL DEFAULT 1,
            `display` tinyint(1) NOT NULL DEFAULT 1,
            `trainers` longtext NOT NULL,
            `learnableattacks` longtext NOT NULL,
            `adminplace` tinyint(1) NOT NULL
        );
        """
    npcs_table: str = """
        CREATE TABLE `npcs` (
        `id` int(11) NOT NULL,
        `name` varchar(90) NOT NULL,
        `image` varchar(30) NOT NULL,
        `description` longtext NOT NULL,
        `lp` int(10) NOT NULL,
        `mlp` int(11) NOT NULL,
        `kp` int(10) NOT NULL,
        `mkp` int(11) NOT NULL,
        `attack` int(10) NOT NULL,
        `defense` int(10) NOT NULL,
        `accuracy` int(11) NOT NULL,
        `reflex` int(11) NOT NULL,
        `attacks` longtext NOT NULL,
        `zeni` int(10) NOT NULL,
        `dragoncoins` int(11) NOT NULL,
        `items` longtext NOT NULL,
        `survivalrounds` int(4) NOT NULL,
        `survivalteam` int(2) NOT NULL,
        `survivalwinner` int(2) NOT NULL,
        `race` varchar(30) NOT NULL,
        `healthratio` int(3) NOT NULL,
        `healthratioteam` int(2) NOT NULL,
        `healthratiowinner` int(2) NOT NULL,
        `playerattack` longtext NOT NULL,
        `overrideattacks` int(3) NOT NULL,
        `patterns` longtext NOT NULL,
        `level` int(4) NOT NULL,
        `isstatsprocentual` tinyint(1) NOT NULL,
        `survivalkeepalive` int(2) NOT NULL DEFAULT 0,
        `randompatterns` tinyint(1) NOT NULL
        );
        """
    titles_table: str = """
        CREATE TABLE `titel` (
            `id` int(11) NOT NULL,
            `name` varchar(50) NOT NULL,
            `color` varchar(6) NOT NULL,
            `description` longtext NOT NULL,
            `type` int(3) NOT NULL,
            `typecondition` int(11) NOT NULL,
            `typenpc` int(11) NOT NULL,
            `typefight` int(1) NOT NULL,
            `typeaction` int(11) NOT NULL,
            `typesort` int(2) NOT NULL,
            `typeattack` int(11) NOT NULL,
            `star` varchar(10) NOT NULL,
            `item` int(11) NOT NULL
        );
        """

    files: list = [
        {
            "name": "location.sql",
            "data": locations_table,
        },
        {
            "name": "npc.sql",
            "data": npcs_table,
        },
        {
            "name": "title.sql",
            "data": titles_table,
        },
    ]
    for file in files:
        cursor.execute(file.get("data"))
        with open(file.get("name"), "r") as file:
            cursor.execute(file.read())
            conn.commit()


def get_npc_from_locations(cursor: sqlite3.Cursor) -> None:
    locations: list[tuple] = []
    cursor.execute("select name, npcs from places")
    for npcs in cursor.fetchall():
        place_name: str = npcs[0]
        place_npcs_ids: str = npcs[1]

        if place_npcs_ids:
            print("---------------------------------")
            print(f"Name: {place_name}")
            print(f"Npcs:")

        for npc in place_npcs_ids.split(";"):
            cursor.execute(f"select name from npcs where id = '{npc}'")
            data = cursor.fetchone()
            if data:
                print(f"    Id: {npc} | Name: {data[0]}")


if __name__ == "__main__":
    db_file: str = "dragoball.db"

    if not os.path.isfile(db_file):
        conn = sqlite3.connect(db_file)
        cursor = conn.cursor()
        create_tables(cursor=cursor)
    else:
        conn = sqlite3.connect(db_file)
        cursor = conn.cursor()

    get_npc_from_locations(cursor=cursor)

    cursor.execute(f"select name, typenpc, typecondition from titel")
    data = cursor.fetchall()
    with open("titles.txt", "w") as file:
        for titel in data:
            name: str = titel[0]
            npc_id: int = titel[1]

            cursor.execute(f"select name from npcs where id = '{npc_id}'")
            data: tuple = cursor.fetchone()

            if data:
                npc: str = data[0]
                requirements: str = titel[2]

                file.write("{\n")
                file.write(f"   name: '{name}',\n")
                file.write(f"   ort:,\n")
                file.write(f"   requirement: '{npc} {requirements} besiegen',\n")
                file.write(f"   color:,\n")
                file.write("},\n")
