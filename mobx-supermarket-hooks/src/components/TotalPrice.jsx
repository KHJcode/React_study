import React from 'react';
import { useObserver } from 'mobx-react';
import useStore from '../stores';

const TotalPrice = () => {
  const { market } = useStore();

  return useObserver(() => (
    <div>
      <hr />
      <p>
        <b>총합: </b> {market.total}원
      </p>
    </div>
  ));
};

export default TotalPrice;
