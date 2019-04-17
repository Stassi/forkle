import { samples } from 'implausible';
import die from './die';

const rollDice = ({ count, sides }) => ({ ...props }) => samples({
  ...props,
  count,
  collection: die(sides),
});

export default rollDice;
