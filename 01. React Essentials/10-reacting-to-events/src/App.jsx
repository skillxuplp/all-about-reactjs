import { CORE_CONCEPTS } from "./data";
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from "./components/TabButton.jsx";
import './components/Header/Header.css';
import './TabButton.css';

function App() {
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
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>

      </main>
    </>
  )
}

export default App;