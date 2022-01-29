export function ReposistoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name ?? "Default"}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.link}>
                Acessar repostirio
            </a>
        </li>
    )
}