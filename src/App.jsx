import './App.scss'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import videoList from './data/video-details.json'
import Header from './components/Header/Header'
import NewComment from './components/NewComment/NewComment'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import VideoContent from './components/VideoContent/VideoContent';

function App() {
  // const [count, setCount] = useState(0)

  const { idFromParams } = useParams();
  const [videos, setVideos] = useState([]);
  let defaultVideoId = null;

  if(videos.length > 0) {
    defaultVideoId = videos[0].id;
  }

  let videoIdDisplayed = idFromParams || defaultVideoId;

  const filteredVideos = videos.filter(video => video.id !== videoIdDisplayed)

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
    <Header/>
    <VideoPlayer/>
    <VideoContent video={video} />
    <NewComment video={video}/>
    {/* <Comments/> */}
    </>
  )
}

export default App
