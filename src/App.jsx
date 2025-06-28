import { ToastContainer } from "react-toastify";
import {useSelector , useDispatch} from 'react-redux'
import { useEffect, useState } from "react";
import authService from './appwriteServices/authServices'
import { login , logout} from "./store/authSlice";
import {Footer, Header, Loading} from './components'


const App = () => {
  const [loading , setLoading] = useState(true)
  const loginStatus = useSelector((state)=> state.auth.status)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      console.log(userData)
      if(userData){
        dispatch(login({status : true , userData : userData}))
      }else{
        dispatch(logout())
      }
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
   
  } , [])

  if(loading){
    return <Loading type="spin" color="purple" />
  }
  return (
    <>
    <ToastContainer />
    <div className="min-h-screen flex flex-wrap content-between bg-gray-300">
      <div className="w-full block">
        <Header />
        <main>
          {/* {Outlate} */}
        </main>
        <Footer />
      </div>
    </div>
    </>
  );
};

export default App;
