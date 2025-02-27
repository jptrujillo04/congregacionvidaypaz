import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Bienvenidos a Congregación Vida y Paz</h1>
        <p>Un lugar para encontrarte con Dios.</p>

        <Image
          src="/images/logo_vida_paz.png"
          alt="Logo Congregación Vida y Paz"
          width={300}
          height={300}
          priority={true}
        />
      </main>
      <footer className={styles.footer}>
        <a href="#">Contacto</a>
        <a href="#">Eventos</a>
      </footer>
    </div>
  );
}
