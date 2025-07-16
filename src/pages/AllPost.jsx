import { useEffect, useState } from "react";
import databaseServices from "../appwriteServices/databaseServices";
import fileServices from "../appwriteServices/fileServices";
import { Container, PostCard, Loading } from "../components";
import { Link, useNavigate } from "react-router-dom";

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await databaseServices.getPosts();
        setPosts(data.documents);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="py-20 container">
      <Container>
        <h1 className="text-3xl font-bold mb-6 dark:text-gray-200">All Posts</h1>

        {loading ? (
          <Loading color="black" />
        ) : posts.length === 0 ? (
          <div className="text-center text-gray-600 dark:text-gray-100">
            <p className="text-xl font-semibold mb-4 ">
              No posts yet. Be the first to create one!
            </p>
            <button
              onClick={() => navigate('/add-post') }
            className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition">
              Create Post
            </button>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.$id} {...post} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default AllPost;
