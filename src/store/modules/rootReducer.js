import { combineReducers } from 'redux';

import auth from './auth/reducers';
import helpOrders from './helpOrders/reducers';
import checkins from './checkins/reducers';

const reducers = combineReducers({
  auth,
  helpOrders,
  checkins,
});

export default reducers;
