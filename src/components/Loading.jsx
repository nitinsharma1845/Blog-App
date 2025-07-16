import { ClipLoader } from 'react-spinners';
import useTheme from '../context/ThemeContext/Theme';

const Loading = ({ color = `#36d7b7`, size = 50 , hight = "h-screen" }) => {

  const {themeMode} = useTheme()

  return (
    <div className={`flex items-center justify-center dark:bg-gray-800 ${hight}`}>
      <ClipLoader color={themeMode === 'dark' ? "white" : color} size={size} />
    </div>
  );
};

export default Loading;