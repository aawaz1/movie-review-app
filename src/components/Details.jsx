import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/Firebase'
import { doc, getDoc } from 'firebase/firestore'
import { ThreeCircles } from 'react-loader-spinner'
import Reviews from './Reviews'

function Details() {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    year: "",
    image: "",
    description: "",
    rating: 0,
    rated:0,
  });
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    async function getData() {
      setLoading(true)
      
        const _doc = doc(db, "movies", id);
        const _data = await getDoc(_doc);
       
          setData(_data.data());
        
          
        setLoading(false);
      }
    
    getData();
  }, [id]); 

  
  return (
    <div className='p-4 w-full mt-4 flex flex-col md:flex-row items-center md:items-start justify-center '>
      { loading ? <div className='h-96 w-full flex items-center justify-center'> <ThreeCircles height={32} color='white'/> </div> :
      
        <>
      <img className='h-96 block md:sticky top-24' src={data.image} alt={data.title} />
      <div className='md:ml-4 w-full md:w-1/2'>
        <h1 className='text-3xl font-bold text-gray-500'>{data.title} <span className='text-xl'>({data.year})</span></h1>
        <div className='flex'>
          <p className='text-xl'>Rating:</p>
          <ReactStars
            size={20}
            half={true}
            value={data.rating/data.rated}
            edit={false}
          />
        </div>
        <p className='mt-2'>{data.description}</p>
        <Reviews id= {id} prevRating= {data.rating} userRated= {data.rated}/>
      </div>
      </>
}
      

    </div>
  );
}

export default Details;
