import React from "react";
import Tabel from "../../components/Tabel";
import Content from "../../layout/Content";

const Corporate = () => {
  const columns = [
    {
      name: "Nama",
      selector: (row) => row.nama,
      sortable: true,
    },
    {
      name: "No Identik",
      selector: (row) => row.noid,
      sortable: true,
    },
    {
      name: "Wilayah",
      selector: (row) => row.wilayah,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
  ];

  const data = [
    {
      nama: "PT. Persero",
      noid: 12239521,
      wilayah: "Jakarta",
      status: "Aktif",
    },
    {
      nama: "PT. Angkasa Pura",
      noid: 12329521,
      wilayah: "Kota Tangerang",
      status: "Aktif",
    },
    {
      nama: "PT. Manggala",
      noid: 34239521,
      wilayah: "Banten",
      status: "Aktif",
    },
    {
      nama: "PT. Sprout",
      noid: 58340123,
      wilayah: "Bali",
      status: "Tidak Aktif",
    },
    {
      nama: "PT. LinkedIn",
      noid: 5992134,
      wilayah: "Sumatra",
      status: "Tidak Aktif",
    },
  ];

  return (
    <Content name="Corporate Tabel">
      <Tabel data={data} columns={columns} />
    </Content>
  );
};

export default Corporate;
