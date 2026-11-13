import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`);
      const data = response.data;

      setTitle(data.title);
      setBody(data.body);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  // Função para enviar a edição (foi separada para não dar conflito)
  const handleUpdate = async (e: any) => {
    e.preventDefault();

    const post = { title, body };

    try {
      await blogFetch.put(`/posts/${id}`, post);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new-post">
      <h2>Editando: {title}</h2>
      {/* Chamando a função handleUpdate no submit */}
      <form onSubmit={handleUpdate}>
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

        <input type="submit" value="Editar Post" className="btn" />
      </form>
    </div>
  );
};

export default EditPost;
