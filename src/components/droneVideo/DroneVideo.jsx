import React from 'react'
import "./droneVideo.css";
export function DroneVideo(props) {

    const{url} = props;
  return (
    <div className="container-fluid px-0 mt-5">
    <div className='dronoVideo col-12'>
     <video src={url} className='video' autoplay="autoplay" muted loop preload="auto"></video>
    </div>
    </div>
  )
}

