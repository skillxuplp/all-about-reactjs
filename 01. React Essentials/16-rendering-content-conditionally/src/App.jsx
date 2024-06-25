import { useState } from "react";

import { PRODUCTS_INFO } from "./data";
import { EXAMPLES } from "./data";

import Header from "./components/Header";
import ProductsInfo from "./components/ProductsInfo";
import TabButton from "./components/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleSelect (selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  let tabContent = '';

  if (selectedTopic) {
    tabContent = (
          <div style = {{border: "1px solid #000", borderRadius: "8px", marginBottom: "50px"}}>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
          </div>
    );
  } else {
    tabContent = <p>please select a topic</p>;
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
            <TabButton onSelect = {() => handleSelect("components")}>
              components
            </TabButton>
            <TabButton onSelect = {() => handleSelect("jsx")}>
              jsx
            </TabButton>
            <TabButton onSelect = {() => handleSelect("props")}>
              props
            </TabButton>
            <TabButton onSelect = {() => handleSelect("state")}>
              state
            </TabButton>
          </menu>

          {/* {selectedProduct} */}

          {tabContent}
        </section>

      </main>
    </div>
  );
}

export default App;