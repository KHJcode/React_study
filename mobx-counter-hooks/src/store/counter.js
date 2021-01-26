import { observable } from 'mobx';

const counter = observable({
  number: 0,
  increase() {
    this.number++;
  },
  decrease() {
    this.number--;
  },
});

export { counter };
