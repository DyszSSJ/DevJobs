import { useState } from "react";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import Google from "../assets/google-g-2015.svg"

export default function Home() {
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
                Inicia Sesión con Google
            </button>
          <input type="button" value="Inicia Sesión" />
          <div className={styles.registerCount}>
            <p className={styles.contentParrafo}>¿No tienes una cuenta?</p>
            <Link href="/registrar">
              <a>Registrar</a>
            </Link>
          </div>
        </div>
      </form>
    </Layout>
  );
}
