const repositoryName = 'unform'

export function RepostoryList (){
    return(
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in ReactJs</p>
                    <a href="">
                        Acessar repostirio
                    </a>
                </li>
            </ul>
        </section>
    )
}