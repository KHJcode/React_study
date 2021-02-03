import React from 'react';
import { useObserver } from 'mobx-react';
import ShopItem from './ShopItem';

import useStore from '../stores';

const items = [
  {
    name: '생수',
    price: 850,
  },
  {
    name: '신라면',
    price: 900,
  },
  {
    name: '포카칩',
    price: 1500,
  },
  {
    name: '새우깡',
    price: 1000,
  },
];

const ShopItemList = () => {
  const { market } = useStore();

  const onPut = (name, price) => market.put(name, price);

  return useObserver(() => {
    const itemList = items.map(item => <ShopItem {...item} key={item.name} onPut={onPut} />);
    return <div>{itemList}</div>
  });
};

export default ShopItemList;
