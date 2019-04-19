import { countBy, identity } from 'ramda';

const histogram = countBy(identity);

export default histogram;
