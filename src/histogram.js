import {
  add,
  map,
  mergeWith,
  pipe,
  reduce,
} from 'ramda';

const mergeWithAdd = mergeWith(add);
const additiveMerge = reduce(mergeWithAdd, {});
const keyOfWeightOne = map(x => ({ [x]: 1 }));
const histogram = pipe(keyOfWeightOne, additiveMerge);

export default histogram;
