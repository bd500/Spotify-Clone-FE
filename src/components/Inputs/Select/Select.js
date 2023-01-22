import styles from "./styles.module.scss";

function Select({label, options, handleInputState, placeholder, ...rest}){
    function onChangeHandler(event){
        const input = event.currentTarget;
        handleInputState(input.name, input.value);
    }

    return (
        <div className={styles.container}>
            <p className={styles.label}>{label}</p>
            <select onChange={onChangeHandler} {...rest} className={styles.select}>
                <option style={{display: "none"}} value="">
                    {placeholder}
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select;