import React, { useEffect, useState } from "react";
import Tabel from "../../components/Tabel";
import Content from "../../layout/Content";
import { columnStore as column } from "../../data";

const Product = () => {
  const [data, setData] = useState([]);
  const [columns, setColums] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setData(data);
        });
    };
    getData();
    setColums(column);
  }, [data, columns]);

  return (
    <Content name="Product Tabel">
      <div className="flex justify-end"></div>
      {data && <Tabel data={data} columns={columns} loading={loading} />}
    </Content>
  );
};

export default Product;
