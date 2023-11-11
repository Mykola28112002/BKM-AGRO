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
    <nav>
      <a href="#article1">Головна</a>
      <a href="#article2">Про Нас</a>
      <a href="#article3">Відгуки</a>
      <a href="#article4">Контакти</a>
    </nav>
    <h1>Зерносушарки</h1>
    <p>Іноваційна технологія для ефективного сушіння вашого зерна. 
Надійне  та якісне обладнання для  успіху в сільському господарстві. Зерносушарка мобільна бункерна під будь який  вид палива.</p>
    <button className={css.button} onClick={openModal}>ЗАТЕЛЕФОНУВАТИ</button>
    <div className={css.social}>
      <a href="https://vm.tiktok.com/ZGJoQt3Y1">
        <img src={Tiktok} alt="" />
      </a>
      <a href="https://www.facebook.com/groups/2854771291429687/permalink/3526997707540372/">
        <img src={Facebook} alt="" />
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
