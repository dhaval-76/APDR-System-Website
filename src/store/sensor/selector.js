export const sensorTempDataSelector = (state) => state.sensor.tempData;

export const sensorAlcoholDataSelector = (state) => state.sensor.alcoholData;

export const sensorEyeBlinkDataSelector = (state) => state.sensor.eyeBlinkData;

export const sensorVehicleHealthSelector = (state) =>
  state.sensor.vehicleHealth;

export const sensorHealthColorSelector = (state) => state.sensor.healthColor;

export const sensorIsLoadingSelector = (state) => state.sensor.isLoading;

export const sensorErrorSelector = (state) => state.sensor.error;
