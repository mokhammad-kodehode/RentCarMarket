

import LoginForm from "../../components/loginForm/LoginForm";
import styles from "./styles.module.css";

function LoginPage() {
    return (
        <div>
            <main className={styles.container}>
                 <LoginForm/>
            </main>
        </div>

    )
}

export default LoginPage;