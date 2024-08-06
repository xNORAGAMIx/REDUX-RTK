import { useUpdateProductMutation } from "../redux/service/dummyData";

const UpdateProduct = ({ productId }) => {
  const [updateProduct, { data, isError }] = useUpdateProductMutation();
  console.log(data);

  if (isError) {
    return <h1>Some error has occurred!</h1>;
  }

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        title: "Title Updated",
        description: "Description Updated",
      };

      await updateProduct({
        id: productId,
        updatedProduct: updatedProductData,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={handleUpdateProduct}>Update Product</button>
    </div>
  );
};

export default UpdateProduct;
