import { useDispatch , useSelector } from "react-redux"
import { RxAvatar } from "react-icons/rx";
import {LogoutBtn} from '../index'
const Profile = () => {


  const userData = useSelector((state)=> state.auth.userData)


  return (
    <div className="w-full">
      <div className="md:py-8 py-5 max-auto flex justify-center items-center flex-col">
        <div className="md:w-[100px] md:h-[100px] h-[70px] w-[70px] rounded-full">
          <RxAvatar width={100} className="font-light w-full h-full"/>
        </div>
        <h1 className="py-3 font-semibold text-xl md:text-3xl">
          {
            userData.name
          }
        </h1>
        <p className="md:text-xl text-lg pb-5 italic">
          {
            userData.email
          }
        </p>
        
        <LogoutBtn />

      </div>
    </div>
  )
}

export default Profile