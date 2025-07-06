import fileServices from "../appwriteServices/fileServices";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage, status }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-lg p-4">
        <div className="w-full justify-center mb-4">
          <div className="w-full h-48 overflow-hidden rounded-xl">
            <img
              src={fileServices.getFilePreview(featuredImage)}
              alt={title}
              className="rounded-xl"
            />
          </div>
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <span className="text-sm text-green-700">{status}</span>
      </div>
    </Link>
  );
};

export default PostCard;
