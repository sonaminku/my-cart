import React from 'react'
import { Link } from 'react-router-dom'

const CategoryType = ({category}) => {
    const {id, name, description} = category
  return (
    <div className='flex flex-row text-center m-5 p-4 mx-36'>
      <div className="container bg-pink-200 p-8">
      <Link to={`/category/${id}`}>
        <h1 className='text-2xl font-bold'>{name}</h1>
        <p>{description}</p>
        </Link>
      </div>
    </div>
  )
}

export default CategoryType
