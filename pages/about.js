import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css";
import Image from "next/image";
import Head from 'next/head';

const about = () => {
  return (
    <>
      <Head>
        <title>About page</title>
      </Head>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1 className={styles.mainHeading}>About Page</h1>
        <Image src="/bg.jpg" width="500" height="300" alt="aboutpic" ></Image>
      </div>
    </>
  )
}

export default about;