import React from "react";
import styles from "./share.module.css";
import InputSettings from "../../components/forms/settingsform/CarInputs";




function ShareCarPage() {
    return (
        <>
        <section className={styles.container}>
            <h1 className={styles.title}>Share Car</h1>
            <InputSettings/>
        </section>
        <section className = {styles.cars}>

        </section>
        </>
    )
}

export default ShareCarPage;