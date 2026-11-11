import "./NewPost.css"
export default function NewPost(){
    return(
        <div className="new-post">
            <h2>Inserir novo Post:</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="title">Titulo:</label>
                    <input type="text" name="title" placeholder="Digite o titulo" id="titulo" />
                </div>

                <div className="form-control">
                    <label htmlFor="body">Conteudo:</label>
                    <textarea name="body" id="body" placeholder="digite o conteudo"></textarea>
                </div>

                <input type="submit" value="Criar Post" className="btn" />
            </form>
        </div>
    )
}