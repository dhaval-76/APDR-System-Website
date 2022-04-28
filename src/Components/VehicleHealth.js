import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Cell,
  
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  AreaChart,
  Area
} from "recharts";

import Drawer from "./Drawer";

import {
  sensorHealthColorSelector,
  sensorTempDataSelector,
  sensorVehicleHealthSelector,
} from "../store/sensor/selector";
import { sensorGetTemp } from "../store/sensor/slice";

const pieData = [{ name: "Group A", value: 100 }];

export default function VehicleHealth() {
  const tempData = useSelector(sensorTempDataSelector);
  const vehicleHealthValue = useSelector(sensorVehicleHealthSelector);
  const healthColor = useSelector(sensorHealthColorSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sensorGetTemp());
  }, [dispatch]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(sensorGetTemp());
    }, 10000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <>
      <Drawer />

      <div className="container-fluid">
        <div className="g2">
          <AreaChart
            width={600}
            height={400}
            data={tempData}
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
                value="Measure Of Engine Overheating"
                offset={325}
                position="top"
                style={{ fontWeight: "500", fontSize: "30px", padding: "5px " }}
              />
            </XAxis>
            <YAxis>
              <Label 
                value="Engine Temp -->"
                angle={-90}
                position="left"
                offset={1}
              />
            </YAxis>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="temperature"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </div>
        <div className="g1">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <PieChart id="pie" width={600} height={400}>
              <Pie
                data={pieData}
                cx={300}
                cy={190}
                innerRadius={120}
                outerRadius={170}
                fill="#8884d8"
                paddingAngle={vehicleHealthValue}
                dataKey="value"
                nameKey="name"
              >
                <Label
                  value="Vehicle Health "
                  position="center"
                  style={{
                    fontWeight: "500",
                    fontSize: "30px",
                  }}
                />
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={healthColor} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    </>
  );
}
