import React from "react";
import { Chart } from "../../components/Chart";

const Traffic = () => {
  const options_1 = {
    plugins: {
      title: {
        display: true,
        text: "Chart Penjualan Product 1",
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
      },
    },
    maintainAspectRatio: false,
  };

  const options_2 = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Chart Penjualan Product 2",
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  };
  return (
    <div className="h-full grid grid-rows-2 gap-x-10">
      <div className="max-h-[300px]">
        <Chart options={options_1} />
      </div>
      <div className="max-h-[300px]">
        <Chart options={options_2} />
      </div>
    </div>
  );
};

export default Traffic;
