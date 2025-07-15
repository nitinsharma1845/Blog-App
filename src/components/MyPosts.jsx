import { useEffect, useState } from "react";
import databaseServices from "../appwriteServices/databaseServices";
import { useSelector } from "react-redux";
import { Query } from "appwrite";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import Loading from "./Loading";

const MyPosts = () => {
  const userData = useSelector((state) => state.auth.userData);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const posts = await databaseServices.getPosts([
        Query.equal("userId", userData.$id),
        Query.equal("status", ["active", "inactive"]),
      ]);
      // console.log("POst of User :::::::::",posts)

      if (posts) {
        setPosts(posts.documents.reverse());
        setLoading(false);
      }
    }

    getData();
  }, []);

  // console.log("UserData ::::::::",userData)
  // console.log("POst of User :::::::::", posts);

  if (loading)
    return (
      <div>
        <Loading color="purple" hight="content-fit" />
      </div>
    );

  return (
    <div className="">
      <h1 className="md:text-4xl text-xl font-aldrich mb-10">My Posts</h1>
      <div>
        {posts?.map((post, index) => (
          <Link
            to={`/post/${post.$id}`}
            key={index}
            className="flex justify-between bg-gray-300 my-3 p-3 rounded shadow items-center"
          >
            <h1 className="w-[85%] text-xl">{post.title}</h1>
            <div className="w-[15%]">
              <p className="md:text-base text-xs opacity-55">
                {formatDistanceToNow(new Date(post.$createdAt), {
                  addSuffix: true,
                })}
              </p>
              <p
                className={`md:text-base text-xs opacity-75 ${
                  post.status === "active" ? "text-green-500" : "text-red-500"
                } `}
              >
                {post.status}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
