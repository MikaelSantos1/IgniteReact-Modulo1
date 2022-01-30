import { ReposistoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'
import { useState , useEffect} from "react"
interface Repository  {
    name:string;
   description:string;
   html_url:string;
}

export function RepostoryList (){
    const [repositories,setRepositories]= useState<Repository[]>([])
    useEffect(()=>{
        fetch('https://api.github.com/users/MikaelSantos1/repos')
        .then(response=>response.json())
        .then(data=>setRepositories(data))
    },[])
    return(
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
                {repositories.map(repository=>{
                    return  <ReposistoryItem repository={repository} key={repository.name}/>
                })}     
            </ul>
        </section>
    )
}