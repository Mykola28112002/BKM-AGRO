import css from './styles.module.scss';
import heroImg from '../../assets/img/heroImg.png'

export const Hero = () => {
  return <section className={css.hero}>
    <nav>
      <a href="">Головна</a>
      <a href="">Про Нас</a>
      <a href="">Відгуки</a>
      <a href="">Контакти</a>
    </nav>
    <h1>Зерносушарки</h1>
    <p>Іноваційна технологія для ефективного сушіння вашого зерна. <br />
Надійне  та якісне обладнання для  успіху в сільському господарстві.</p>
    <button>ЗАТЕЛЕФОНУВАТИ</button>
  </section>
}
