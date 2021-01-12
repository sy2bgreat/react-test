import React, { useState } from 'react';
import { cart, cartState, addFood } from '../store/atom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import apple from '@assets/icons/apple.svg';
import carrot from '@assets/icons/carrot.svg';
import hotdog from '@assets/icons/hotdog.svg';
import iceCream from '@assets/icons/icecream.svg';
import pepperHot from '@assets/icons/pepper-hot.svg';
import pizzaSlice from '@assets/icons/pizza-slice.svg';

const ids = [
  { name: 'Apple', src: apple, prc: 1 },
  { name: 'Carrot', src: carrot, prc: 2 },
  { name: 'Hotdog', src: hotdog, prc: 3 },
  { name: 'Ice cream', src: iceCream, prc: 4 },
  { name: 'Pepper', src: pepperHot, prc: 5 },
  { name: 'Pizze Slice!', src: pizzaSlice, prc: 6 },
];

const Home = () => {
  const { totalQty } = useRecoilValue(cartState);
  const addItem = useSetRecoilState(addFood);

  return (
    <section className="home-container">
      <h2 className="home-cart"> Cart: $ {totalQty} </h2>
      <div className="home-card_container">
        {ids.map((list, index) => (
          <div className="home-card" key={index}>
            <img src={list.src} className="home-card_img"></img>
            <div className="home-card_wrapper">
              <h3 className="home-card_list">
                {list.name} ${list.prc}
              </h3>
              <button className="home-card_button" onClick={() => addItem(list.prc)}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
