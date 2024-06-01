import React, { useState } from 'react'
import { useEffect } from 'react'

import Videocard from './Videocard'

const Videocontainer = () => {
    const [videos, setVideos] = useState([])
    useEffect(()=>{

      getVideos()

    },[])

    const getVideos = async() => {
        const data = await fetch() 
        const json = await data.json()
        //console.log(json.items)
        setVideos(json.items)
        //  console.log(videos)
    }

  return (
    <div >
         {
            videos.map(each=> <Videocard key={each.id} data={each}/> )
               
           
         }   
    </div>
  )
}

export default Videocontainer