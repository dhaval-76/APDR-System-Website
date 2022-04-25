import { useEffect } from "react";
import { useSelector } from "react-redux";
import { sensorAxios } from "../services/axios";
import { authAccessTokenSelector } from "../store/auth/selector";

function useInterceptor() {
  const accessToken = useSelector(authAccessTokenSelector);

  useEffect(() => {
    const tokenInjectorInterceptor = async (config) => {
      if (config?.headers?.Authorization) {
        return config;
      }

      config.headers.Authorization = `Bearer ${accessToken}`;

      return config;
    };
    const sensorInterceptorId = sensorAxios.interceptors.request.use(
      tokenInjectorInterceptor
    );

    return () => {
      sensorAxios.interceptors.request.eject(sensorInterceptorId);
    };
  }, [accessToken]);
}

export default useInterceptor;
