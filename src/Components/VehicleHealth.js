import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
} from "recharts";

import Drawer from "./Drawer";

import { sensorTempDataSelector } from "../store/sensor/selector";
import { sensorGetTemp } from "../store/sensor/slice";

const pieData = [{ name: "Group A", value: 100 }];
const COLORS = ["#ffbe0b", "#38b000", "#d00000"];

export default function VehicleHealth() {
  const [value, setValue] = useState(100);
  const [color, setcolor] = useState(COLORS[0]);

  const tempData = useSelector(sensorTempDataSelector);

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

  useEffect(() => {
    if (value <= 100) {
      setcolor(COLORS[0]);
    }
    if (value <= 60) {
      setcolor(COLORS[1]);
    }
    if (value <= 30) {
      setcolor(COLORS[2]);
    }
    console.log({ value });
  }, [value]);

  return (
    <>
      <Drawer />

      <div className="container-fluid">
        <div className="g2">
          <LineChart
            width={600}
            height={400}
            data={tempData}
            margin={{
              top: 40,
              right: 30,
              left: 20,
              bottom: 15,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timeStamp">
              <Label value="Timestamp -->" offset={-1} position="bottom" />
              <Label
                value="Measure Of Engine Overheating "
                offset={330}
                position="top"
                style={{ fontWeight: "500", fontSize: "30px", padding: "5px " }}
              />
            </XAxis>
            <YAxis>
              <Label
                value="Temperature -->"
                angle={-90}
                position="left"
                offset={1}
              />
            </YAxis>
            <Tooltip />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#8884d8"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
        <div className="g1">
          {/* <button onClick={() => setValue(50)} type="button">
            2nd level
          </button>
          <button onClick={() => setValue(20)} type="button">
            3rd level
          </button>
          <button onClick={() => setValue(100)} type="button">
            reset button
          </button> */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <PieChart width={600} height={400}>
              <Pie
                data={pieData}
                cx={300}
                cy={190}
                innerRadius={120}
                outerRadius={170}
                fill="#8884d8"
                paddingAngle={0}
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
                  <Cell key={`cell-${index}`} fill={color} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    </>
  );
}
