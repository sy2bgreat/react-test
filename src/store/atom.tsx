import { atom, RecoilState, selector, RecoilValueReadOnly } from 'recoil';

export interface CartItem {
  name: Number;
}

export const cart: RecoilState<CartItem[]> = atom({
  key: 'cart',
  default: [] as CartItem[],
});

export const cartState: RecoilValueReadOnly<{ totalQty: Number }> = selector({
  key: 'cartState',
  get: ({ get }) => {
    const totalQty = get(cart).reduce((a, b: any) => a + b, 0);
    return {
      totalQty,
    };
  },
});

export const addFood: RecoilState<any> = selector({
  key: 'addFood',
  get: ({ get }) => get(cart),
  set: ({ set, get }, newValue) => set(cart, [...get(cart), newValue]),
});
