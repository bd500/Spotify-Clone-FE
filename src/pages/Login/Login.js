import {Link} from "react-router-dom";
import Joi from "joi";
import TextField from "../../components/Inputs/TextField/TextField";
import CheckboxInput from "../../components/Inputs/Checkbox/CheckboxInput";
import Button from "../../components/Button/Button";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import logo from "../../images/black_logo.svg";
import styles from "./styles.module.scss";
import { useState } from "react";

function Login(){
    const [data, setData] = useState({email: "", password: ""});
    const [errors, setErrors] = useState({});

    function handleInputState(name, value){
        setData({...data, [name]: value});
    }

    function handleErrorState(name, value){
        value === "" ? delete errors[name] : setErrors({...errors, [name]: value});
    }

    const schema = {
        email: Joi.string().email({tlds: false}).required().label("Email"),
        password: Joi.string().required().label("Password"),
    }

    async function handleSubmit(e){
        e.preventDefault();
        if(Object.keys(errors).length === 0){
            console.log(data);
        }else{
            console.log("Please fill out properly");
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.logo_container}>
                <Link to="/" >
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <main className={styles.main}>
                <h1 className={styles.heading}>Log in to Spotify to continue.</h1>
                <button className={styles.contained_btn} style={{background: "#3b5998"}}>
                    <FacebookRoundedIcon /> Log in with Facebook
                </button>
                <button className={styles.contained_btn} style={{background: "#000"}}>
                    <AppleIcon /> Log in with AppleMusic
                </button>
                <button className={styles.outline_btn} >
                    <GoogleIcon /> Log in with Google
                </button>
                <p className={styles.or_container}>or</p>
                <form className={styles.form_container} onSubmit={handleSubmit}>
                    <div className={styles.input_container}>
                        <TextField 
                            label="Email Address"
                            placeholder="Enter your email"
                            name="email"
                            handleInputState={handleInputState}
                            schema={schema.email}
                            handleErrorState={handleErrorState}
                            error={errors.email}
                            value={data.email}
                            required={true}
                        />
                    </div>
                    <div className={styles.input_container}>
                        <TextField 
                            label="Password"
                            placeholder="Enter your password"
                            name="password"
                            handleInputState={handleInputState}
                            schema={schema.password}
                            handleErrorState={handleErrorState}
                            error={errors.password}
                            value={data.password}
                            required={true}
                        />
                    </div>
                    <p className={styles.forgot_password}>Forgot password?</p>
                    <div className={styles.form_bottom}>
                        <CheckboxInput 
                            label="Remember me"
                        />
                        <Button 
                            type="submit"
                            label="Log in"
                            style={{color: "white", background: "#15883e", width: "20rem"}}
                        />
                    </div>
                </form>
                <h1 className={styles.dont_have_account}>Don't have an account?</h1>
                <Link to="/signup" >
                    <button className={styles.outline_btn}>
                        Sign up for Spotify
                    </button>
                </Link>
            </main>
        </div>
    )
}

export default Login;