import Navbar from "../components/Navbar";
import styles from "../styles/contact.module.css";
import Image from "next/image";

const contact = () => {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1 className={styles.mainHeading}>Contact Page</h1>
        <Image src="https://free4kwallpapers.com/uploads/originals/2021/04/24/beautiful-landscape-wallpaper.jpg " width="500" height="300" alt="contactpic" ></Image>
      </div>
    </>
  )
}

export default contact