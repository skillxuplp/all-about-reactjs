import { CORE_CONCEPTS } from "./data";
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from "./components/TabButton.jsx";
import './components/Header/Header.css';


function App() {
  function handleSelect() {
    console.log(`Hello., You've clicked on selected the Button!`);
  }

  return (
    <>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <button>Check My Button</button>

          <ul>
            <CoreConcept
              title = {CORE_CONCEPTS[0].title} 
              description = {CORE_CONCEPTS[0].description} 
              image = {CORE_CONCEPTS[0].image}
            />

            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>

          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>            
          </menu>

          Dynamic Content
        </section>

      </main>
    </>
  )
}

export default App;