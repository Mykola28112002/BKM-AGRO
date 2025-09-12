import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import css from './styles.module.scss';
import {images} from '../../constants/index';



export const Photo = () => {
  return <div className={css.photo}>
    <h2>Фото зерносушарки</h2>
    <h3 className={css.delivery}>Можлива доставка по всій Україні</h3>
    <div className={css.galery}>
      <div>
        <img className={css.img4} src={images[0].original} alt="phfdgoto" />
        <img className={css.img7} src={images[2].original} alt="phfdhoto" />
      </div>
      <img className={css.img5} src={images[1].original} alt="phsfgshoto" />
      <div>
        <img className={css.img8} src={images[3].original} alt="phshfdfoto" />
        <img className={css.img9} src={images[4].original} alt="phdhoto" />
      </div>
    </div>
    <div className={css.mobileGallery}>
      <ImageGallery items={images} />
    </div>
    <h3 className={css.deliveryMob}>Можлива доставка по всій Україні</h3>
    <div className={css.info}>
      <h3>Від 8000$</h3>
      <p>Ціна договірна, залежить яку зерносушарку вам потрібно. Індивідуальне замовлення також можливо, зробимо за вашими потребами.  Оплата при отриманні.</p>
    </div>
  </div>
}
