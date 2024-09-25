import { useEffect, useState } from 'react'
import { useParams, Routes,Route } from 'react-router-dom'
// import videoList from './data/video-details.json'

import NewComment from '../../components/NewComment/NewComment'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import VideoContent from '../../components/VideoContent/VideoContent'
import NextVideos from '../../components/NextVideos/NextVideos'

function Home () {
    // const [count, setCount] = useState(0)

  const { idFromParams } = useParams();
  const [videos, setVideos] = useState([]);
  let defaultVideoId = null;

  if(videos.length > 0) {
    defaultVideoId = videos[0].id;
  }

  let videoIdDisplayed = idFromParams || defaultVideoId;

  const filteredVideos = videos.filter(video => video.id !== videoIdDisplayed)
  console.log(filteredVideos);
  useEffect(() => {
    fetch('./src/data/video-details.json')
        .then(res=>res.json())
        .then(res => {
            setVideos(res);
        })
  }, [])
  console.log(videos);
  const [video, setVideo] = useState(null)

  useEffect(() => {
    if(videoIdDisplayed === null){
        return;
    }
    fetch('./src/data/video-details.json')
        .then(res=>res.json())
        .then(response => {
            setVideo(response[0]);
        })
  }, [videoIdDisplayed])

  if(video=== null) {
    return <div className='loader-wrapper'><div className='loader'></div></div>
  } 

  return (
    <>
    <VideoPlayer video={video}/>
    <div className='desktop-bottom'>
      <div className='desktop-bottom-left'>
        <VideoContent video={video}/>
        <NewComment video={video}/>
      </div>
      <NextVideos videos={filteredVideos}/>
    </div>
    </>
  )
}

export default Home;