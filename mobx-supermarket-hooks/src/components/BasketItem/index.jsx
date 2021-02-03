import React, { useCallback } from 'react';
import { useObserver } from 'mobx-react';
import './style.css';

const BasketItem = ({ item, onTake }) => {
  const onClickReturn = useCallback(() => onTake(item.name), [onTake, item]);
  
  return useObserver(() => (
    <div className="BasketItem">
      <div className="name">{item.name}</div>
      <div className="price">{item.price}</div>
      <div className="count">{item.count}</div>
      <div className="return" onClick={onClickReturn}>갖다놓기</div>
    </div>
  ));
};

export default BasketItem;
