export default function TabButton({children}) {
    function handleClick() {
        console.log(`You've clicked on ${children}`);
    }

    return(
        <li>
            <button className="specialButton" onClick={handleClick}>{children}</button>
        </li>
    )
}