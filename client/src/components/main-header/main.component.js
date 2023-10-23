import React from "react";
import styles from "./main.module.css"
import orcas from "../../assets/orcas.mp4";

const Main = ({ content }) => {
    return (
        <div className={styles["main"]}>
            <video src={orcas} autoPlay loop muted />
            <div className={styles["content"]}>
                {content}
            </div>
        </div>
    )
}

export default Main;