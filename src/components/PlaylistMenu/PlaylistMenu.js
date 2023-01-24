import {Fragment} from "react";
import {ClickAwayListener} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styles from "./styles.module.scss";

function PlaylistMenu({playlists, closeMenu}){
    return (
        <ClickAwayListener onClickAway={closeMenu}>
            <div className={styles.menu} onClick={closeMenu}>
                <div className={styles.playlist_options}>
                    <p>Add to Playlist</p>
                    <Fragment>
                        <ArrowRightIcon />
                        <div className={styles.playlists}>
                            {playlists.map((playlist) => (
                                <div className={styles.option} key={playlist._id}>
                                    <p>{playlist.name}</p>
                                </div>
                            ))}
                        </div>
                    </Fragment>
                </div>

                <div className={styles.option}>
                    <p>Go to artist</p>
                </div>
                <div className={styles.option}>
                    <p>Share</p>
                </div>
            </div>
        </ClickAwayListener>
    )
}

export default PlaylistMenu