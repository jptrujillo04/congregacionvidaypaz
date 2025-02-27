import stylesHero from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={stylesHero.hero}>
      <img src="/images/Congregacion3.jpg" alt="Logo Congregación Vida y Paz" />
      <div className={stylesHero["hero-content"]}></div>
    </section>
  );
}
