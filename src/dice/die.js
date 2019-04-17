import {
  add,
  pipe,
  range,
} from 'ramda';

const one = 1;
const addOne = add(one);
const rangeFromOne = range(one);
const die = pipe(addOne, rangeFromOne);

export default die;
