import { useState } from "react";

import { PRODUCTS_INFO } from "./data";
import { EXAMPLES } from "./data";
import { USERS_DATA } from "./data";

import Header from "./components/Header";
import ProductsInfo from "./components/ProductsInfo";
import TabButton from "./components/TabButton";
import UsersData from "./components/UsersData";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  const [selectedUser, setSelectedUser] = useState("jonas");

  function handleSelect (selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  function handleSelectedUser (selectedUser) {
    console.log(selectedUser);
    setSelectedUser(selectedUser);
  }

  let tabContent = '';
  let userContent = '';

  if (selectedTopic) {
    tabContent = (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
          </div>
    );
  } else {
    tabContent = <p>please select a topic</p>;
  }


  if (selectedUser) {
    userContent = (
      <div id="user-content">
        <h3>{USERS_DATA[selectedUser].fullName}</h3>
        <h4>{USERS_DATA[selectedUser].emailAddress}</h4>
        <h4>{USERS_DATA[selectedUser].mobileNumber}</h4>
      </div>
    );
  } else {
    userContent = <p>please select any user</p>
  }

  return (
    <div>
      <Header />

      <main>
        <section id="products-info">
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

        <section id="users-data">
          <h2>Users Data</h2>

          <ul>
            <UsersData onSelectUser = {() => handleSelectedUser(USERS_DATA["jonas"].fullName)}>{USERS_DATA["jonas"]["fullName"]}</UsersData>
            <UsersData onSelectUser = {() => handleSelectedUser(USERS_DATA["james"].fullName)}>{USERS_DATA["james"].fullName}</UsersData>
            <UsersData onSelectUser = {() => handleSelectedUser(USERS_DATA["williams"].fullName)}>{USERS_DATA["williams"].fullName}</UsersData>
            <UsersData onSelectUser = {() => handleSelectedUser(USERS_DATA["smith"].fullName)}>{USERS_DATA["smith"].fullName}</UsersData>
          </ul>
        </section>

        {userContent}

        <section id="examples">
          <h2>Clickable Events</h2>

          <menu>
            <TabButton isSelected = {selectedTopic === "components"} onSelect = {() => handleSelect("components")}>
              components
            </TabButton>
            <TabButton isSelected = {selectedTopic === "jsx"} onSelect = {() => handleSelect("jsx")}>
              jsx
            </TabButton>
            <TabButton isSelected = {selectedTopic === "props"} onSelect = {() => handleSelect("props")}>
              props
            </TabButton>
            <TabButton isSelected = {selectedTopic === "state"} onSelect = {() => handleSelect("state")}>
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