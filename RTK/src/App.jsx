import ProductById from "./components/ProductById";
import AllProducts from "./components/AllProducts";
import AddNewProduct from "./components/AddNewProduct";
import UpdateProduct from "./components/UpdateProduct";
const App = () => {
  return (
    <div>
      {/* <AllProducts /> */}
      {/* <ProductById /> */}
      {/* <AddNewProduct /> */}
      <UpdateProduct productId={2}/>
    </div>
  );
};

export default App;
