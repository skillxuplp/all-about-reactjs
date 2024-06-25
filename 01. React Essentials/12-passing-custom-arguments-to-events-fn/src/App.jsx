import { STUDENT_INFO } from "./data";
import Header from "./components/Header/Header";
import StudentInfo from "./components/StudentInfo/StudentInfo";

import './components/Header/Header.css';
import './components/StudentInfo/StudentInfo.css'

function App() {
  function handleSelect(selectedData) {
    console.log(`You've clicked the StudentInfo: ${selectedData.fullName}`);
    console.log(selectedData);
  }

  return (
    <>
      <Header />

      <main>
        <section id="section-1">
          
          {/* <StudentInfo {...STUDENT_INFO[0]} onSelect = {handleSelect} />

          <StudentInfo {...STUDENT_INFO[1]} onSelect = {handleSelect} />
          
          <StudentInfo {...STUDENT_INFO[2]} onSelect = {handleSelect} />
          
          <StudentInfo {...STUDENT_INFO[3]} onSelect = {handleSelect}>
            Has Drivers License (YES)!!
          </StudentInfo> */}

          <StudentInfo {...STUDENT_INFO[0]} onSelect = {() => handleSelect({...STUDENT_INFO[0]})} />

          <StudentInfo {...STUDENT_INFO[1]} onSelect = {() => handleSelect({...STUDENT_INFO[1]})} />

          <StudentInfo {...STUDENT_INFO[2]} onSelect = {() => handleSelect({...STUDENT_INFO[2]})} />

          <StudentInfo {...STUDENT_INFO[3]} onSelect = {() => handleSelect({...STUDENT_INFO[3]})}>
            Has Drivers License (YES)!!
          </StudentInfo>

        </section>
      </main>
    </>
  )
}

export default App;