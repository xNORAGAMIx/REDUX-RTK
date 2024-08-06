import { useAddNewProductMutation } from "../redux/service/dummyData";

const AddNewProduct = () => {
  const [addNewProduct, { data, isError }] = useAddNewProductMutation();
  console.log(data);

  if (isError) {
    return <h1>Some error occurred!</h1>;
  }

  const handleAddProduct = async () => {
    try {
      const newProduct = {
        id: 100,
        title: "Book is Golden",
        description: "Random book whose title sounds like fun! ",
      };

      await addNewProduct(newProduct);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>{data?.id}</h1>
      <h2>{data?.title}</h2>
      <h3>{data?.description}</h3>

      <button onClick={handleAddProduct}>Add New Product</button>
    </div>
  );
};

export default AddNewProduct;
