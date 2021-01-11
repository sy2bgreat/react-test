import { atom, selector } from 'recoil';

export const cart = atom({
  key: 'cart',
  default: [],
});

export const cartState = selector({
  key: 'cartState',
  get: ({ get }) => {
    const totalQty = get(cart).reduce((a, b) => a + b, 0);
    return {
      totalQty,
    };
  },
});

export const addFood = selector({
  key: 'addFood',
  set: ({ set, get }) => {
    set(cart, [...get(cart)]);
  },
});
