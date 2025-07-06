import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import databaseServices from "../appwriteServices/databaseServices";
import fileServices from "../appwriteServices/fileServices";
import { useSelector } from "react-redux";
import { Container, Loading, Button } from "../components";
import parse from "html-react-parser";
import { toast } from "react-toastify";

const Post = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;
  const navigate = useNavigate();

  useEffect(() => {
    async function getPost() {
      try {
        const post = await databaseServices.getPost(slug);
        if (post) {
          setPost(post);
        }
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    }

    getPost();
  }, []);

  async function handleDelete(id) {
    const deleteTost = toast.loading("Deleting post...");
    const result = await databaseServices.deletePost(id);

    if (result) {
      navigate("/all-posts");
      toast.update(deleteTost, {
        render: "Post Deleted",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } else {
      toast.update(deleteTost, {
        render: "Something went wrong!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  }

  if (loading) return <Loading color="black" />;

  return (
    <div className="py-20 container font-poppins">
      <Container>
        <div className="w-full">
          <div className="w-full object-cover aspect-3/2 overflow-hidden rounded-xl">
            <img
              src={fileServices.getFilePreview(post.featuredImage)}
              alt={post.title}
            />
          </div>
          <div>
            <h2 className="text-4xl font-semibold my-5 italic">{post.title}</h2>
            <hr />
            <div className="prose max-w-none my-8 prose ">{parse(post.content)}</div>
          </div>
        </div>
        <hr />

        {isAuthor && (
          <div className="my-8">
            <Link to={`/edit-post/${post.$id}`}>
              <Button type="button">Edit</Button>
            </Link>
            <Link>
              <Button
                onClick={() => handleDelete(post.$id)}
                type="button"
                textColor="text-white"
                bgColor="bg-red-500"
                className="mx-3"
              >
                Delete
              </Button>
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Post;
