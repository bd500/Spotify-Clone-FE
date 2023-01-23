import {NavLink} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddIcon from "@mui/icons-material/Add";
import logo from "../../images/white_logo.svg";
import likeImg from "../../images/like.jpg";
import styles from "./styles.module.scss";

const playlists = [
    {_id: 1, img: "", name: "Today's Top Songs", desc: "By Quoc Bao"},
];

function Sidebar(){
    return (
        <div className={styles.container}>
            <img src={logo} className={styles.logo} alt="logo" />
            <NavLink 
                className={({isActive}) => !isActive ? styles.menu_link : [styles.menu_link, styles.active_menu]} 
                to="/home" >
                <HomeIcon />
                <span>Home</span>
            </NavLink>
            <NavLink 
                className={({isActive}) => !isActive ? styles.menu_link : [styles.menu_link, styles.active_menu]} 
                to="/search" >
                <SearchIcon />
                <span>Search</span>
            </NavLink>
            <NavLink 
                className={({isActive}) => !isActive ? styles.menu_link : [styles.menu_link, styles.active_menu]} 
                to="/collection/playlists" >
                <LibraryMusicIcon />
                <span>Your Library</span>
            </NavLink>
            <div className={styles.create_playlist_btn}>
                <AddIcon />
                <span>Create your playlist</span>
            </div>
            <NavLink 
                className={({isActive}) => !isActive ? styles.menu_link : [styles.menu_link, styles.active_menu]} 
                to="/collection/tracks" >
                <img src={likeImg} alt="like" />
                <span>Liked Songs</span>
            </NavLink>
            <div className={styles.underline}>
                {playlists.map((playlist) => (
                    <NavLink 
                        key={playlist.id}
                        to={`/playlist/${playlist._id}`}
                        className={({isActive}) => !isActive ? styles.menu_link : [styles.menu_link, styles.active_menu]}
                    >
                        {playlist.name}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;