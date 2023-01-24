import Like from "../Like/Like";
import {IconButton} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./styles.module.scss";
import PlaylistMenu from "../PlaylistMenu/PlaylistMenu";
import { useState } from "react";

function Song({song, playlist}){
    const [menu, setMenu] = useState(false);

    return (
        <div className={styles.song_container}>
            <div className={styles.left}>
                <IconButton className={styles.play_btn}>
                    <PlayArrowIcon />
                </IconButton>
                <img src={song.img} alt="song_img" />
                <p>{song.name}</p>
            </div>
            <div className={styles.center}>
                <p>{song.artist}</p>
            </div>
            <div className={styles.right}>
                <Like/>
                <p>4.30</p>
                <IconButton className={styles.menu_btn} onClick={()=>setMenu(true)}>
                    <MoreHorizIcon />
                </IconButton>
                {menu && (
                    <PlaylistMenu playlists={playlist} closeMenu={() => setMenu(false)} />
                )}
            </div>
        </div>
    )
}

export default Song;