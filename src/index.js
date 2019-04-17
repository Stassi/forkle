import histogram from './histogram';
import rollSixSixSidedDice from './dice/rollSixSixSidedDice';

// TODO: Remove
const debug = () => {
  const rolled = rollSixSixSidedDice({ seed: 'hello.' });

  const res = {
    rolled,
    histogramOfRolled: histogram(rolled),
  };

  return res;
};

// eslint-disable-next-line import/prefer-default-export
export { debug };
