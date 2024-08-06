import React from "react";
import { useGetAllProductQuery } from "../redux/service/dummyData";

const AllProducts = () => {
  const { data, isError } = useGetAllProductQuery();
  console.log(data);

  if(isError){
    return <h1>Some error occurred!</h1>
  }

  return (
    <div>
      {data?.products.map((p) => (
        <h1 key={p.id}>{p.title}</h1>
      ))}
    </div>
  );
};

export default AllProducts;
