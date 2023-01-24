import { Fragment, useEffect } from "react";
import Song from "../../components/Song/Song";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styles from "./styles.module.scss";
import likeImg from "../../images/like.jpg";
import blue from "../../images/blue.jpg";

const songs = [
    {_id: 1, img: blue, name: "A case of you", artist: "Joni Mitchell"},
]

function LikedSongs(){

    useEffect(()=>{
        document.title="Favorite songs";
    },[]);

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <div className={styles.head_gradient}></div>
                <img src={likeImg} alt="liked song"/>
                <div className={styles.playlist_info}>
                    <p>Playlist</p>
                    <h1>Liked Songs</h1>
                    <span>By Quoc Bao</span>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.body_nav}>
                    <div className={styles.left}>
                        <span>#</span>
                        <p>Title</p>
                    </div>
                    <div className={styles.center}>
                        <p>Artist</p>
                    </div>
                    <div className={styles.right}>
                        <AccessTimeIcon />
                    </div>
                </div>
                {songs.map((song) => (
                    <Fragment key={song._id}>
                        <Song song={song} />
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default LikedSongs;