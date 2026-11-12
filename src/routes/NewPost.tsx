import blogFetch from "../axios/config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./NewPost.css"

export default function NewPost() {
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const createPost = async (e: React.FormEvent) => {
        e.preventDefault()
        
        const post = { title, body, userId: 1 }

        try {
            await blogFetch.post("/posts", post)
            navigate("/")
        } catch (error) {
            console.log("Erro ao criar o post:", error)
        }
    }

    return (
        <div className="new-post">
            <h2>Inserir novo Post:</h2>
            <form onSubmit={createPost}>
                <div className="form-control">
                    <label htmlFor="title">Titulo:</label>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Digite o titulo" 
                        id="title" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="body">Conteudo:</label>
                    <textarea 
                        name="body" 
                        id="body" 
                        placeholder="digite o conteudo"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>

                <input type="submit" value="Criar Post" className="btn" />
            </form>
        </div>
    )
}