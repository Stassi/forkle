import {
  divide,
  map,
  pipe,
  propOr,
} from 'ramda';
import toHistogramOfRolled from '../toHistogramOfRolled';

const scoringCombinations = ({
  face,
  histogramOfRolled,
  kind,
}) => divide(
  propOr(
    0,
    face,
    histogramOfRolled,
  ),
  kind,
);

const toScoringCombinations = histogramOfRolled => ({ face, kind, ...props }) => ({
  ...props,
  face,
  kind,
  scoringCombinations: scoringCombinations({
    face,
    histogramOfRolled,
    kind,
  }),
});

// TODO: Rename, simplify
const debug = ({ histogramOfRolled, scoring }) => map(
  toScoringCombinations(histogramOfRolled),
  scoring,
);

const mapToScoringCombinations = pipe(
  toHistogramOfRolled,
  debug,
);

export default mapToScoringCombinations;
