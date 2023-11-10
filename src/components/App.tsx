import React from 'react';
import { AboutUs } from './AboutUs/AboutUs';
import { Customers } from './Customers/Customers';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Photo } from './Photo/Photo';
import css from './styles.module.scss';

export const App = () => {
  document.addEventListener('DOMContentLoaded', function () {
  // Отримати всі посилання на статті
  const articleLinks = document.querySelectorAll('nav a');

  // Додати обробник подій для кожного посилання
  articleLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      // Заборонити звичайну поведінку посилання
      event.preventDefault();

      // Отримати ідентифікатор статті з атрибута href посилання
      const targetId = link.getAttribute('href').substring(1);

      // Знайти елемент статті за допомогою ідентифікатора
      const targetElement = document.getElementById(targetId);

      // Прокрутити до елемента
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
  return (
    <div className={css.app}>
      <Header />
      <Hero />
      <AboutUs />
      <Photo />
      <Customers />
      <Footer />
    </div>
  );
};
