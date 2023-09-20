import React from "react";

import  SignUpForm  from "../../components/signUpComponents/SignUpForm";
import styles from "./styles.module.css";

function SignUpPage() {
    return (
        <div>
            <main className={styles.container}>
                 <SignUpForm/>
            </main>
        </div>

    )
}

export default SignUpPage;