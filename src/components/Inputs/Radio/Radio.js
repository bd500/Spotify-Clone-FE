import Radio from "@mui/material/Radio";
import { RadioGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import styles from "./styles.module.scss";

function RadioInput({name, handleInputState, label, options, required, ...rest}){

    function onChangeHandler(event){
        handleInputState(event.currentTarget.name, event.currentTarget.value);
    }

    return(
        <div className={styles.container}>
            <p>{label}</p>
            <RadioGroup {...rest} row name={name} onChange={onChangeHandler} >
                {options.map((option, index) => (
                    <FormControlLabel 
                        key={index}
                        value={option}
                        control={
                            <Radio 
                                disableRipple
                                styles={{color: "#15883e", transform: "scale(1.2)"}}
                                required={required}
                            />
                        }
                        label={option}
                        className={styles.radio_input}
                    />
                ))}
            </RadioGroup>
        </div>
    )
}

export default RadioInput;