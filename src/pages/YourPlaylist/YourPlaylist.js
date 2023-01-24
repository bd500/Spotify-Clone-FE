import Song from "../../components/Song/Song";
import PlaylistModel from "../../components/PlaylistModel/PlaylistModel";
import { IconButton } from "@mui/material";
import playlistImg from "../../images/folk.jpg";
import blue from "../../images/blue.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./styles.module.scss";
import { Fragment, useState } from "react";
import { useEffect } from "react";

const playlist = {
    _id: 1,
    img: playlistImg,
    name: "Today's Top Song",
    desc: "sumthing idc idk...",
}

const songs = [
    {_id: 1, img: blue, name: "A case of you", artist: "Joni Mitchell"},
]

function YourPlaylist(){
    const [model, setModel] = useState(false);

    useEffect(() => {
        document.title="Playlists";
    },[]);

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <div className={styles.head_gradient}></div>
                {playlist.img === "" ? (
                    <img 
                        src="https://static.thenounproject.com/png/17849-200.png"
                        alt={playlist.name}
                        style={{background: "#919496"}}
                        />
                    ) : (
                        <img 
                        src={playlist.img}
                        alt={playlist.name}
                    />
                )}
                <div className={styles.playlist_info}>
                    <p>Playlist</p>
                    <h1>{playlist.name}</h1>
                    <span>{playlist.desc}</span>
                </div>
                <div className={styles.action_container}>
                    <IconButton onClick={()=> setModel(true)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton >
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.body_nav}>
                    <div className={styles.left}>
                        <span>#</span>
                        <p>Tittle</p>
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
                        <Song song={song} playlist={playlist} />
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default YourPlaylist;