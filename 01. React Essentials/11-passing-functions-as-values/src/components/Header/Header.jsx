const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(maxIndex) {
  return Math.floor(Math.random() * (maxIndex + 1));
}

export default function Header() {
    const description = reactDescriptions[getRandomInt(2)];
  
    return (
      <header>
        <h1>React Essentials</h1>      
        <p><strong>{description}</strong> React concepts you will need for almost any app you are going to build!</p>
      </header>
    )
  }