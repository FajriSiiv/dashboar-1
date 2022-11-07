import React, { useEffect, useState } from "react";
import Card from "../Card";
import { Chart } from "../Chart";

export const getDataUrl = (url, setStates) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => setStates(data));
};

const Dashboard = () => {
  const [dataPersonal, setDataPersonal] = useState();
  const [product, setProduct] = useState();

  useEffect(() => {
    getDataUrl("https://jsonplaceholder.typicode.com/users", setDataPersonal);
    getDataUrl("https://fakestoreapi.com/products", setProduct);
  }, [setDataPersonal, setProduct]);

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
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <Card data={dataPersonal} text="user active" link="/personal" />
        </div>
        <div>
          <Card data={product} text="product active" link="product" />
        </div>
      </div>
      <div className="max-h-[400px] grid grid-cols-2 gap-x-5 my-9 bg-slate-200 rounded-lg  p-5">
        <div>
          <Chart options={options_2} />
        </div>
        <div>
          <Chart options={options_2} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
