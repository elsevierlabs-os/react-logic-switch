import PropTypes from'prop-types';export default function Case({children:a}){return a}function casePropType(a,b,c){return a.test&&a.match?new Error(`${c} accepts either "test" or "match" props. Received both.`):a.test?'function'==typeof a.test?null:new Error(`${c} test prop type expected a function. Value was ${a.test}`):void 0===a.match?new Error(`${c} expected either "test" or "match" to be defined`):null}Case.propTypes={children:PropTypes.node,test:casePropType,match:casePropType},Case.isCaseComponent=!0;