
import styles from "./banner.module.css";
import { Form } from "../forms/MyForm";

function Banner() {
  return (
      <section className={styles.container}>
        <div className={styles.container_title}>
            <div className={styles.titles}>
            <h1 className={styles.container_title_text}>Car rental marketplace</h1>
            <p className={styles.container_title_parag}>
                ReCar revolutionizes car sharing, 
               making it effortless to borrow vehicles
               for any occasion or profit from your own 
               car by sharing it with others.</p>
            </div>
            <Form/>
        </div>
      </section>
  );
}


export default Banner;