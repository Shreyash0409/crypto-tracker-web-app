import React, { useRef, useEffect, useState, useCallback } from "react";
import Chartjs from "chart.js";
import { historyOptions } from "../../chartConfig/ChartConfig";
import { useSelector } from "react-redux";
import classes from "./HistroyChart.module.css";

const HistoryChart = () => {
  const chartRef = useRef();
  const coins = useSelector((state) => state.coin);
  const { day, week, year, detail } = coins;
  const [timeFormat, setTimeFormat] = useState("24h");

  const determineTimeFormat = useCallback(() => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  }, [timeFormat, day, week, year]);
  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail.name} price`,
              data: determineTimeFormat(),
              borderColor: "#16C782",
              fill: false,
              cubicInterpolationMode: "monotone",
              tension: 0.5,
              pointRadius: 1.5,
            },
          ],
        },
        options: {
          ...historyOptions,
        },
      });
      console.log(chartInstance);
    }
    return () => {
      return {
        coin: {},
      };
    };
  }, [determineTimeFormat, detail]);

  return (
    <div>
      <div className={classes["Chart__container"]}>
        <canvas ref={chartRef} id="myChart"></canvas>
      </div>

      <div className={classes["Chart__Btn"]}>
        <button
          onClick={() => {
            setTimeFormat("24h");
          }}
        >
          24h
        </button>
        <button onClick={() => setTimeFormat("7d")}>7d</button>
        <button onClick={() => setTimeFormat("1y")}>1y</button>
      </div>
    </div>
  );
};

export default HistoryChart;
