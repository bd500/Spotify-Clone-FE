import {Route, Navigate} from "react-router-dom"

function PrivateRoute({children, user, ...rest}){
    const styles = {
        padding: "6rem 0 0 26rem",
        backgroundColor: "#181818",
        color: "#fff",
        minHeight: "calc(100vh - 6rem)",
    }

    return (
        user ? (<div style={styles}>{children}</div>) : <Navigate to="/" />
    )
}

export default PrivateRoute;