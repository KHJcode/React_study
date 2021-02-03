import { observable } from 'mobx';
import { counter } from './counter';

const market  = observable({
  selectItems: [],
  put(name, price) {
    if (counter.number < 1) return;
    const exists = this.selectItems.find(item => item.name === name);
    if (!exists) {
      this.selectItems.push({
        name,
        price,
        count: counter.number,
      });
      return;
    }
    exists.count += counter.number;
  },
  take(name) {
    const itemToTake = this.selectItems.find(item => item.name === name);
    itemToTake.count--;
    if (itemToTake.count === 0) {
      this.selectItems.remove(itemToTake);
    }
  },
  get total() {
    console.log('총합 계산...');
    return this.selectItems.reduce((accumulator, current) => {
      return accumulator + current.price * current.count;
    }, 0);
  }
});

export { market };
