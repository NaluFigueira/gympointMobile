import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import helpOrders from './helpOrders/sagas';
import checkins from './checkins/sagas';

export default function* rootSaga() {
  yield all([auth, helpOrders, checkins]);
}
