import { PRODUCTS_INFO } from "./data";
import Header from "./components/Header";
import ProductsInfo from "./components/ProductsInfo";
import TabButton from "./components/TabButton";

function App() {
  let tabContent = 'please click a button';

  function handleSelect (selectedButton) {
    console.log(selectedButton);
    tabContent = selectedButton;
    console.log(tabContent);
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
            <TabButton onSelect = {() => handleSelect("Tree")} />
            <TabButton onSelect = {() => handleSelect("Scenary")} />
          </menu>

          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;