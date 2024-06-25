export default function TabButton({children, onSelect}) {
    
    return(
        <li>
            <button className="specialButton" onClick={onSelect}>{children}</button>
        </li>
    )
}