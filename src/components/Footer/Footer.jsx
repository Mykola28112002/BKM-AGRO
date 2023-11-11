
import { Logo } from '../../assets/svgComponents/Logo';
import Facebook from '../../assets/img/Facebook.png';
import Tiktok from '../../assets/img/tiktok.png';
import css from './styles.module.scss';

export const Footer = () => {
  return <div id='article4' className={css.footer}>
    <div className={css.footerOne}>
      <Logo />
      <p className={css.text}>Наші технології - Ваш Успіх!</p>
      <div className={css.social}>
        <a href="">
          <img src={Tiktok} alt="" />
        </a>
        <a href="">
          <img src={Facebook} alt="" />
        </a>
      </div>
      <p className={css.socialText}>Слідкуйте за нами в соцмережах щоб дізнаватися про новини.</p>
      <p className={css.prava}>(c)Твій BKM-AGRO 2023. Всі права захищені</p>
    </div>
    <div className={css.navBox}>
      <div className={css.navFlex}>
        <h3 className={css.navTitle}>Компанія</h3>
        <ul>
          <li>
            <a href="#article1">Головна</a>
          </li>
          <li>
            <a href="#article2">Про Нас</a>
          </li>
          <li>
            <a href="#article3">Відгуки</a>
          </li>
          <li>
            <a href="#article4">Контакти</a>
          </li>
        </ul>
      </div>
      <div className={css.socialMobile}>
        <a href="">
          <img src={Tiktok} alt="" />
        </a>
        <a href="">
          <img src={Facebook} alt="" />
        </a>
      </div>
    </div>
    <div className={css.contactBox}>
      <h3 className={css.contactTitle}>Контакти:</h3>
      <p className={css.telText}>Телефони для уточнення чи замовлення</p>
      <a href="tel:+380984359874">+38 (098) 4359 874 (Василь)</a>
      <a href="tel:+380675205902">+38 (067) 5205 902 (Сергій)</a>
      <h3 className={css.adresTitle}>Адреса:</h3>
      <p className={css.adres}>вул. Центральна 25, село Гірники, Ковельський район, Волинська обл.</p>
      <h3 className={css.adresTitle}>Ми працюємо:</h3>
      <p className={css.adresTime}>Понеділок - Субота</p>
      <p className={css.adresTime}>З 08:00 - До 19:00</p>
    </div>
  </div>
}
