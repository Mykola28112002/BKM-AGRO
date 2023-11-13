
import css from './styles.module.scss';
import img1 from '../../assets/img/img1.png';
import img2 from '../../assets/img/image.png';
import img3 from '../../assets/img/img3.png';
import { Check } from '../../assets/svgComponents/Check';
import { DecorBottom } from '../../assets/svgComponents/DecorBottom';
import { DecorTop } from '../../assets/svgComponents/DecorTop';

export const AboutUs = () => {
  return <section id='article2' className={css.aboutUs}>
    <div className={css.top}>
      <DecorTop  />
    </div>
    <div className={css.bottom}>
      <DecorBottom  />
    </div>
    <h2>Про нас</h2>
    <ul className={css.List}>
      <li className={css.Item}> 
        <img src={img1} alt={img1} />
        <p>Наша компанія є провідним виробником сучасних бункерних зерносушарок, які вражають своєю ефективністю та універсальністю. Ми розробляємо та виготовляємо сушарки, які працюють з будь-яким видом палива, забезпечуючи бездоганне сушіння різних культур зерна.</p>
      </li>
      <li className={css.Item}> 
        <p>Наш асортимент включає в себе різні моделі зерносушарок з вмісткістю від 5 до 12 тонн, щоб задовольнити потреби різних сільськогосподарських підприємств. Також доступна самовигрузка та самозагрузка. Зерносушарка не піддається корозії. Що робить нашу продукцію ще більш привабливою, так це можливість індивідуального замовлення та комплектації сушарок за вашими потребами.</p>
        <img src={img2} alt={img2} />
      </li>
      <li className={css.Item}> 
        <img src={img3} alt={img3} />
        <p>Ми пропонуємо різноманітні опції, включаючи ворошіловку, об'єм обробки, потужні вентилятори та системи аспірації. Наші зерносушарки є найкращим рішенням для тих, хто прагне забезпечити якісне сушіння будь-яких видів зерна та культур. Надійність, ефективність та індивідуальний підхід - ось наша гарантія вашого успіху у сільському господарстві.</p>
      </li>
      <li className={css.ItemLast}> 
        <div>
          <h3>ПОНАД 70</h3>
          <div className={css.svg}><Check  /></div>
        </div>
        <p>Наша компанія пишається створенням понад 70 сучасних зерносушарок, що вже знайшли вдячних клієнтів . Наш досвід та технологічний підхід гарантують якість та надійність наших продуктів для вашого сільськогосподарського бізнесу.</p>
      </li>
    </ul>
  </section>
}
