import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
  const {slug} = useParams()
  return (
    <div>Post : {slug}</div>
  )
}

export default Post