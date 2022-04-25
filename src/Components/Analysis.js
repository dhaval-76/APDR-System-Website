import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  Area,
  AreaChart,
} from "recharts";

import {
  sensorAlcoholDataSelector,
  sensorEyeBlinkDataSelector,
} from "../store/sensor/selector";
import { sensorGetAlcoholAndEye } from "../store/sensor/slice";

import Drawer from "./Drawer";

function Analysis() {
  const alcoholData = useSelector(sensorAlcoholDataSelector);
  const eyeBlinkData = useSelector(sensorEyeBlinkDataSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sensorGetAlcoholAndEye());
  }, [dispatch]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(sensorGetAlcoholAndEye());
    }, 12000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <>
      <Drawer />
      <div className="container-fluid">
        <div className="g1">
          <AreaChart
            width={600}
            height={400}
            data={alcoholData}
            margin={{ top: 40, right: 30, left: 10, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="timeStamp">
              <Label value="Timestamp -->" offset={3} position="bottom" />
              <Label
                value="Measure Of Intoxication"
                offset={325}
                position="top"
                style={{ fontWeight: "500", fontSize: "30px", padding: "5px " }}
              />
            </XAxis>
            <YAxis>
              <Label
                value="Intoxication -->"
                angle={-90}
                position="left"
                offset={1}
              />
            </YAxis>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="alcohol"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </div>
        <div className="g2">
          <AreaChart
            width={600}
            height={400}
            data={eyeBlinkData}
            margin={{ top: 40, right: 30, left: 10, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="timeStamp">
              <Label value="Timestamp -->" offset={3} position="bottom" />
              <Label
                value="Measure Of Drowsiness"
                offset={325}
                position="top"
                style={{ fontWeight: "500", fontSize: "30px" }}
              />
            </XAxis>
            <YAxis>
              <Label
                value="Drowsiness -->"
                angle={-90}
                position="left"
                offset={1}
              />
            </YAxis>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="eyeBlink"
              stroke="#ffc658"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
      </div>
    </>
  );
}

export default Analysis;
