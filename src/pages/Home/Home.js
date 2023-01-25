import { Fragment, useEffect } from "react";
import Playlist from "../../components/Playlist/Playlist";
import playlistImg from "../../images/music.png";
import styles from "./styles.module.scss";

const playlists = [
	{ _id: 1, img: playlistImg, name: "Today's Top Songs", desc: "By Quoc Bao" },
];

function Home(){

    useEffect(()=>{
        document.title="Spotify";
    },[])

    return (
        <Fragment>
            <div className={styles.container}>
                <h1>G'Day</h1>
                <div className={styles.playlist_container}>
                    <Playlist playlists={playlists} />
                </div>
                <h1>Just the hits</h1>
                <div className={styles.playlist_container}>
                    <Playlist playlists={playlists} />
                </div>
            </div>
        </Fragment>
    )
}

export default Home;