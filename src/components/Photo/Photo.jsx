
import css from './styles.module.scss';
import img4 from '../../assets/img/img4.png';
import img5 from '../../assets/img/img5.png';
import img7 from '../../assets/img/img7.png';
import img8 from '../../assets/img/img8.png';
import img9 from '../../assets/img/img9.png';

export const Photo = () => {
  return <div className={css.photo}>
    <h2>Фото зерносушарки</h2>
    <h3>Можлива доставка по всій Україні</h3>
    <div className={css.galery}>
      <div>
        <img className={css.img4} src={img4} alt="" />
        <img className={css.img7} src={img7} alt="" />
      </div>
      <img className={css.img5} src={img5} alt="" />
      <div>
        <img className={css.img8} src={img8} alt="" />
        <img className={css.img9} src={img9} alt="" />
      </div>
    </div>
    <div className={css.info}>
      <h3>Від 8000$</h3>
      <p>Ціна договірна, залежить яку зерносушарку вам потрібно. Індивідуальне замовлення також можливо, зробимо за вашими потребами. </p>
    </div>
  </div>
}
