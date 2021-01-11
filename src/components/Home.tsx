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
  { name: 'Apple', src: apple },
  { name: 'Carrot', src: carrot },
  { name: 'Hotdog', src: hotdog },
  { name: 'Ice cream', src: iceCream },
  { name: 'Pepper', src: pepperHot },
  { name: 'Pizze Slice!', src: pizzaSlice },
];

const Home = () => {
  const { totalQty } = useRecoilValue(cartState);
  const setAddFood = useSetRecoilState(addFood);
  return (
    <section className="home-container">
      <div className="home-card_container">
        {ids.map((list, index) => (
          <div className="home-card" key={index}>
            <img src={list.src} className="home-card_img"></img>
            <h3>{list.name}</h3>
            <button onClick={() => setAddFood(list)}>add</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
