import { useNavigate, useParams } from "react-router-dom";
import { Container, PostForm , Loading } from "../components";
import { useState, useEffect } from "react";
import databaseServices from "../appwriteServices/databaseServices";

const EditPost = () => {
  const [post, setPost] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPost() {
      const fetedpost = await databaseServices.getPost(slug)
      if(fetedpost){
        setPost(fetedpost)
      }
    }

    fetchPost();
  }, [slug, navigate]);


  return (
    <div className="py-20 container">
      <Container>
        {
          post?.$id ? <PostForm post={post} /> : <Loading color="black" />
        }
        
      </Container>
    </div>
  );
};

export default EditPost;
