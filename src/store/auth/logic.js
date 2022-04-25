/* eslint-disable import/no-anonymous-default-export */
import { createLogic } from "redux-logic";
import get from "lodash/get";

import {
  authLogin,
  authLoginFail,
  authLoginSuccess,
  authSignUp,
  authSignUpFail,
  authSignUpSuccess,
} from "./slice";

const authLoginLogic = createLogic({
  type: authLogin.type,
  latest: true,

  async process({ action, authAxios }, dispatch, done) {
    try {
      const { email, pass } = action.payload;

      const res = await authAxios.post("/login", {
        email,
        pass,
      });

      dispatch(authLoginSuccess(res.data));
    } catch (err) {
      dispatch(
        authLoginFail(get(err, "response.data.error.message", err.message))
      );
    }
    done();
  },
});

const authSignUpLogic = createLogic({
  type: authSignUp.type,
  latest: true,

  async process({ action, authAxios }, dispatch, done) {
    try {
      const { name, email, pass } = action.payload;

      const res = await authAxios.post("/register", {
        name,
        email,
        pass,
      });

      dispatch(authSignUpSuccess(res.data));
    } catch (err) {
      dispatch(
        authSignUpFail(get(err, "response.data.error.message", err.message))
      );
    }
    done();
  },
});

export default [authLoginLogic, authSignUpLogic];
