import React, { useCallback } from 'react';
import './style.css';


const ShopItem = ({ name, price, onPut }) => {
  const onClickShopItem = useCallback(() => onPut(name, price), [name, price, onPut]);

  return (
    <div className="ShopItem" onClick={onClickShopItem}>
      <h1>{name}</h1>
      <div>{price}원</div>
    </div>
  );
};

export default ShopItem;
