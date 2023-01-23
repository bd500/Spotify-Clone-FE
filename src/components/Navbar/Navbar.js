import {ClickAwayListener} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowBackIsoRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIsoRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "./styles.module.scss";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

function Navbar(){
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();

    return (
        <div className={styles.contaienr}>
            <div className={styles.left}>
                <div className={styles.icon} onClick={() => navigate(-1)}>
                    <ArrowBackIsoRoundedIcon />
                </div>
                <div className={styles.icon} onClick={() => navigate(1)}>
                    <ArrowForwardIsoRoundedIcon />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.profile_menu} style={{backgroundColor: menu ? "#282828" : "#000"}}
                    onClick={() => setMenu(!menu)}
                >
                    <AccountCircleIcon />
                    <p>Quoc Bao</p>
                    {menu ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </div>
            </div>
            {menu && (
                <ClickAwayListener onClickAway={() => setMenu(false)}>
                    <div className={styles.menu} onClick={() => setMenu(false)}>
                        <Link to="/me">
                            <div className={styles.options}>
                                <p>My Profile</p>
                                <PersonIcon />
                            </div>
                        </Link>
                        <div className={styles.options}>
                            <p>Setting</p>
                        </div>
                        <div className={styles.options}>
                            <p>Logout</p>
                        </div>
                    </div>
                </ClickAwayListener>
            )}
        </div>
    )
}

export default Navbar;