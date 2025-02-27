"use client"; // Para manejar estado en Next.js 13+

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css"; // Importamos los estilos CSS

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolling ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo_vida_paz.png"
            alt="Logo Congregación Vida y Paz"
            width={scrolling ? 20 : 40}
            height={50}
            className={styles.logo}
          />
        </Link>

        {/* Menú */}
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/nosotros">Nuestra Casa</Link>
            </li>
            <li>
              <Link href="/predicas">Prédicas</Link>
            </li>
            <li>
              <Link href="/sedes">Sedes</Link>
            </li>
            <li>
              <Link href="/grupos">Grupos</Link>
            </li>
            <li>
              <Link href="/donaciones" className={styles.donateButton}>
                Donaciones
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
