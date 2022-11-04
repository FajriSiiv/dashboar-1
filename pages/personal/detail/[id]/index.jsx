import React from "react";
import ButtonBack from "../../../../components/ButtonBack";
import Label from "../../../../components/Label";
import Content from "../../../../layout/Content";

const DetailUser = ({ data }) => {
  return (
    <Content name={`Detail ${data.name}`}>
      <ButtonBack />
      <div className="flex flex-col gap-y-5 bg-gray-100 p-5">
        <Label text="Name" data={data.name} />
        <Label text="Email" data={data.email} />
        <Label text="Phone" data={data.phone} />
        <Label text="Website" data={data.website} />
        <Label
          text="Address"
          data={`${data.address.street}, ${data.address.city}`}
        />
        <Label text="Company" data={data.company.name} />
        <Label text="Jobdesk" data={data.company.catchPhrase} />
      </div>
    </Content>
  );
};

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}

export default DetailUser;
