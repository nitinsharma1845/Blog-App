import { useEffect, useState } from "react";
import databaseServices from "../appwriteServices/databaseServices";
import { useSelector } from "react-redux";
import { Query } from "appwrite";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import Loading from "./Loading";
import { Input as InputComponent } from "../components";

const MyPosts = () => {
  const userData = useSelector((state) => state.auth.userData);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [input , setInput] = useState('')

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

  // const filterData = posts?.map((post)=> input.toLowerCase().includes(post) )

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
      <div className="flex justify-between gap-6">
        <h1 className="md:text-4xl text-xl font-aldrich mb-10 dark:text-gray-200">
          My Posts
        </h1>
        <div className="w-[50%]">
          {/* <InputComponent placeholder="Search Post.." onClick={(e)=>setInput(e.target.value)} /> */}
        </div>
      </div>
      <div>
        {posts?.map((post, index) => (
          <Link
            to={`/post/${post.$id}`}
            key={index}
            className="flex justify-between bg-gray-300 dark:bg-gray-600 dark:text-gray-200 my-3 p-3 rounded shadow hover:shadow-xl duration-300 items-center"
          >
            <h1 className="w-[85%] text-xl">{post.title}</h1>
            <div className="w-[15%]">
              <p className="md:text-base text-xs opacity-55">
                {formatDistanceToNow(new Date(post.$createdAt), {
                  addSuffix: true,
                })}
              </p>
              <p
                className={`md:text-base text-xs ${
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
