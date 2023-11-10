import css from './styles.module.scss';

export const Hero = () => {
  return <section className={css.hero}>
    <nav>
      <a to="/">Головна</a>
      <a to="/article/1">Про Нас</a>
      <a to="/article/2">Відгуки</a>
      <a to="/article/3">Контакти</a>
    </nav>
    <h1>Зерносушарки</h1>
    <p>Іноваційна технологія для ефективного сушіння вашого зерна. <br />
Надійне  та якісне обладнання для  успіху в сільському господарстві.</p>
    <button>ЗАТЕЛЕФОНУВАТИ</button>
  </section>
}
