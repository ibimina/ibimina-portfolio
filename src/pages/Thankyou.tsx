import { useRouter } from "next/router";
import styles from "../styles/thankyou.module.css";
export default function Thankyou() {
  const router = useRouter();
  const handleSubmit = () => {
 router.push("/")
  ;
  };
  return (
    <div className={styles.container}>
      <div className={styles.thanks}>
        <h2 className={styles.thankyou}>Thanks for the message!</h2>
        <p className={styles.res}>I'll get back to you as soon as possible</p>
        <button onClick={handleSubmit} className={styles.btn}>
          BACK TO PORTFOLIO
        </button>
      </div>
     
    </div>
  );
}
