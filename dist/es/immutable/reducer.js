import * as actionTypes from '../lib/actionTypes';
import { Record, fromJS } from 'immutable';

// eslint-disable-next-line new-cap
var State = Record({
  route: null,
  previousRoute: null,
  transitionRoute: null,
  transitionError: null
});

function router5Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new State();
  var action = arguments[1];

  switch (action.type) {
    case actionTypes.TRANSITION_START:
      return state.set('transitionRoute', fromJS(action.payload.route)).set('transitionError', null);

    case actionTypes.TRANSITION_SUCCESS:
      return state.set('transitionRoute', null).set('transitionError', null).set('previousRoute', fromJS(action.payload.previousRoute)).set('route', fromJS(action.payload.route));

    case actionTypes.TRANSITION_ERROR:
      return state.set('transitionRoute', fromJS(action.payload.route)).set('transitionError', fromJS(action.payload.transitionError));

    case actionTypes.CLEAR_ERRORS:
      return state.set('transitionRoute', null).set('transitionError', null);

    default:
      return state;
  }
}

export default router5Reducer;