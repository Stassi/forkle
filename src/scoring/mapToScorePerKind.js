import { divide, map } from 'ramda';

const toScorePerKind = ({
  kind,
  score,
  ...props
}) => ({
  ...props,
  kind,
  score,
  scorePerKind: divide(score, kind),
});

const mapToScorePerKind = map(toScorePerKind);

export default mapToScorePerKind;
