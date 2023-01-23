import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./styles.module.scss";
import { useState } from "react";

function Like(){
    const [like, setLike] = useState(false);

    return (
        <IconButton 
            className={styles.like_btn}
            onClick={() => setLike(!like)}
        >
            {!like ? (
                <FavoriteBorderIcon className={styles.like_outlined} />
            ) : (
                <FavoriteIcon className={styles.like_filled} />
            )}
        </IconButton>
    )
}

export default Like;