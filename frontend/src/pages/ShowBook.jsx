import React,{useEffect , useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner'
function ShowBook() {

const [book, setBook]= useState({});
const [loading, setLoading]= useState(false);
const {id}= useParams();

useEffect(()=>{
  setLoading(true);
  axios
  .get(`https://book-net-pz2e.vercel.app/books${id}`)
  .then((res)=>{
    setBook(res.data);
    setLoading(false);
  })
  .catch((err)=>{
   console.log(err);
   setLoading(false);
  })
},[]);
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='my-4 text-3xl'>Show book</h1>
      {loading ? (
        <Spinner />
      ):(
        <div className='flex flex-col p-4 border-2 border-sky-400 rounded-xl w-fit'>

       <div className='my-4'>
        <span className='mr-4 text-xl text-gray-500'>Id</span>
        <span>{book._id}</span>
       </div>

       <div className='my-4'>
        <span className='mr-4 text-xl text-gray-500'>Title</span>
        <span>{book.title}</span>
       </div>

       <div className='my-4'>
        <span className='mr-4 text-xl text-gray-500'>Author </span>
        <span>{book.author}</span>
       </div>
       <div className='my-4'>
        <span className='mr-4 text-xl text-gray-500'>Publish Year</span>
        <span>{book.publishYear}</span>
       </div>

       <div className='my-4'>
        <span className='mr-4 text-xl text-gray-500'>Create Time</span>
        <span>{new Date(book.createdAt).toString()}</span>
       </div>
       <div className='my-4'>
        <span className='mr-4 text-xl text-gray-500'>Last Updated Time</span>
        <span>{new Date(book.updatedAt).toString()}</span>
       </div>

        </div>
      )}
    </div>
  )
}

export default ShowBook
