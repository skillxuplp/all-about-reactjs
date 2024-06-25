export default function UsersData ({children, onSelectUser}) {
    return (
        <li>
            <button onClick = {onSelectUser}>{children}</button>
        </li>
    );
}