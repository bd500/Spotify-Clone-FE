import {CircularProgress} from "@mui/material"
import styles from "./styles.module.scss"

function Button({label, isFetching, ...rest}){
    return (
        <button {...rest} className={styles.primary_btn}>
            {
                isFetching ? (<CircularProgress size={25} style={{color: "black"}} />) 
                : (`${label}`)
            }
        </button>
    );
}

export default Button;