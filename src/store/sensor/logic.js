/* eslint-disable import/no-anonymous-default-export */
import { createLogic } from "redux-logic";
import get from "lodash/get";

import {
  sensorGetAlcoholAndEye,
  sensorGetAlcoholAndEyeFail,
  sensorGetAlcoholAndEyeSuccess,
  sensorGetTemp,
  sensorGetTempFail,
  sensorGetTempSuccess,
} from "./slice";

const sensorGetTempLogic = createLogic({
  type: sensorGetTemp.type,
  latest: true,

  async process({ sensorAxios }, dispatch, done) {
    try {
      const res = await sensorAxios.get("/get-temperature");

      dispatch(sensorGetTempSuccess(res.data));
    } catch (err) {
      dispatch(
        sensorGetTempFail(get(err, "response.data.error.message", err.message))
      );
    }
    done();
  },
});

const sensorGetAlcoholAndEyeLogic = createLogic({
  type: sensorGetAlcoholAndEye.type,
  latest: true,

  async process({ sensorAxios }, dispatch, done) {
    try {
      const res = await sensorAxios.get("/get-alcohol-and-eye");

      dispatch(sensorGetAlcoholAndEyeSuccess(res.data));
    } catch (err) {
      dispatch(
        sensorGetAlcoholAndEyeFail(
          get(err, "response.data.error.message", err.message)
        )
      );
    }
    done();
  },
});

export default [sensorGetTempLogic, sensorGetAlcoholAndEyeLogic];
