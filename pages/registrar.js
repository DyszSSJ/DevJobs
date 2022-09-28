import { useState } from "react";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import Google from "../assets/google-g-2015.svg"

const Registrar = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email, password);
    };
    return (
      <Layout paginas={"Login"}>
        <div className={styles.body}></div>
        <div className={styles.grad}></div>
        <div className={styles.header}>
          <div>
            Dev<span> Jobs</span>
          </div>
        </div>
        <br />
        <form>
          <div className={styles.login}>
            <input
              type="text"
              placeholder="Email"
              name="user"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button className={styles.btnGoogle}>
                <Image src={Google} alt="Google" width={30} height={23} />
                Registrate con Google
            </button>
            <input type="button" value="Registrar" />
            
            <div className={styles.registerCount}>
              <p className={styles.contentParrafo}>¿Ya tienes una cuenta?</p>
              <Link href="/">
                <a>Inicia Sesión</a>
              </Link>
            </div>
          </div>
        </form>
      </Layout>
  )
}

export default Registrar