import reactImg from "./assets/react.svg";
import rImg1 from "./assets/img1.jpg";
import rImg2 from "./assets/img2.jpg";
import rImg3 from "./assets/img3.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];
const reactImgs = [rImg1, rImg2, rImg3];

function getRandomInt(maxIndex) {
  return Math.floor(Math.random() * (maxIndex + 1));
}

function getRandomImg(maxIndex) {
  return Math.floor(Math.random() * (maxIndex + 1));
}

function Header() {
  const description = reactDescriptions[getRandomInt(2)];
  const rImg = reactImgs[getRandomImg(2)];

  return (
    <header>
      <h1>React Essentials</h1>
      <img src={rImg} alt={rImg} title={rImg} />
      <p><strong>{description}</strong> React concepts you will need for almost any app you are going to build!</p>
    </header>
  )
}

function App() {
  return (
    <>
      <Header />

      <main>
        <h4>Time to discuss about Outputting Dynamic Values</h4>
      </main>
    </>
  )
}

export default App;