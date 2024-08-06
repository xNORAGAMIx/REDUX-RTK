import { useGetProductByIdQuery } from "../redux/service/dummyData"

const ProductById = () => {
    const {data, isError} = useGetProductByIdQuery(2);
    console.log(data);

    if(isError){
        return <h1>Some error has occurred</h1>
    }
  return (
    <div>
      {data?.title}
    </div>
  )
}

export default ProductById
