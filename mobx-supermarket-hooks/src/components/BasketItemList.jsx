import React from 'react';
import BasketItem from './BasketItem';
import useStore from '../stores';
import { useObserver } from 'mobx-react';

const BasketItemList = () => {
  const { market } = useStore();

  const onTake = (name) => market.take(name);

  return useObserver(() => {
    const itemList = market.selectItems.map(item => (
      <BasketItem item={item} key={item.name} onTake={onTake} />
    ));
    return <div>{itemList}</div>;
  });
};

export default BasketItemList;
