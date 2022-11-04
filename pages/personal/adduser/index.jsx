import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ButtonBack from "../../../components/ButtonBack";
import { dataUser as data } from "../../../data";
const Adduser = () => {
  const router = useRouter();

  const [nama, setNama] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let dataNew = {
      name: nama,
      number: number,
      email: email,
      website: website,
    };
    data.push(dataNew);
    console.log(data);
    console.log(dataNew);
    router.push("/personal");
  };
  return (
    <div>
      <ButtonBack />
      <h1>Add User</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Adduser;
