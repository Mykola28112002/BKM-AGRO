
import { Tell } from '../../assets/svgComponents/Tell';
import { Logo } from '../../assets/svgComponents/Logo';
import css from './styles.module.scss';

export const Header = () => {
  return <div id='article1' className={css.header}>
    <div className={css.tellFlex}>
      <Tell />
      <div>
        <a href='tel:+380984359874'>+380984359874</a>
        <a href='tel:+380675205902'>+380675205902</a>
      </div>
    </div>
    <h3>Можлива доставка по всій Україні</h3>
    <Logo />
  </div>
}
