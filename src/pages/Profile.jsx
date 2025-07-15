import {Profile as ProfileComponent , MyPosts} from '../components'
const Profile = () => {
  return (
    <div className='container pt-20 '>
      <div className='md:w-2xl p-10 rounded-xl shadow-xl bg-gray-100 w-[90%] mx-auto mb-10 '>
        <ProfileComponent />
      </div>
      <div className='bg-gray-100 mx-auto p-10 rounded-xl shadow-xl'>
        < MyPosts />
      </div>
    </div>
  )
}

export default Profile