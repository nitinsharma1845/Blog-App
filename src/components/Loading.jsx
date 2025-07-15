import { ClipLoader } from 'react-spinners';

const Loading = ({ color = "#36d7b7", size = 50 , hight = "h-screen" }) => {
  return (
    <div className={`flex items-center justify-center ${hight}`}>
      <ClipLoader color={color} size={size} />
    </div>
  );
};

export default Loading;