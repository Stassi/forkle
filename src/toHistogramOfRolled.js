import histogram from './histogram';

const toHistogramOfRolled = ({ rolled, ...props }) => ({
  ...props,
  histogramOfRolled: histogram(rolled),
});

export default toHistogramOfRolled;
