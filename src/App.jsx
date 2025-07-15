import { ToastContainer } from "react-toastify";
import {useSelector , useDispatch} from 'react-redux'
import { useEffect, useState } from "react";
import authService from './appwriteServices/authServices'
import { login , logout} from "./store/authSlice";
import {Footer, Header, Loading} from './components'
import { Outlet } from "react-router-dom";


const App = () => {



  const [loading , setLoading] = useState(true)
  const loginStatus = useSelector((state)=> state.auth.status)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
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
    return <Loading type="spin" color="blue" />
  }
  return (
    <>
    <ToastContainer />
    <div className="min-h-screen flex flex-wrap content-between bg-gray-300">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
    </>
  );
};

export default App;
