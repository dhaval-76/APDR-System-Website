import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  tempData: [],
  alcoholData: [],
  eyeBlinkData: [],
  isLoading: false,
  error: "",
};

const sensorSlice = createSlice({
  name: "sensor",
  initialState,
  reducers: {
    sensorGetTemp(state, { payload }) {
      state.isLoading = true;
    },
    sensorGetTempSuccess(state, { payload }) {
      const temperatureData = payload.temps.map((item) => ({
        ...item,
        timeStamp: moment(item.timeStamp).format("HH:mm:ss"),
      }));

      state.tempData = temperatureData;
      state.isLoading = false;
    },
    sensorGetTempFail(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    sensorGetAlcoholAndEye(state, { payload }) {
      state.isLoading = true;
    },
    sensorGetAlcoholAndEyeSuccess(state, { payload }) {
      const alcohol = payload.alcohols.map((item) => ({
        ...item,
        timeStamp: moment(item.timeStamp).format("HH:mm:ss"),
      }));

      const eyeBlink = payload.eyeBlinks.map((item) => ({
        ...item,
        timeStamp: moment(item.timeStamp).format("HH:mm:ss"),
      }));

      state.alcoholData = alcohol;
      state.eyeBlinkData = eyeBlink;
      state.isLoading = false;
    },
    sensorGetAlcoholAndEyeFail(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    sensorRemoveError(state) {
      state.error = "";
    },
  },
});

export const {
  sensorGetTemp,
  sensorGetTempSuccess,
  sensorGetTempFail,
  sensorGetAlcoholAndEye,
  sensorGetAlcoholAndEyeSuccess,
  sensorGetAlcoholAndEyeFail,
  sensorRemoveError,
} = sensorSlice.actions;

export default sensorSlice.reducer;
