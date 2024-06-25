const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

export default function Header() {
    const description = reactDescriptions[getRandomIndex(3)];
    return (
        <header>
            <h1>React Concepts</h1>

            <p> <strong>{description}</strong> Know more about React Concepts!</p>
        </header>
    );
}