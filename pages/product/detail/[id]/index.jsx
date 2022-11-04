import React from "react";
import ButtonBack from "../../../../components/ButtonBack";
import Label from "../../../../components/Label";
import Content from "../../../../layout/Content";

const DetailProduct = ({ data }) => {
  return (
    <Content name={`Detail ${data.title}`}>
      <ButtonBack />
      <div className="flex flex-col gap-y-5 bg-gray-100 p-5">
        <Label text="Name" data={data.title} />
        <Label text="Price" data={data.price} />
        <Label text="Description" data={data.description} />
        <Label text="Category" data={data.category} />
        <Label
          text="Rating"
          data={`${data.rating.rate}, ${data.rating.rate}`}
        />
      </div>
    </Content>
  );
};

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}

export default DetailProduct;
