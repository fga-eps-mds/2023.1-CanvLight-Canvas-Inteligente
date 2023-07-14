import React from "react";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as chartjs } from "chart.js/auto";
import "./BarChart.css";

function BarChart({ chartData }) {
  return (
    <Bar
      data={chartData}
      options={{
        scales: {
          x: {
            ticks: {
              color: "var(--font_color)",
              font: {
                size: 10,
              },
            },
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              color: "var(--font_color)",
              font: {
                size: 10,
              },
              stepSize: 10,
            },
            grid: {
              display: false,
            },
            min: 0,
            max: 100,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}

export default BarChart;
