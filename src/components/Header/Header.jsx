
import { Tell } from '../../assets/svgComponents/Tell';
import { Logo } from '../../assets/svgComponents/Logo';
import { Menu } from '../../assets/svgComponents/Menu';
import css from './styles.module.scss';
import Modal from '../Modal/Modal';
import React, { useState } from 'react';

export const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return <div id='article1' className={css.header}>
    <div className={css.tellFlex}>
      <div className={css.headerBox}>
        <Tell />
        <div className={css.number}>
          <a href='tel:+380984359874'>+380984359874</a>
          <a href='tel:+380675205902'>+380675205902</a>
        </div>
      </div>
      <button onClick={openModal} className={css.mobileMenu}>
        <Menu />
      </button>
    </div>
    <h3>Можлива доставка по всій Україні</h3>
    <div className={css.logo}><Logo /></div>
    <Modal isOpen={modalIsOpen} onClose={closeModal}>
      <ul className={css.nav}>
        <li>
          <a onClick={closeModal} href="#article1">Головна</a>
        </li>
        <li>
          <a onClick={closeModal} href="#article2">Про Нас</a>
        </li>
        <li>
          <a onClick={closeModal} href="#article3">Відгуки</a>
        </li>
        <li>
          <a onClick={closeModal} href="#article4">Контакти</a>
        </li>
      </ul>
    </Modal>
  </div>
}
