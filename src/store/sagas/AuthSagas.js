import { call, put } from 'redux-saga/effects';
import { push, go } from 'connected-react-router';

import { authUser } from '../actions/AuthActions';
import { loginError, registerError} from '../actions/ErrorActions'
import AuthService from '../../services/AuthService';
import { extractErrorMessage } from '../../util/error'

export function* userLogin({ payload }) {
  try {
    yield call(AuthService.login, payload);

    yield put(authUser(true));
    yield put(push('/home'));
    yield put(go());
  } catch (error) {
    yield put(loginError({hasError: true, message: extractErrorMessage(error)}));
  }
}

export function* userRegister({ payload }) {
  try {
    yield call(AuthService.signup, payload);

    yield put(push('/login'));
    yield put(go());
  } catch (error) {
    yield put(registerError({hasError: true, message: extractErrorMessage(error)}));
  }
}
