import {Profile as ProfileComponent , MyPosts} from '../components'
const Profile = () => {
  return (
    <div className='container pt-20 '>
      <div className='md:w-2xl p-10 rounded-xl hover:shadow-xl shadow duration-200 bg-gray-100 w-[90%] mx-auto mb-10 dark:bg-gray-800 dark:shadow'>
        <ProfileComponent />
      </div>
      <div className='bg-gray-100 dark:bg-gray-800 dark:hover:shadow-xl mx-auto p-10 rounded-xl hover:shadow-xl duration-200 shadow'>
        < MyPosts />
      </div>
    </div>
  )
}

export default Profile