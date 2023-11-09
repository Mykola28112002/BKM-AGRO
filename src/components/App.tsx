import React from 'react';
import { AboutUs } from './AboutUs/AboutUs';
import { Customers } from './Customers/Customers';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Photo } from './Photo/Photo';
import css from './styles.module.scss';

export const App = () => {
  return (
    <div className={css.app}>
      <Header />
      <Hero />
      <AboutUs />
      <Photo />
      <Customers />
    </div>
  );
};
