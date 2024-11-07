import Person from "./components/Person";
import Product from "./components/Product"; "./components/Product"

const App = () => {
  return (
    <div>
      <Person name={"Minh"} age={21} />
      <Product name="ASUS" price={21000} />
    </div>
  )
};

export default App;