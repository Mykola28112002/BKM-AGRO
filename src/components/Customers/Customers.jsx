
import css from './styles.module.scss';
import Avatar1 from '../../assets/img/Avatar1.png';
import Avatar2 from '../../assets/img/Avatar2.png';
import Avatar3 from '../../assets/img/Avatar3.png';
import {MoreHorizontal} from '../../assets/svgComponents/MoreHorizontal';

const user = [
  {
    name: 'Дмитро Харківець',
    data: '11.05.2022',
    img: Avatar2,
    comment: 'Хороша сушарка, ми підключили на газу і працює супер. Зручна для переміщення, я задоволений. ще раз вам дякую!'
  },
  {
    name: 'Григорій Назарук',
    data: '27.04.2023',
    img: Avatar1,
    comment: 'Добре працює, я вже протестував, поставив собі на елекриці але думаю що і на газу буде добре працювати. Планую ще одну купит на настуний рік, тому на зв’язку. '
  },
  {
    name: 'Толя Ващук',
    data: '09.07.2023',
    img: Avatar3,
    comment: 'Сушарка супер! Я давно хотів купити, а купив то натішитись не можу. Дякую!'
  }
]

export const Customers = () => {
  return <div className={css.customers}>
    <h2>Що про нас кажуть клієнти?</h2>
    <ul>
      {user.map((a, index) => <li key={index}>
        <div className={css.avatarBox}>
          <img src={a.img} alt="" />
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
      <h3>У вас є питання? Ми з радістю відповімо на них і допоможемо вам з вибором потрібного обладнання під ваши потреби. Телефонуйте за номером <span>+38 (098) 4359 874 (Василь), +38 (067) 5205 902 (Сергій)</span> або замовте дзвінок. </h3>
      <span className={css.formSpan}>Заповніть форму</span>
      <input placeholder='Ваше ім’я' type="name" />
      <input placeholder='Номер телефону' type="number" />
      <input placeholder='Повідомлення ' type="text" />
      <button>Замовити дзвінок</button>
    </div>
  </div>
}
