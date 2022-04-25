import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";

import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import VehicleHealth from "./Components/VehicleHealth";
import Analysis from "./Components/Analysis";
import Chat from "./Components/Chat";

import useInterceptor from "./customHooks/useInterceptor";

import {
  authErrorSelector,
  authIsAuthenticatedSelector,
} from "./store/auth/selector";
import { authRemoveError } from "./store/auth/slice";
import { sensorErrorSelector } from "./store/sensor/selector";
import { sensorRemoveError } from "./store/sensor/slice";

export default function App() {
  const isAuthenticated = useSelector(authIsAuthenticatedSelector);
  const authError = useSelector(authErrorSelector);
  const sensorError = useSelector(sensorErrorSelector);

  const dispatch = useDispatch();

  useInterceptor();

  useEffect(() => {
    if (authError) {
      toast.error(authError, {
        position: toast.POSITION.TOP_CENTER,
        toastId: "authError",
      });

      dispatch(authRemoveError());
    }
  }, [authError, dispatch]);

  useEffect(() => {
    if (sensorError) {
      toast.error(sensorError, {
        position: toast.POSITION.TOP_CENTER,
        toastId: "sensorError",
      });

      dispatch(sensorRemoveError());
    }
  }, [sensorError, dispatch]);

  return (
    <div className="app_container">
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/vehicle-health" element={<VehicleHealth />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </div>
  );
}
