import React, { useEffect, useState } from "react";
import ButtonAdd from "../../components/ButtonAdd";
import Tabel from "../../components/Tabel";
import Content from "../../layout/Content";
import { columnsUser as column } from "../../data";

const Personal = () => {
  const [data, setData] = useState([]);
  const [columns, setColums] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
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
    <Content name="Personal Tabel">
      <div className="flex justify-end">
        <ButtonAdd text="Tambah User" link={`/personal/adduser`} />
      </div>
      {data && <Tabel data={data} columns={columns} loading={loading} />}
    </Content>
  );
};

export default Personal;
