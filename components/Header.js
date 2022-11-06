import styles from '../styles/index.module.css';
import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.brand_box}>
          <Navbar />
        </div>

        <div className={styles.text_box}>
          <h1 className={styles.heading_primary}>
            <span className={styles.heading_primary_main}>
              Welcome to the world of NextJS
            </span>
            <span>Love with Javascript</span>
          </h1>
          <a href="#" className={`${styles.btn} ${styles.btn_white} ${styles.btn_animated}`}>
            Shariq page
          </a>
        </div>
      </header>
    </>
  )
}

export default Header
