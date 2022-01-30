import { ReposistoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'
import { useState , useEffect} from "react"
const repository = {
    name:"unform",
    description:"Forms in React",
    link:"www.github.com"
}

export function RepostoryList (){
    const [repositories,setRepositories]= useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/MikaelSantos1/repos')
        .then(response=>response.json())
        .then(data=>setRepositories(data))
    },[])
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