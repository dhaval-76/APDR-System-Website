import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  tempData: [],
  alcoholData: [],
  eyeBlinkData: [],
  vehicleHealth: 0,
  healthColor: "#d00000",
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

      if (payload.vehicleHealth <= 90) {
        state.healthColor = "#38b000";
      }

      if (payload.vehicleHealth > 90 && payload.vehicleHealth <= 225) {
        state.healthColor = "#ffbe0b";
      }

      if (state.vehicleHealth > 225 && payload.vehicleHealth <= 360) {
        state.healthColor = "#d00000";
      }

      state.vehicleHealth = payload.vehicleHealth;
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
