import { Fragment, useEffect, useState } from "react";
import Song from "../../components/Song/Song";
import Playlist from "../../components/Playlist/Playlist";
import { IconButton } from "@mui/material";
import blue from "../../images/blue.jpg";
import playlistImg from "../../images/folk.jpg";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "./styles.module.scss";

const playlists = [
    { _id: 1, img: playlistImg, name: "Today's Top Songs", desc: "for you"},
];

const songs = [
    {_id: 1, img: blue, name: "A case of you", artist: "Joni Mitcehll"},
]

function Search(){
    const [search, setSearch] = useState("");
    async function handleSearch(event){
        setSearch(event.currentTarget.value);
    }

    useEffect(() => {
        document.title="Search";
    },[]);

    return (
        <div className={styles.container}>
            <div className={styles.search_input_container}>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input 
                    type="text"
                    placeholder="Search for songs and playlists"
                    onChange={handleSearch}
                    value={search}
                />
                <IconButton onClick={() => setSearch("")}>
                    <ClearIcon />
                </IconButton>
            </div>
            <div className={styles.results_container}>
                <div className={styles.songs_container}>
                    {songs.map((song) => (
                        <Fragment key={song._id}>
                            <Song song={song} />
                        </Fragment>
                    ))}
                </div>
                <div className={styles.playlists_container}>
                    <Playlist playlists={playlists} />
                </div>
            </div>
        </div>
    )
}

export default Search;