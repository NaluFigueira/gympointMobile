import { all, takeLatest, put, call } from 'redux-saga/effects';

import { Alert } from 'react-native';
import api from '~/services/api';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    yield call(api.get, `students/${id}`);
    yield put(signInSuccess(id));
  } catch (error) {
    console.tron.log(error);
    Alert.alert('Erro de autenticação', 'Esse ID é inválido!');
    yield put(signInFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
