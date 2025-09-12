
import css from './styles.module.scss';
import { MoreHorizontal } from '../../assets/svgComponents/MoreHorizontal';
import ContactForm from './Form';
import { user } from '../../constants/index';


export const Customers = () => {
  return <div id='article3' className={css.customers}>
    <h2>Що про нас кажуть клієнти?</h2>
    <ul>
      {user.map((a, index) => <li key={index}>
        <div className={css.avatarBox}>
          <img src={a.img} alt="dghdj" />
          <div className={css.nameBox}>
            <p className={css.name}>{a.name}</p>
            <p className={css.data}>{a.data}</p>
          </div>
        </div>
        <MoreHorizontal />
        <p>{a.comment}</p>
      </li>)}
    </ul>
    <div className={css.formBox}>
      <h3>У вас є питання? Ми з радістю відповімо на них і допоможемо вам з вибором потрібного обладнання під ваши потреби. Телефонуйте за номером <span>+38 (098) 4359 874 (Василь),<br /> +38 (067) 5205 902 (Сергій)</span> або замовте дзвінок. </h3>
      <span className={css.formSpan}>Заповніть форму</span>
      <ContactForm />
      {/* <input placeholder='Ваше ім’я' type="name" />
      <input placeholder='Номер телефону' type="number" />
      <input className={css.message} placeholder='Повідомлення ' type="text" /> */}
      {/* <button>Замовити дзвінок</button> */}
    </div>
  </div>
}
