import Joi from "joi";
import {Link} from "react-router-dom";
import passwordComplexity from "joi-password-complexity";
import TextField from "../../components/Inputs/TextField/TextField";
import Select from "../../components/Inputs/Select/Select";
import RadioInput from "../../components/Inputs/Radio/Radio";
import CheckboxInput from "../../components/Inputs/Checkbox/CheckboxInput";
import Button from "../../components/Button/Button";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import logo from "../../images/black_logo.svg";

const months = [
    {name: "January", value: "01"},
    {name: "February", value: "02"},
    {name: "March", value: "03"},
    {name: "April", value: "04"},
    {name: "May", value: "05"},
    {name: "June", value: "06"},
    {name: "July", value: "07"},
    {name: "August", value: "08"},
    {name: "September", value: "09"},
    {name: "October", value: "10"},
    {name: "November", value: "11"},
    {name: "December", value: "12"}
];

const genders = ["male", "female"];

function SignUp(){

    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        month: "",
        year: "",
        date: "",
        gender: "",
    });

    const [errors, setErrors] = useState({});

    function handleInputState(name, value){
        setData((data) => ({...data, [name]: value}))
    }

    function handleErrorState(name, value){
        value === "" ? delete errors[name] : setErrors(() => ({...errors, [name]: value}));
    }

    const schema = {
        email: Joi.string().email({tlds: false}).required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        name: Joi.string().min(1).max(15).required().label("Name"),
    };

    const handleSubmit = async  (e) => {
        e.preventDefault();
        if(Object.keys(errors).length === 0){
            console.log(data);
        }else{
            console.log("Please fill out properly");
        }
    }

    useEffect(() => {
        document.title="Search";
    },[]);
    
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
        <h1 className={styles.heading}>Sign up for free to start listening.</h1>
        <p className={styles.login}>
            Already have an account? <Link to="/login">Log in.</Link>
        </p>
        <p className={styles.or_container}>or</p>
        <Button  
            label="Sign up with Facebook"
            style={{background: "#1877f2", color: "white"}}
        />
        <p className={styles.or_container}>or</p>
        <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1 className={styles.form_heading}>Sign up with your email.</h1>
            <div className={styles.input_container}>
                <TextField 
                    label="What your email"
                    placeholder="Enter your email"
                    name="email"
                    handleInputState={handleInputState}
                    schema = {schema.email}
                    error={errors.email}
                    value={data.email}
                    handleErrorState={handleErrorState}
                    required={true}
                />
            </div>
            <div className={styles.input_container}>
                <TextField 
                    label="Create a password"
                    placeholder="Enter your password"
                    name="password"
                    handleInputState={handleInputState}
                    schema = {schema.password}
                    error={errors.password}
                    value={data.password}
                    handleErrorState={handleErrorState}
                    required={true}
                    type="password"
                />
            </div>
            <div className={styles.input_container}>
                <TextField 
                    label="What should we call you"
                    placeholder="Enter your name"
                    name="name"
                    handleInputState={handleInputState}
                    schema = {schema.name}
                    error={errors.name}
                    value={data.name}
                    handleErrorState={handleErrorState}
                    required={true}
                />
            </div>
            <div className={styles.date_of_birth_container}>
                <p>What's your date of birth?</p>
                <div className={styles.date_of_birth}>
                    <div className={styles.date}>
                        <TextField 
                            label="Date"
                            placeholder="DD"
                            name="date"
                            value={data.date}
                            handleInputState={handleInputState}
                            required={true}
                        />
                    </div>
                    <div className={styles.month}>
                        <Select 
                            label="Month"
                            placeholder={"Months"}
                            options={months}
                            name="month"
                            value={data.month}
                            handleInputState={handleInputState}
                            required={true}
                        />
                    </div>
                    <div className={styles.year}>
                        <TextField 
                            label="Year"
                            placeholder="YYYY"
                            name="year"
                            value={data.year}
                            handleInputState={handleInputState}
                            required={true}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.input_container}>
                <RadioInput 
                    label="What's your gender?"
                    name="gender"
                    handleInputState={handleInputState}
                    options={genders}
                    required={true}
                />
            </div>
            <div className={styles.checkbox_container}>
                <CheckboxInput 
                    required={true}
                    label="Share my registration data with Spotify's content providers for marketing purposes."
                />
            </div>
            <p className={styles.term_conditions}>
                By clicking on Sign Up, you agree to Spotify's  <a href="/#">Terms and Conditions of Use</a>
            </p>
            <p className={styles.term_conditions}>
                To learn more about Spotify collects, uses, shares and protects your personal data
                , please see <a href="/#">Our Privacy Policy</a>
            </p>
            <div className={styles.submit_btn_wrapper}>
                <Button 
                    label="Sign Up"
                    type="submit"
                />
            </div>

        </form>
        </div>
    )
}

export default SignUp;