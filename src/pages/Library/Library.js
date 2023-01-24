import { useEffect } from "react";
import { Link } from "react-router-dom";
import Playlist from "../../components/Playlist/Playlist";
import playlistImg from "../../images/folk.jpg";
import styles from "./styles.module.scss";

const playlist = [{
    _id: 1,
    img: playlistImg,
    name: "Today's Top Song",
    desc: "sumthing idc idk...",
}];

function Library(){

    useEffect(()=>{
        document.title="Library";
    },[]);

    return (
        <div className={styles.container}>
            <h1>Playlists</h1>
            <div className={styles.playlist_container}>
                <Link to="/collection/tracks" >
                    <div className={styles.liked_songs}>
                        <h1>Liked Songs</h1>
                        <p>1 Liked Songs</p>
                    </div>
                </Link>
                <Playlist playlists={playlist} />
            </div>
        </div>
    )
}

export default Library;