import Joi from "joi";
import passwordComplexity from "joi-password-complexity";
import TextField from "../../components/Inputs/TextField/TextField";
import Select from "../../components/Inputs/Select/Select";
import RadioInput from "../../components/Inputs/Radio/Radio";
import Button from "../../components/Button/Button";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

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

function Profile(){
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

    function handleSubmit(event){
        event.preventDefault();
        console.log(data);
    }

    const schema = {
        email: Joi.string().email({tlds: false}).required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        name: Joi.string().min(1).max(15).required().label("Name"),
    };

    useEffect(()=>{
        document.title="Profile";
    },[]);

    return (
        <div className={styles.container}>
            <h1>Profile</h1>
            <form onSubmit={handleSubmit} className={styles.form_container}>
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
                        label="Gender"
                        name="gender"
                        handleInputState={handleInputState}
                        options={genders}
                        required={true}
                    />
                </div>
                <div className={styles.submit_btn_wrapper}>
                    <Button label="Update" type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Profile;