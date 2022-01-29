import { ReposistoryItem } from "./RepositoryItem"

const repository = {
    name:"unform",
    description:"Forms in React",
    link:"www.github.com"
}

export function RepostoryList (){
    return(
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
                <ReposistoryItem repository={repository} />
                <ReposistoryItem repository={repository}/>
                <ReposistoryItem repository={repository}/>
                <ReposistoryItem repository={repository}/>
            </ul>
        </section>
    )
}