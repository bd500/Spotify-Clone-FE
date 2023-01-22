import {useRef} from "react";
import Button from "../../Button/Button";
import styles from "./styles.module.scss";

function FileInput({name, label, value, icon, type, handleInputState, ...rest}){

    const inputRef = useRef();

    function onChangeHandler(event){
        handleInputState(name, event.currentTarget.files[0]);
    }

    return (
        <div className={styles.container}>
            <input 
                type="file"
                ref={inputRef}
                onChange={onChangeHandler}
                value={value}
                {...rest}
            />
            <Button 
                style={{width: "15rem"}}
                onClick={() => inputRef.current.click()}
                label={label}
            />
            {type === "image" && value && (
                <img src={typeof value === "string" ? value : URL.createObjectURL(value)} alt="file" />
            )}
            {type === "audio" && value && (
                <audio src={typeof value === "string" ? value : URL.createObjectURL(value)} />
            )}
            <Button 
                label="Upload"
                style={{width: "10rem"}}
            />
        </div>
    )
}

export default FileInput;