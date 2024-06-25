import { useState } from "react";

import { PRODUCTS_INFO } from "./data";
import Header from "./components/Header";
import ProductsInfo from "./components/ProductsInfo";
import TabButton from "./components/TabButton";

function App() {
  const [selectedProduct, setSelectedProduct] = useState("please click a button! and update the state");

  function handleSelect (selectedButton) {
    setSelectedProduct(selectedButton);
  }

  return (
    <div>
      <Header />

      <main>
        <section>
          <h2>Products Info</h2>
          
          <ul>
            <ProductsInfo 
              productId = {PRODUCTS_INFO[0].productId} 
              productName = {PRODUCTS_INFO[0].productName} 
              productDescription = {PRODUCTS_INFO[0].productDescription}
              productImage = {PRODUCTS_INFO[0].productImage} 
              productPrice = {PRODUCTS_INFO[0].productPrice} 
            />

            <ProductsInfo {...PRODUCTS_INFO[1]} />
            <ProductsInfo {...PRODUCTS_INFO[2]} />
          </ul>
          
        </section>

        <section>
          <h2>Clickable Events</h2>

          <menu>
            <TabButton onSelect = {() => handleSelect("Eggs")} />
            <TabButton onSelect = {() => handleSelect("Tree")}>
              Tree
            </TabButton>
            <TabButton onSelect = {() => handleSelect("Scenary")} />
          </menu>

          {selectedProduct}
        </section>

        
      </main>
    </div>
  );
}

export default App;