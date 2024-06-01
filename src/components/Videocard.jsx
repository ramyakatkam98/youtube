import React from 'react'

const Videocard = (props) => {
   //console.log(props.data)
   const {snippet, statistics} = props.data
   const {title, thumbnails} = snippet
  return (
    <div>
         <img src={thumbnails.high.url} alt='thumbnails'/>
        <h1>{title}</h1>
        <p>{statistics.viewCount}</p>
    </div>
  )
}

export default Videocard