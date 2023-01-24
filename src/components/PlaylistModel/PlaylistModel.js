import TextField from "../Inputs/TextField/TextField";
import FileInput from "../Inputs/FileInput/FileInput";
import Button from "../Button/Button";
import {IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import defaultImg from "../../images/music.png";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

function PlaylistModel({closeModel, playlist}){
    const [data, setData] = useState({
        name: "",
        desc: "",
        img: "",
    });

    useEffect(() => {
        setData({
            name: playlist.name,
            desc: playlist.desc,
            img: playlist.img
        })
    }, [playlist]);

    function handleInputState(name, value){
        setData((prev) => ({...prev, [name]: value}));
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(data);
    }

    return (
        <div className={styles.model_container}>
            <IconButton className={styles.clsoe_btn} onClick={closeModel}>
                <CloseIcon />
            </IconButton>
            <div className={styles.form_container}>
                <h1>Edit Details</h1>
                <div className={styles.input_container}>
                    <TextField 
                        label="Name"
                        name="name"
                        value={data.name}
                        handleInputState={handleInputState}
                    />
                </div>
                <div className={styles.input_container}>
                    <TextField 
                        label="Description"
                        name="desc"
                        value={data.desc}
                        handleInputState={handleInputState}
                    />
                </div>
                <div className={styles.input_container}>
                    <TextField 
                        label="Choose Image"
                        name="img"
                        type="imgage"
                        value={data.img === "" ? defaultImg : data.img}
                        handleInputState={handleInputState}
                    />
                </div>
                <Button 
                    label="Submit"
                    onClick={handleSubmit}
                    style={{
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                        margin: "1rem"
                    }}
                />
            </div>
        </div>
    )
}

export default PlaylistModel;