import css from './styles.module.scss';
import Facebook from '../../assets/img/Facebook.png';
import Tiktok from '../../assets/img/tiktok.png';
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { Tell } from '../../assets/svgComponents/Tell';

export const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return <section className={css.hero}>
    <div className={css.b1}>
    </div>
    <div className={css.b2}>
    </div>
    <div className={css.b3}>
    </div>
    <div className={css.b4}>
    </div>
    <div className={css.a1}></div>
    <div className={css.a2}></div>
    <nav>
      <a href="#article1">Головна</a>
      <a href="#article2">Про Нас</a>
      <a href="#article3">Відгуки</a>
      <a href="#article4">Контакти</a>
    </nav>
    <h1>Зерносушарки</h1>
    <p>Для сушіння будь-якого виду культур 5, 8, 10, 12 тонн. Надійне  та якісне обладнання для  успіху в сільському господарстві. Зерносушарка мобільна бункерна під будь який  вид палива.</p>
    <button className={css.button} onClick={openModal}>ЗАТЕЛЕФОНУВАТИ</button>
    <div className={css.social}>
      <a href="https://vm.tiktok.com/ZGJoQt3Y1">
        <img src={Tiktok} alt="photo" />
      </a>
      <a href="https://www.facebook.com/groups/2854771291429687/permalink/3526997707540372/">
        <img src={Facebook} alt="photo" />
      </a>
    </div>
    <p className={css.socialText}>Переглядайте відео нашої роботи та відгуки в соцмережах.</p>
    <Modal isOpen={modalIsOpen} onClose={closeModal}>
      <div className={css.tellFlex}>
        <Tell />
        <div>
          <a href='tel:+380984359874'>+380984359874</a>
          <a href='tel:+380675205902'>+380675205902</a>
        </div>
      </div>
    </Modal>
  </section>
}
