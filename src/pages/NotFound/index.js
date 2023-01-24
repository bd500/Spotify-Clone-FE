import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import record from "../../images/record";
import recordArm from "../../images/record-arm.svg";
import styles from "./styles.module.scss";

function NotFound(){

    const navigate = useNavigate();

    useEffect(()=>{
        document.title="404 not found"
    })

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.main}>
                    <h1>404s and Heartbreaks</h1>
                    <p>We couldn't find the page you were looking for. Please try again.</p>
                    <span onClick={() => navigate("/")}>Go Back Home</span>
                </div>
            </div>
            <div className={styles.right}>
                <img src={record} alt="record" className={styles.record} />
                <img src={recordArm} alt="record-arm" className={styles.record_arm} />
            </div>
        </div>
    )
}

export default NotFound;