import blogFetch from "../axios/config";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Post.css";

interface PostData {
  title: string;
  body: string;
}

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>({});

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`);

      const data = response.data;

      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="post-container">
      {!post.title ? (
        <p>Carregando</p>
      ) : (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
