import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifs'

import GifGridItem from './GifGridItem';

function GifGrid({ category }) {
    
    const {data:images, loading} = useFetchGifts(category);

  return (
      <>
        <h3>{ category }</h3>

        {loading && <p>Loadinf</p>}
        <div className='card-grid'>
            {
                images.map( img=>(
                    <GifGridItem 
                    key={ img.id }
                    {...img} />
                )) 
            }
        </div>
    </>
  )
}

export default GifGrid