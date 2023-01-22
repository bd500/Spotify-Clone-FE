import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import styles from "./styles.module.scss";

function CheckboxInput({label, ...rest}){
    return (
        <FormControlLabel 
            className={styles.checkbox_container}
            label={label}
            control={
                <Checkbox 
                    {...rest}
                    style={{color: "#15883e"}}
                    className={styles.checkbox}
                    
                />
            }
        />
    )
}

export default CheckboxInput;